"use client";

import Link from "next/link";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;
const HEADLINE = ["We are documenting", "Pan Indian", "Wedding Stories."];

// Hold the hero's entrance until the logo intro has lifted (first visit only).
function introDelay() {
  if (typeof document === "undefined") return 0;
  const root = document.documentElement;
  if (root.classList.contains("intro-seen")) return 0;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;
  return 2.1;
}

export default function Hero() {
  const d = introDelay();

  return (
    <section className="relative flex h-[100svh] w-full items-center overflow-hidden bg-ink">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 9, ease: EASE, delay: d }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-main.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic overlay for legibility */}
      <div className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(11,11,11,0.8)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink to-transparent" />

      {/* Fine gold mat around the frame */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: d + 0.2, duration: 1.6, ease: EASE }}
        className="pointer-events-none absolute inset-3 z-10 border border-gold/30 md:inset-6"
      />

      <div className="relative z-10 w-full px-6 pt-16 md:px-10">
        <div className="mx-auto flex max-w-frame flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.55em" }}
            animate={{ opacity: 1, letterSpacing: "0.32em" }}
            transition={{ delay: d + 0.3, duration: 1.6, ease: EASE }}
            className="eyebrow mb-8"
          >
            Short for Culture. Long on Tales.
          </motion.p>

          <h1 className="max-w-6xl font-display text-display-lg font-light text-bone">
            {HEADLINE.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em] md:whitespace-nowrap">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: d + 0.5 + i * 0.14, duration: 1.3, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: d + 1.1, duration: 1.1, ease: EASE }}
            className="mt-8 max-w-md text-base leading-relaxed text-bone/75"
          >
            Unearthing the real rituals, colourful traditions, and beautiful
            tales of love across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: d + 1.4, duration: 1, ease: EASE }}
            className="mt-12"
          >
            <Link href="/stories" className="btn-gold bg-ink/20 backdrop-blur-sm">
              Explore Our Stories
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d + 1.6, duration: 1, ease: EASE }}
        className="absolute inset-x-6 bottom-8 z-10 hidden items-end justify-between text-[10px] uppercase tracking-[0.4em] text-bone/55 md:inset-x-12 md:bottom-12 md:flex"
      >
        <span>Kerala &middot; Rajasthan</span>
        <span>Across India &amp; Beyond</span>
      </motion.div>

    </section>
  );
}
