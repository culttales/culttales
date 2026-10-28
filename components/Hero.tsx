"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

// Hold the hero's entrance until the logo intro has lifted (first visit only).
function introDelay() {
  if (typeof document === "undefined") return 0;
  const root = document.documentElement;
  if (root.classList.contains("intro-seen")) return 0;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;
  return 2.1;
}

function Rise({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.1em]">
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ delay, duration: 1.3, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const d = introDelay();

  return (
    <section className="relative overflow-hidden bg-paper px-6 pb-24 pt-32 text-char md:px-10 md:pb-36 md:pt-44">
      <div className="mx-auto flex max-w-frame flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.55em" }}
          animate={{ opacity: 1, letterSpacing: "0.32em" }}
          transition={{ delay: d + 0.2, duration: 1.6, ease: EASE }}
          className="eyebrow mb-8"
        >
          Wedding Photographers &amp; Filmmakers
        </motion.p>

        <h1 className="max-w-6xl font-display text-display-lg font-light">
          <Rise delay={d + 0.4}>We are documenting</Rise>
          <Rise delay={d + 0.54}>
            <em>Pan Indian</em> Wedding Stories.
          </Rise>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: d + 0.9, duration: 1.1, ease: EASE }}
          className="mt-8 max-w-md text-base leading-relaxed text-char/70"
        >
          Unearthing the real rituals, colourful traditions, and beautiful
          tales of love across India.
        </motion.p>

        {/* Arched film flanked by two stills */}
        <div className="mt-16 grid w-full max-w-5xl grid-cols-[1fr] items-end gap-4 md:mt-20 md:grid-cols-[1fr_1.35fr_1fr] md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: d + 1.2, duration: 1.4, ease: EASE }}
            className="relative hidden aspect-[3/4] overflow-hidden md:mb-16 md:block"
          >
            <Image
              src="/images/moment-6.jpg"
              alt="A couple dancing in a shower of sparks"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: d + 1, duration: 1.4, ease: EASE }}
            className="relative mx-auto w-full max-w-sm md:max-w-none"
          >
            <div className="relative aspect-[3/4.4] overflow-hidden rounded-t-full ring-1 ring-bronze/30 ring-offset-8 ring-offset-paper">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/hero-main.jpg"
                className="absolute inset-0 h-full w-full rounded-t-full object-cover"
              >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: d + 1.35, duration: 1.4, ease: EASE }}
            className="relative hidden aspect-[3/4] overflow-hidden md:mb-16 md:block"
          >
            <Image
              src="/images/moment-7.jpg"
              alt="A bride and groom smiling at each other"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: d + 1.6, duration: 1, ease: EASE }}
          className="mt-14 flex flex-col items-center gap-8"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-char/55">
            Kerala &middot; Rajasthan &middot; Across India &amp; Beyond
          </p>
          <Link href="/stories" className="btn-bronze">
            Explore Our Stories
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
