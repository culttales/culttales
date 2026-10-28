"use client";

import { FormEvent, useState } from "react";

const inputClass =
  "w-full border-b border-line-light bg-transparent py-3 text-sm text-bone placeholder-bone/40 focus:border-gold focus:outline-none";
const labelClass = "eyebrow mb-2 block";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-base text-bone/80" role="status">
        Thank you. We&rsquo;ve received your message and will reply within 48 hours.
      </p>
    );
  }

  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className={labelClass}>Your name</label>
        <input id="name" name="name" type="text" required placeholder="Couple names or contact name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" name="email" type="email" required placeholder="your@email.com" className={inputClass} />
      </div>
      <div>
        <label htmlFor="wedding" className={labelClass}>Wedding date</label>
        <input id="wedding" name="wedding" type="text" placeholder="Month & Year or Tentative" className={inputClass} />
      </div>
      <div>
        <label htmlFor="location" className={labelClass}>Location</label>
        <input id="location" name="location" type="text" placeholder="City / Region" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Tell us your story</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What makes your wedding unique? Are there specific rituals or traditions we should know about? Any questions?"
          className={`${inputClass} resize-none`}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-bone/80" role="alert">{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-10 btn-gold disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : <>Send Message &rarr;</>}
      </button>
    </form>
  );
}
