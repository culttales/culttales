"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import type { Story } from "@/lib/stories";

const FILTERS = [
  { id: "all", label: "All stories" },
  { id: "north", label: "North India" },
  { id: "south", label: "South India" },
  { id: "east-west", label: "East & West" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

const ZONE_LABEL: Record<Story["zone"], string> = {
  north: "North India",
  south: "South India",
  "east-west": "East & West India",
};

// The magazine rhythm used when every story shows: a tall pair, a wide
// frame, an offset pair, then a cinema-wide close. Phones get one column.
const LAYOUT = [
  { span: "md:col-span-7", aspect: "aspect-[4/5]", sizes: "(min-width: 1440px) 780px, (min-width: 768px) 56vw, 100vw" },
  { span: "md:col-span-5 md:mt-24", aspect: "aspect-[4/5] md:aspect-[3/4]", sizes: "(min-width: 1440px) 560px, (min-width: 768px) 40vw, 100vw" },
  { span: "md:col-span-12", aspect: "aspect-[4/3] md:aspect-[16/9]", sizes: "(min-width: 1440px) 1344px, 100vw" },
  { span: "md:col-span-6", aspect: "aspect-[4/5]", sizes: "(min-width: 1440px) 660px, (min-width: 768px) 48vw, 100vw" },
  { span: "md:col-span-6 md:mt-20", aspect: "aspect-[4/5]", sizes: "(min-width: 1440px) 660px, (min-width: 768px) 48vw, 100vw" },
  { span: "md:col-span-12", aspect: "aspect-[4/3] md:aspect-[21/9]", sizes: "(min-width: 1440px) 1344px, 100vw" },
];
const FILTERED = { span: "md:col-span-6", aspect: "aspect-[4/5]", sizes: "(min-width: 768px) 48vw, 100vw" };

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Wedding stories in a magazine rhythm, with region filters beside the
 * heading. Used on the homepage and on the stories page.
 */
export default function StoryBoard({ stories, heading }: { stories: Story[]; heading?: ReactNode }) {
  const [filter, setFilter] = useState<FilterId>("all");
  const shown = filter === "all" ? stories : stories.filter((s) => s.zone === filter);

  return (
    <>
      <div className="flex flex-col justify-between gap-8 border-b border-line-dark pb-12 lg:flex-row lg:items-end">
        <div>{heading}</div>

        <div role="group" aria-label="Filter stories by region" className="flex flex-wrap gap-2 sm:gap-3">
          {FILTERS.map((f) => {
            const count = f.id === "all" ? stories.length : stories.filter((s) => s.zone === f.id).length;
            if (count === 0) return null;
            const selected = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(f.id)}
                className={clsx(
                  "rounded-full px-5 py-2.5 text-[10.5px] font-medium uppercase tracking-editorial transition-colors duration-300",
                  selected ? "bg-obsidian text-paper" : "bg-sand text-obsidian hover:bg-stone"
                )}
              >
                {f.label}
                {f.id === "all" && <span className="ml-1.5 opacity-60">({pad(count)})</span>}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div layout className="mt-14 grid grid-cols-1 items-start gap-y-14 md:grid-cols-12 md:gap-x-10 md:gap-y-16">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((story, i) => {
            const slot = filter === "all" ? LAYOUT[i % LAYOUT.length] : FILTERED;
            return (
              <motion.article
                key={story.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={slot.span}
              >
                <Link href={`/stories/${story.slug}`} data-cursor="view" className="group block">
                  <div className={clsx("relative overflow-hidden rounded-2xl bg-sand shadow-md", slot.aspect)}>
                    <Image
                      src={story.cardImage}
                      alt={`${story.coupleNames}, ${story.location}`}
                      fill
                      sizes={slot.sizes}
                      style={{ "--focus": story.cardFocus ?? "50% 50%" } as CSSProperties}
                      className="card-img object-cover object-[var(--focus)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-obsidian/5 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[10px] font-medium uppercase tracking-editorial text-paper">
                      <span className="rounded-full border border-paper/15 bg-obsidian/55 px-3.5 py-1.5 backdrop-blur-md">
                        {ZONE_LABEL[story.zone]}
                      </span>
                      <span className="rounded-full border border-paper/15 bg-obsidian/55 px-3.5 py-1.5 backdrop-blur-md">
                        {story.year}
                      </span>
                    </div>

                    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-paper">
                      <div>
                        <p className="text-[10px] uppercase tracking-editorial text-paper/80">{story.location}</p>
                        <h3 className="mt-1 text-[2rem] leading-none sm:text-4xl md:text-5xl">{story.coupleNames}</h3>
                      </div>
                      <span
                        aria-hidden
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bronze transition-transform duration-500 group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <p className="font-display text-lg italic text-char/85">&ldquo;{story.openingLine}&rdquo;</p>
                    <span className="shrink-0 text-[10.5px] font-medium uppercase tracking-editorial text-bronze">
                      Read the story &rarr;
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
