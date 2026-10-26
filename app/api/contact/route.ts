import { NextResponse } from "next/server";
import { contact } from "@/lib/site";

const fields = ["name", "email", "wedding", "location", "message"] as const;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data: Record<string, string> = {};
  for (const key of fields) {
    const value = body[key];
    data[key] = typeof value === "string" ? value.trim().slice(0, 4000) : "";
  }

  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json(
      { error: "Please add your name, a valid email and a message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No key configured (local dev): log so enquiries are not silently lost.
    console.log("[contact] RESEND_API_KEY not set. Enquiry:", data);
    return NextResponse.json({ ok: true });
  }

  const row = (label: string, value: string) =>
    value ? `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>` : "";

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
        row("Name", data.name) +
        row("Email", data.email) +
        row("Wedding date", data.wedding) +
        row("Location", data.location) +
        `<p><strong>Message:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`,
    }),
  }).catch(() => null);

  if (!res || !res.ok) {
    return NextResponse.json(
      { error: `Could not send your message. Please email us at ${contact.email}.` },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
