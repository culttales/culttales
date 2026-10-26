import { NextResponse } from "next/server";

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

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    // No delivery target configured yet: log so enquiries are not silently lost in dev.
    console.log("[contact] CONTACT_WEBHOOK_URL not set. Enquiry:", data);
    return NextResponse.json({ ok: true });
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch(() => null);

  if (!res || !res.ok) {
    return NextResponse.json({ error: "Could not send your message. Please email us directly." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
