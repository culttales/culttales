"use client";

import Image from "next/image";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] w-full items-end overflow-hidden bg-ink">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: EASE }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-main.jpg"
          alt="A wedding ritual in Pushkar, Rajasthan, at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
      <div className="absolute inset-0 bg-ink/20" />

      <div className="relative z-10 w-full px-6 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto max-w-frame">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: EASE }}
            className="mb-5 text-sm tracking-label text-dust"
          >
            Short for Culture. Long on Tales.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1, ease: EASE }}
            className="max-w-3xl font-display text-display-lg text-bone text-balance"
          >
            We are documenting Pan Indian Wedding Stories.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: EASE }}
            className="mt-6 max-w-md text-base text-bone/80"
          >
            Unearthing the real rituals, colourful traditions, and beautiful
            tales of love across India.
          </motion.p>

          <motion.a
            href="#introduction"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: EASE }}
            className="link-draw mt-10 inline-block text-sm text-bone"
          >
            Explore Stories &darr;
          </motion.a>
        </div>
      </div>
    </section>
  );
}
