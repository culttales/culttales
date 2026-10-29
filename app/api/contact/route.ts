import { NextResponse } from "next/server";
import { contact } from "@/lib/site";

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
  ["message", "Message"],
] as const;

type Field = (typeof fields)[number][0];

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // A hidden field people never see; bots that fill it get a quiet "ok".
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const data = {} as Record<Field, string>;
  for (const [key] of fields) {
    const value = body[key];
    const text = Array.isArray(value)
      ? value.filter((v) => typeof v === "string").join(", ")
      : typeof value === "string"
        ? value
        : "";
    data[key] = text.trim().slice(0, 4000);
  }

  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json(
      { error: "Please add your names, a valid email and a few words about your celebration." },
      { status: 400 },
    );
  }

  const emailed = await sendEmail(data);
  const saved = await saveEnquiry(data, emailed);

  if (!emailed && !saved) {
    if (!process.env.RESEND_API_KEY && !process.env.SUPABASE_URL) {
      // Nothing configured (local dev): log so enquiries are not silently lost.
      console.log("[contact] RESEND_API_KEY and SUPABASE_URL not set. Enquiry:", data);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: `Could not send your message. Please email us at ${contact.email}.` },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
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

  return Boolean(res?.ok);
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
    console.error("[contact] Supabase insert failed:", res?.status, await res?.text().catch(() => ""));
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
