"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import clsx from "clsx";
import type { Film } from "@/lib/films";
import SectionMarker from "../SectionMarker";
import VideoPlayer from "../VideoPlayer";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The dark "screening room" on the homepage: a wide stage that loops a
 * muted preview of the selected film, and a programme beside it. Only the
 * selected preview plays, and only while the stage is on screen.
 */
export default function Cinema({ films }: { films: Film[] }) {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    videos.current.forEach((video, i) => {
      if (!video) return;
      if (i === active && inView && !open && !reduceMotion) {
        video.muted = true;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active, inView, open, reduceMotion]);

  if (films.length === 0) return null;
  const film = films[active];

  return (
    <section id="films" className="on-dark relative overflow-hidden bg-obsidian px-5 py-24 text-paper md:px-12 md:py-36">
      <div className="mx-auto max-w-site">
        <SectionMarker index="03" title="CULT. tales cinema — motion & sound" aside="Wedding films that keep the sound of the day" />

        <div className="mt-14 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-3 !text-gold">The sound of memory</p>
            <h2 className="text-[2.5rem] font-light leading-[1.04] sm:text-6xl md:text-[68px]">
              Every roar of the <em>baraat,</em>
              <br className="hidden sm:block" /> every whisper of the <em className="!text-stone">vidaai.</em>
            </h2>
          </div>
          <p className="text-base font-light leading-[1.7] text-paper/75 lg:col-span-4">
            Our films keep the music, the rituals and the people of the day. Vows, blessings,
            laughter and the dance floor at midnight, woven into a film that feels like your own.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div ref={stageRef} className="lg:col-span-8">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-paper/10 bg-char shadow-2xl sm:aspect-video">
              {films.map((f, i) => (
                <div
                  key={f.slug}
                  aria-hidden={i !== active}
                  className={clsx(
                    "absolute inset-0 transition-opacity duration-1000 ease-cinema",
                    i === active ? "opacity-100" : "opacity-0"
                  )}
                >
                  <Image
                    src={f.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 1440px) 900px, (min-width: 1024px) 64vw, 100vw"
                    className="object-cover"
                  />
                  {f.preview && !reduceMotion && (
                    <video
                      ref={(el) => {
                        videos.current[i] = el;
                      }}
                      src={f.preview}
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </div>
              ))}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-obsidian/10" />

              <div className="pointer-events-none absolute inset-x-5 top-5 flex items-center justify-between gap-3 text-[10px] font-medium uppercase tracking-editorial">
                <span className="rounded-full border border-paper/15 bg-obsidian/70 px-3.5 py-1.5 text-gold backdrop-blur-md">
                  Featured film &middot; {film.duration}
                </span>
                <span className="hidden rounded-full border border-paper/15 bg-obsidian/70 px-3.5 py-1.5 text-paper/80 backdrop-blur-md sm:inline">
                  {film.location} &middot; {film.year}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setOpen(true)}
                data-cursor="play"
                aria-label={`Play ${film.title}`}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-bronze/90 text-paper shadow-2xl transition-transform duration-500 group-hover:scale-110 sm:h-24 sm:w-24">
                  <svg width="22" height="25" viewBox="0 0 16 18" aria-hidden className="ml-1">
                    <path d="M1 1.2v15.6a1 1 0 0 0 1.5.86l13-7.8a1 1 0 0 0 0-1.72l-13-7.8A1 1 0 0 0 1 1.2Z" fill="currentColor" />
                  </svg>
                </span>
              </button>

              <div className="pointer-events-none absolute inset-x-6 bottom-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={film.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="mb-1 max-w-2xl font-display text-lg italic text-stone sm:text-xl">
                      &ldquo;{film.description}&rdquo;
                    </p>
                    <div className="flex flex-wrap items-end justify-between gap-2">
                      <h3 className="text-[1.75rem] leading-tight sm:text-4xl">{film.title}</h3>
                      <span className="text-[10.5px] font-medium uppercase tracking-editorial text-gold">
                        Press play to screen &rarr;
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-4">
            <p className="border-b border-line-light pb-3 text-[11px] font-medium uppercase tracking-editorial text-paper/60">
              Select a film ({pad(films.length)})
            </p>
            <ul className="divide-y divide-paper/10">
              {films.map((f, i) => {
                const selected = i === active;
                return (
                  <li key={f.slug}>
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setActive(i)}
                      className={clsx(
                        "my-1 w-full rounded-xl border-l-2 px-4 py-4 text-left transition-colors duration-300",
                        selected ? "border-bronze bg-paper/10" : "border-transparent hover:bg-paper/5"
                      )}
                    >
                      <span
                        className={clsx(
                          "flex items-center justify-between text-[10px] font-medium uppercase tracking-editorial",
                          selected ? "text-gold" : "text-paper/50"
                        )}
                      >
                        <span>
                          {pad(i + 1)} &middot; {f.location}
                        </span>
                        <span>{f.duration}</span>
                      </span>
                      <span className="mt-1 block font-display text-xl text-paper">{f.title}</span>
                      <span className="mt-1 block truncate text-xs font-light text-paper/60">{f.description}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <Link href="/films" className="text-link mt-3 !text-gold hover:!text-paper">
              See all films &rarr;
            </Link>
          </div>
        </div>
      </div>

      <VideoPlayer
        open={open}
        onClose={() => setOpen(false)}
        poster={film.thumbnail}
        title={film.title}
        src={film.src}
        description={film.description}
      />
    </section>
  );
}
