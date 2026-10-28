"use client";

import Link from "next/link";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] w-full items-center overflow-hidden bg-ink">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: EASE }}
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
      <div className="absolute inset-0 bg-ink/35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(11,11,11,0.75)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 w-full px-6 pt-16 md:px-10">
        <div className="mx-auto flex max-w-frame flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: EASE }}
            className="eyebrow mb-5"
          >
            Short for Culture. Long on Tales.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1, ease: EASE }}
            className="max-w-4xl font-display text-display-lg text-bone text-balance"
          >
            We are documenting Pan Indian Wedding Stories.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: EASE }}
            className="mt-8 max-w-md text-base leading-relaxed text-bone/75"
          >
            Unearthing the real rituals, colourful traditions, and beautiful
            tales of love across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: EASE }}
            className="mt-12"
          >
            <Link
              href="/stories"
              className="inline-block border border-gold/60 bg-ink/20 px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur-sm transition-colors duration-500 hover:bg-gold hover:text-ink"
            >
              Explore Our Stories
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#introduction"
        aria-label="Scroll to introduction"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8, ease: EASE }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-bone/60"
      >
        Scroll
        <span aria-hidden className="block h-10 w-px bg-gold/70" />
      </motion.a>
    </section>
  );
}
