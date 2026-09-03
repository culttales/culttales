"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import RevealText from "./RevealText";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Cinematic about section for the homepage — full-bleed dark treatment
 * with editorial typography, staggered image reveals, and the brand's
 * signature clip-path text entrance.
 */
export default function AboutSection() {
  return (
    <section id="about-us" className="relative bg-ink text-bone overflow-hidden">
      {/* ── Top band: editorial statement ── */}
      <div className="px-6 pt-28 pb-20 md:px-10 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-frame">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-6 text-sm tracking-label text-dust"
          >
            Who We Are
          </motion.p>

          <RevealText
            as="h2"
            className="max-w-4xl font-display text-display-lg text-balance"
          >
            We are storytellers of culture, love and tradition.
          </RevealText>
        </div>
      </div>

      {/* ── Asymmetric image + text grid ── */}
      <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
        {/* Large portrait image — left */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.4, ease: EASE }}
          className="relative aspect-[4/5] w-full md:col-span-7 md:aspect-auto md:h-[85vh]"
        >
          <Image
            src="/images/about-1.jpg"
            alt="Portrait — behind the scenes at a Pan Indian wedding"
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover"
          />
          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-transparent" />
        </motion.div>

        {/* Text column — right */}
        <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 md:py-20 lg:px-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="text-base leading-relaxed text-bone/75"
          >
            CULT. tales travels across India documenting weddings in their most
            authentic form. We capture more than ceremonies — the people, the
            rituals, the chaos, the silence, the laughter, the heritage, the
            emotion.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="mt-6 text-base leading-relaxed text-bone/75"
          >
            Every wedding carries a story that deserves to be told with care,
            authenticity and visual honesty. We spend time understanding the
            community, the region, the specific version of a ritual this family
            practices, so the final story feels entirely theirs.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            className="mt-8 font-display text-xl italic text-bone/90"
          >
            Short for Culture. Long on Tales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          >
            <Link
              href="/about"
              className="link-draw mt-10 inline-block text-sm text-bone"
            >
              More about us &rarr;
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom strip: secondary image + approach cards ── */}
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.2, ease: EASE }}
          className="relative aspect-video w-full"
        >
          <Image
            src="/images/about-2.jpg"
            alt="Behind the scenes — documenting a wedding"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {[
            {
              label: "Our Approach",
              title: "Photography + Cinematography + Editorial",
              body: "We shoot every wedding across multiple mediums — photography for the detail, cinematography for the emotion, and editorial work to place the wedding within its cultural context.",
            },
            {
              label: "What We Document",
              items: [
                "The rituals — honoring their specificity to each community",
                "The people — family, friends, quiet moments",
                "The place — architecture, light, landscape",
                "The emotion — unguarded feeling underneath ceremony",
              ],
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: EASE }}
              className="border-t border-line-light px-6 py-12 md:px-8 md:py-14"
            >
              <p className="mb-4 text-sm text-dust">{card.label}</p>
              {"title" in card ? (
                <>
                  <h3 className="max-w-xs font-display text-2xl text-bone">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-bone/70">
                    {card.body}
                  </p>
                </>
              ) : (
                <ul className="flex flex-col gap-3 text-sm text-bone/80">
                  {card.items!.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
