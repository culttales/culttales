"use client";

import Image from "next/image";
import { useId, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import SectionMarker from "../SectionMarker";

type Photo = { src: string; alt: string; focus?: string };

const PILLARS: {
  title: string;
  body: string;
  chips: string[];
  tag: string;
  caption: string;
  main: Photo;
  second: Photo;
}[] = [
  {
    title: "Documentary & editorial photography",
    body: "Honest, unobtrusive storytelling paired with considered portraits. We move quietly through your rituals so every laugh, every tear and every stolen glance stays unscripted.",
    chips: ["Candid & documentary", "Editorial portraits", "Details & heirlooms"],
    tag: "Pillar 01 · Photography",
    caption: "Unscripted emotion, framed with grace.",
    main: { src: "/images/moment-5.jpg", alt: "A bride in red smiling beside a window", focus: "68% 40%" },
    second: { src: "/images/moment-7.jpg", alt: "The bride and groom smiling under falling sparks" },
  },
  {
    title: "Cinematic wedding films",
    body: "Films that keep how your wedding felt: the vows, the blessings, the music and the people, shaped into a story with its own rhythm and sound.",
    chips: ["Story-led edits", "Vows & live sound", "Cinematic colour"],
    tag: "Pillar 02 · Film",
    caption: "Not only how it looked, but how it felt.",
    main: { src: "/images/film-1-still.jpg", alt: "The bride and groom under a red canopy, from one of our films", focus: "56% 50%" },
    second: { src: "/images/film-2-still.jpg", alt: "Family dancing at a celebration, from one of our films", focus: "60% 50%" },
  },
  {
    title: "Cultural documentation",
    body: "Every community celebrates differently. We learn the meaning behind your rituals before the day, so the story we tell carries your culture and traditions as they truly are.",
    chips: ["Research before the day", "Rituals in context", "Family & heritage"],
    tag: "Pillar 03 · Culture",
    caption: "Your traditions, kept as they truly are.",
    main: { src: "/images/wedding-pheras.jpg", alt: "The bride and groom beside the sacred fire", focus: "42% 50%" },
    second: { src: "/images/moment-1.jpg", alt: "A bride laughing among the women of her family" },
  },
];

const pad = (n: number) => String(n).padStart(2, "0");
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Craft() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const pillar = PILLARS[active];

  return (
    <section id="craft" className="border-t border-line-dark bg-sand px-5 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-site">
        <SectionMarker index="04" title="Our craft" aside="For intimate & grand celebrations" />

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-4">The three pillars of CULT. tales</p>
            <h2 className="text-[2.5rem] leading-[1.05] text-obsidian sm:text-5xl md:text-[56px]">
              Crafted for families who value <em>legacy</em> over trends.
            </h2>

            <div className="mt-10 divide-y divide-obsidian/10 border-y border-obsidian/10">
              {PILLARS.map((p, i) => {
                const open = i === active;
                const panelId = `${baseId}-panel-${i}`;
                return (
                  <div key={p.title} className="py-6 md:py-7">
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setActive(i)}
                      className="group flex w-full items-center justify-between gap-6 text-left"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-display text-base italic text-bronze">{pad(i + 1)} /</span>
                        <span
                          className={clsx(
                            "font-display text-[1.6rem] leading-tight transition-colors sm:text-3xl",
                            open ? "text-obsidian" : "text-obsidian/70 group-hover:text-bronze"
                          )}
                        >
                          {p.title}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className={clsx(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-500",
                          open ? "rotate-45 border-bronze text-bronze" : "border-obsidian/20 text-obsidian/60"
                        )}
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={panelId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.55, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4 pl-9 pt-4 text-base font-light leading-[1.7] text-char/85">
                            <p>{p.body}</p>
                            <ul className="flex flex-wrap gap-2 pt-1">
                              {p.chips.map((chip) => (
                                <li
                                  key={chip}
                                  className="rounded-full border border-obsidian/10 bg-paper px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-obsidian"
                                >
                                  {chip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href="#inquire" className="btn-dark">
                Plan your wedding with us &rarr;
              </a>
              <span className="font-display text-base italic text-muted">
                Timelines and budgets are discussed individually.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-12 items-center gap-4 sm:gap-6 lg:col-span-6">
            <Frame photo={pillar.main} id={`main-${active}`} className="col-span-7 aspect-[3/4] shadow-xl" sizes="(min-width: 1440px) 400px, (min-width: 1024px) 28vw, 58vw" />
            <div className="col-span-5 space-y-4">
              <Frame photo={pillar.second} id={`second-${active}`} className="aspect-[4/5] shadow-lg" sizes="(min-width: 1440px) 280px, (min-width: 1024px) 20vw, 40vw" />
              <div className="rounded-xl border border-obsidian/10 bg-paper p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-[9.5px] font-medium uppercase tracking-[0.16em] text-bronze">{pillar.tag}</p>
                    <p className="mt-1 font-display text-base italic leading-snug text-obsidian sm:text-lg">
                      &ldquo;{pillar.caption}&rdquo;
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Frame({ photo, id, className, sizes }: { photo: Photo; id: string; className: string; sizes: string }) {
  return (
    <div className={clsx("relative overflow-hidden rounded-2xl bg-paper", className)}>
      <AnimatePresence initial={false}>
        <motion.div
          key={id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="absolute inset-0"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            style={{ "--focus": photo.focus ?? "50% 50%" } as CSSProperties}
            className="object-cover object-[var(--focus)]"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
