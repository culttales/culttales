import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { contact } from "@/lib/site";
import { BUDGETS } from "@/lib/budgets";

// Every field the enquiry forms may send, with its label in the email.
const fields = [
  ["name", "Names"],
  ["email", "Email"],
  ["phone", "Phone / WhatsApp"],
  ["wedding", "Celebration dates"],
  ["location", "Venue & city"],
  ["guests", "Guests"],
  ["rituals", "Rituals & events"],
  ["scope", "Coverage"],
  ["budget", "Budget estimate"],
  ["message", "Message"],
] as const;

type Field = (typeof fields)[number][0];

// The Workers rate limiting binding declared in wrangler.jsonc.
type RateLimiter = { limit(options: { key: string }): Promise<{ success: boolean }> };

const failed = () =>
  NextResponse.json(
    { error: `Could not send your message. Please email us at ${contact.email}.` },
    { status: 502 },
  );

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 403 });
  }

  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  if (!(await withinRateLimit(ip))) {
    return NextResponse.json(
      { error: `Too many messages in a short time. Please wait a minute, or email us at ${contact.email}.` },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const input = body as Record<string, unknown>;

  // A hidden field people never see; bots that fill it get a quiet "ok".
  if (typeof input.website === "string" && input.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!(await passesTurnstile(input["cf-turnstile-response"], ip))) {
    return NextResponse.json(
      { error: "Please complete the check above the button and try again." },
      { status: 400 },
    );
  }

  const data = {} as Record<Field, string>;
  for (const [key] of fields) {
    const value = input[key];
    const text = Array.isArray(value)
      ? value.filter((v) => typeof v === "string").join(", ")
      : typeof value === "string"
        ? value
        : "";
    data[key] = text.trim().slice(0, 4000);
  }

  // Optional; anything outside the offered ranges is dropped.
  if (!(BUDGETS as readonly string[]).includes(data.budget)) data.budget = "";

  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json(
      { error: "Please add your names, a valid email and a few words about your celebration." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY && !process.env.SUPABASE_SECRET_KEY) {
    if (process.env.NODE_ENV === "development") {
      // Local dev without keys: log so test enquiries are visible.
      console.log("[contact] No RESEND_API_KEY or SUPABASE_SECRET_KEY. Enquiry:", data);
      return NextResponse.json({ ok: true });
    }
    // In production, never tell a couple their enquiry was sent when it went nowhere.
    console.error("[contact] No RESEND_API_KEY or SUPABASE_SECRET_KEY set; enquiry not delivered.");
    return failed();
  }

  const emailed = await sendEmail(data);
  const saved = await saveEnquiry(data, emailed);

  if (!emailed && !saved) return failed();
  return NextResponse.json({ ok: true });
}

// Browsers send Origin on cross-site POSTs; refuse ones from other sites.
// Compares with the Host header, since request.url is rewritten on Workers.
function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? new URL(request.url).host;
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

// At most a few enquiries a minute from one address (limit set in wrangler.jsonc).
// Allows the request when the binding is missing, e.g. under `next start`.
async function withinRateLimit(ip: string) {
  try {
    const { env } = getCloudflareContext();
    const limiter = (env as { CONTACT_LIMITER?: RateLimiter }).CONTACT_LIMITER;
    if (!limiter) return true;
    const { success } = await limiter.limit({ key: ip });
    return success;
  } catch {
    return true;
  }
}

// Verifies the Cloudflare Turnstile token when TURNSTILE_SECRET_KEY is set.
async function passesTurnstile(token: unknown, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (typeof token !== "string" || !token) return false;

  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip !== "unknown") form.append("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  }).catch(() => null);
  const result = (await res?.json().catch(() => null)) as { success?: boolean } | null;
  return Boolean(result?.success);
}

// Emails the enquiry through Resend. Returns false when no key is set or the send fails.
async function sendEmail(data: Record<Field, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const html = fields
    .filter(([key]) => key !== "message" && data[key])
    .map(([key, label]) => `<p><strong>${label}:</strong> ${escapeHtml(data[key])}</p>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "CULT. tales <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || contact.email],
      reply_to: data.email,
      subject: `New enquiry from ${data.name.replace(/[\r\n]+/g, " ")}`,
      html:
        html +
        `<p><strong>Message:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`,
    }),
  }).catch(() => null);

  if (!res?.ok) {
    // Status only: the response body can echo the enquiry back.
    console.error("[contact] Resend send failed:", res?.status ?? "network error");
    return false;
  }
  return true;
}

// Stores the enquiry in Supabase (the enquiries table) through its REST API.
// Returns false when Supabase is not configured or the insert fails.
async function saveEnquiry(data: Record<Field, string>, emailed: boolean) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return false;

  const row = Object.fromEntries(
    fields.map(([field]) => [field, data[field] || null]),
  );

  const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/enquiries`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ ...row, emailed }),
  }).catch(() => null);

  if (!res?.ok) {
    console.error("[contact] Supabase insert failed:", res?.status ?? "network error");
    return false;
  }
  return true;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
