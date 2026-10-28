"use client";

import { FormEvent, useState } from "react";

// Inline "fill in the blanks" fields that sit on the line of the letter.
const blank =
  "ml-2 mr-0.5 inline-block min-w-0 border-b border-gold/50 bg-transparent px-1 pb-1 text-center font-display italic text-gold placeholder-bone/30 focus:border-gold focus:outline-none";

/**
 * Enquiry written as a short letter: the couple fills in the blanks. Posts to
 * the same /api/contact endpoint as the full contact form.
 */
export default function EnquiryLetter() {
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

  return (
    <section id="enquire" className="relative bg-ink px-6 py-28 text-bone md:px-10 md:py-44">
      <div className="mx-auto max-w-4xl text-center">
        <p className="eyebrow mb-6">Begin Your Story</p>
        <h2 className="font-display text-display-lg">Hello there.</h2>
        <div aria-hidden className="ornament mt-10">
          <i />
        </div>

        {status === "sent" ? (
          <p className="mx-auto mt-16 max-w-xl font-display text-2xl italic text-bone/85" role="status">
            Thank you. Your letter has reached us, and we will write back within 48 hours.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-16">
            <p className="font-display text-xl leading-[2.4] text-bone/85 md:text-3xl md:leading-[2.2]">
              We are
              <label className="sr-only" htmlFor="enq-name">Your names</label>
              <input id="enq-name" name="name" required placeholder="your names" className={`${blank} w-[11rem] md:w-[16rem]`} />
              , and we are getting married on
              <label className="sr-only" htmlFor="enq-wedding">Wedding date</label>
              <input id="enq-wedding" name="wedding" placeholder="the date" className={`${blank} w-[8rem] md:w-[11rem]`} />
              in
              <label className="sr-only" htmlFor="enq-location">Location</label>
              <input id="enq-location" name="location" placeholder="the city" className={`${blank} w-[8rem] md:w-[11rem]`} />
              . You can write to us at
              <label className="sr-only" htmlFor="enq-email">Email</label>
              <input id="enq-email" name="email" type="email" required placeholder="your email" className={`${blank} w-[13rem] md:w-[18rem]`} />
              .
            </p>

            <label htmlFor="enq-message" className="eyebrow mt-14 block">
              A little about your story
            </label>
            <textarea
              id="enq-message"
              name="message"
              required
              rows={3}
              placeholder="The rituals, the people, the place…"
              className="mx-auto mt-5 block w-full max-w-2xl resize-none border-b border-gold/50 bg-transparent py-3 text-center text-base text-bone placeholder-bone/30 focus:border-gold focus:outline-none"
            />

            {status === "error" && (
              <p className="mt-6 text-sm text-bone/80" role="alert">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-14 inline-block border border-gold/60 px-12 py-4 text-[11px] uppercase tracking-[0.3em] text-gold transition-colors duration-500 hover:bg-gold hover:text-ink disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send Our Letter"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
