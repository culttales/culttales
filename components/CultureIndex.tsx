"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { regions } from "@/lib/regions";

/**
 * "One Country. A Thousand Stories."
 *
 * Rather than a literal, travel-site-style map of India, this presents the
 * regions as a large editorial index — a list you read, with the image
 * changing behind it. Keeps the section feeling like a magazine spread
 * rather than a tourism widget.
 */
export default function CultureIndex() {
  const [active, setActive] = useState(0);
  const region = regions[active];

  return (
    <section className="bg-ink px-6 py-28 text-bone md:px-10 md:py-36">
      <div className="mx-auto max-w-frame">
        <div className="mb-14 max-w-xl">
          <h2 className="font-display text-display-md text-balance">
            One Country. A Thousand Stories.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <ul className="border-t border-line-light">
            {regions.map((r, i) => (
              <li key={r.name} className="border-b border-line-light">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={clsx(
                    "flex w-full items-baseline justify-between py-4 text-left font-display transition-colors duration-300 md:py-5",
                    active === i ? "text-bone" : "text-bone/40 hover:text-bone/70"
                  )}
                >
                  <span className="text-2xl md:text-3xl">{r.name}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/60 md:aspect-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={region.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={region.image}
                  alt={`A wedding tradition from ${region.name}`}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="max-w-sm text-sm text-bone/85">{region.detail}</p>
                  {region.storySlug && (
                    <Link
                      href={`/stories/${region.storySlug}`}
                      className="link-draw mt-4 inline-block text-sm text-bone"
                    >
                      View the story &rarr;
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
