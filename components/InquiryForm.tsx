"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { contact } from "@/lib/site";
import Turnstile from "./Turnstile";

const RITUALS = [
  "Haldi / Pithi",
  "Mehendi",
  "Sangeet / Cocktail",
  "Pheras / Muhurtham / Nikaah",
  "Reception",
  "Pre-wedding shoot",
];

const GUESTS = ["Intimate (under 100 guests)", "100 – 250 guests", "250 – 500 guests", "500+ guests"];

const SCOPES = ["Photography + Film", "Photography only", "Film only"];

type Sent = { email: string; dates: string; venue: string };

/**
 * The wedding enquiry: couple, dates, place, the rituals to cover and a few
 * words about the celebration. Posts JSON to /api/contact, which emails the
 * studio. A hidden "website" field catches simple spam bots, and Turnstile
 * runs when its site key is set.
 */
export default function InquiryForm() {
  const id = useId();
  const [rituals, setRituals] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [sent, setSent] = useState<Sent | null>(null);
  // Bumped after a failed send so the bot check renders a fresh, unused token.
  const [checkKey, setCheckKey] = useState(0);

  const toggleRitual = (name: string) =>
    setRituals((list) => (list.includes(name) ? list.filter((r) => r !== name) : [...list, name]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, rituals }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setSent({ email: data.email, dates: data.wedding, venue: data.location });
      setStatus("idle");
      form.reset();
      setRituals([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
      setCheckKey((k) => k + 1);
    }
  }

  const field = (name: string) => `${id}-${name}`;

  return (
    <div className="rounded-3xl border border-line-dark bg-paper p-6 shadow-xl sm:p-12">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            role="status"
            className="space-y-6 py-8 text-center"
          >
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-bronze/15 font-display text-3xl text-bronze">
              &#10003;
            </span>
            <p className="eyebrow">Enquiry received</p>
            <h3 className="text-3xl text-obsidian sm:text-4xl">Thank you. Your story is already special to us.</h3>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-char/80">
              We will write back to <strong className="font-medium">{sent.email}</strong> within 48 hours
              {sent.dates ? <> about {sent.dates}</> : null}
              {sent.venue ? <> in {sent.venue}</> : null}.
            </p>
            <div className="mx-auto max-w-md space-y-2 rounded-2xl border border-line-dark bg-sand p-6 text-left">
              <p className="text-[10px] font-semibold uppercase tracking-editorial text-bronze">While you wait</p>
              <p className="font-display text-xl text-obsidian">Watch a wedding film, or read a story from the archive.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                <Link href="/films" className="text-link">Our films &rarr;</Link>
                <Link href="/stories" className="text-link">Wedding stories &rarr;</Link>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSent(null)}
              className="text-[11px] uppercase tracking-editorial text-muted transition-colors hover:text-obsidian"
            >
              &larr; Send another note
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={onSubmit}
            className="space-y-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line-dark pb-4">
              <span className="font-display text-xl italic text-obsidian">The couple &amp; the celebration</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-bronze">We reply within 48 hours</span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor={field("name")} className="field-label">Your names *</label>
                <input id={field("name")} name="name" type="text" required autoComplete="name" placeholder="e.g. Tara & Rohan" className="field" />
              </div>
              <div>
                <label htmlFor={field("email")} className="field-label">Email *</label>
                <input id={field("email")} name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="field" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor={field("phone")} className="field-label">Phone / WhatsApp</label>
                <input id={field("phone")} name="phone" type="tel" autoComplete="tel" placeholder="+91" className="field" />
              </div>
              <div>
                <label htmlFor={field("wedding")} className="field-label">Celebration dates *</label>
                <input id={field("wedding")} name="wedding" type="text" required placeholder="e.g. 12–14 December 2026" className="field" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor={field("location")} className="field-label">Venue &amp; city</label>
                <input id={field("location")} name="location" type="text" placeholder="e.g. Kumarakom, Kerala" className="field" />
              </div>
              <div>
                <label htmlFor={field("guests")} className="field-label">Estimated guests</label>
                <select id={field("guests")} name="guests" defaultValue="" className="field cursor-pointer">
                  <option value="">Choose an estimate</option>
                  {GUESTS.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>

            <fieldset>
              <legend className="field-label mb-3">Rituals &amp; events to cover</legend>
              <div className="flex flex-wrap gap-2">
                {RITUALS.map((name) => {
                  const on = rituals.includes(name);
                  return (
                    <button
                      key={name}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleRitual(name)}
                      className={clsx(
                        "rounded-full border px-4 py-2 text-xs transition-colors duration-300",
                        on ? "border-bronze bg-bronze text-paper" : "border-obsidian/20 bg-sand text-obsidian hover:border-bronze"
                      )}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="field-label mb-3">What would you like us to cover?</legend>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {SCOPES.map((scope, i) => (
                  <label
                    key={scope}
                    className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-obsidian/15 bg-sand/60 p-3 transition-colors hover:border-bronze has-[:checked]:border-bronze has-[:checked]:bg-sand"
                  >
                    <input type="radio" name="scope" value={scope} defaultChecked={i === 0} className="accent-bronze" />
                    <span className="text-xs font-medium text-obsidian">{scope}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor={field("message")} className="field-label">Tell us about the two of you *</label>
              <textarea
                id={field("message")}
                name="message"
                required
                rows={4}
                placeholder="How you met, the traditions that matter to your families, or a moment you are dreaming of…"
                className="w-full resize-y rounded-xl border border-obsidian/15 bg-sand/50 p-3.5 text-sm text-obsidian placeholder:text-muted/60 focus:border-bronze focus:outline-none"
              />
            </div>

            {/* Left empty by people; bots tend to fill it. */}
            <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor={field("website")}>Website</label>
              <input id={field("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <Turnstile key={checkKey} />

            {status === "error" && (
              <p role="alert" className="rounded-xl bg-wine/5 px-4 py-3 text-sm text-wine">
                {error}
              </p>
            )}

            <button type="submit" disabled={status === "sending"} className="btn-dark w-full py-4 shadow-lg disabled:opacity-60">
              {status === "sending" ? "Sending…" : <>Send your enquiry &rarr;</>}
            </button>
            <p className="text-center text-xs text-muted">
              Prefer email? Write to{" "}
              <a href={`mailto:${contact.email}`} className="text-obsidian underline decoration-bronze/40 underline-offset-4 hover:text-bronze">
                {contact.email}
              </a>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
