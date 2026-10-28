"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "motion/react";
import clsx from "clsx";
import type { Film } from "@/lib/films";
import VideoPlayer from "../VideoPlayer";

// Real photographs from the studio. `focus` keeps the couple in frame when a
// wide photo is cropped to a tall phone screen.
const SLIDES = [
  {
    src: "/images/moment-4.jpg",
    alt: "A bride and groom at sunset on a palace terrace",
    label: "Portraits",
    title: "Golden hour",
    focus: "42% 50%",
  },
  {
    src: "/images/wedding-pheras.jpg",
    alt: "The bride and groom smiling at each other beside the sacred fire",
    label: "Rituals",
    title: "The sacred fire",
    focus: "44% 50%",
  },
  {
    src: "/images/wedding-canopy.jpg",
    alt: "The bride and groom exchanging garlands under a red canopy",
    label: "Ceremony",
    title: "Under the canopy",
    focus: "48% 50%",
  },
  {
    src: "/images/moment-3.jpg",
    alt: "Family showering the bride and groom with rose petals",
    label: "Celebration",
    title: "Showered in blessings",
    focus: "52% 40%",
  },
];

const SLIDE_MS = 6500;
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Full-screen opening: a slow crossfade between four photographs, the
 * studio line, and a way into the first film. Slides advance on a timer
 * that pauses while the hero is off screen or the tab is hidden; each
 * indicator doubles as a progress bar and a manual control.
 */
export default function HeroSlideshow({ film }: { film?: Film }) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [filmOpen, setFilmOpen] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.25,
    });
    observer.observe(el);
    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const autoplay = !reduceMotion;
  const running = autoplay && visible && !filmOpen;
  const slide = SLIDES[active];

  return (
    <section
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Moments from our weddings"
      className="on-dark relative h-[100svh] min-h-[640px] w-full select-none overflow-hidden bg-obsidian text-paper"
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          aria-hidden={i !== active}
          data-active={i === active}
          className={clsx(
            "hero-slide absolute inset-0 transition-opacity duration-[1400ms] ease-cinema",
            i === active ? "z-10 opacity-100" : "z-0 opacity-0"
          )}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            sizes="100vw"
            quality={85}
            style={{ "--focus": s.focus } as CSSProperties}
            className="object-cover object-[var(--focus)] md:object-center"
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 z-20 bg-obsidian/25" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-obsidian/65 via-obsidian/15 to-obsidian/85" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-obsidian/45 via-transparent to-transparent" />

      <div className="relative z-30 mx-auto flex h-full max-w-site flex-col justify-between px-5 pb-8 pt-24 md:px-12 md:pb-12 md:pt-28">
        <div className="flex items-center justify-between border-b border-paper/15 pb-4 text-[10px] font-medium uppercase tracking-editorial text-paper/75 sm:text-[11px]">
          <span aria-live="polite">
            {pad(active + 1)} / {pad(SLIDES.length)} &mdash; {slide.title}
          </span>
          <span className="hidden md:inline">Pan-Indian wedding stories &middot; Kerala &amp; Rajasthan</span>
        </div>

        <div className="my-auto max-w-4xl py-8">
          <p className="hero-rise mb-5 text-[10.5px] font-medium uppercase tracking-[0.3em] text-gold sm:text-xs">
            Wedding photography &amp; cinematography
          </p>
          <h1 className="hero-rise text-[2.9rem] font-light leading-[0.98] tracking-[-0.01em] [--d:120ms] sm:text-7xl md:text-[88px] lg:text-[104px]">
            Short for <em className="font-normal !text-stone">Culture.</em>
            <br />
            Long on <em className="font-normal !text-gold">Tales.</em>
          </h1>
          <p className="hero-rise mt-6 max-w-xl text-[15px] font-light leading-relaxed text-paper/85 [--d:240ms] sm:text-base md:text-lg">
            Visual storytellers and memory keepers, documenting Pan-Indian weddings in their
            most authentic form: every ritual, every glance, every unscripted celebration.
          </p>

          <div className="hero-rise mt-9 flex flex-wrap items-center gap-4 [--d:360ms] sm:gap-6">
            {film?.src && (
              <button
                type="button"
                onClick={() => setFilmOpen(true)}
                data-cursor="play"
                className="group flex items-center gap-4 rounded-full border border-paper/30 bg-paper/10 py-2.5 pl-2.5 pr-7 text-left backdrop-blur-md transition-colors duration-500 hover:bg-paper hover:text-obsidian"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bronze text-paper transition-transform duration-500 group-hover:scale-105">
                  <svg width="13" height="15" viewBox="0 0 16 18" aria-hidden className="ml-0.5">
                    <path d="M1 1.2v15.6a1 1 0 0 0 1.5.86l13-7.8a1 1 0 0 0 0-1.72l-13-7.8A1 1 0 0 0 1 1.2Z" fill="currentColor" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[11px] font-medium uppercase tracking-editorial">Watch the film</span>
                  <span className="block font-display text-[13px] italic opacity-75">
                    {film.duration} &middot; {film.location}
                  </span>
                </span>
              </button>
            )}
            <a href="#stories" className="btn-outline-light">
              Explore our stories &rarr;
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 border-t border-paper/15 pt-4 sm:flex-row sm:items-end">
          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-3 sm:w-auto sm:grid-cols-4 sm:gap-6">
            {SLIDES.map((s, i) => {
              const current = i === active;
              return (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show slide ${i + 1}: ${s.title}`}
                  aria-current={current}
                  className="group relative pt-3 text-left sm:min-w-[9.5rem]"
                >
                  <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-paper/20" />
                  {current && (
                    <span
                      key={`progress-${active}`}
                      aria-hidden
                      onAnimationEnd={() => setActive((a) => (a + 1) % SLIDES.length)}
                      className={clsx(
                        "absolute inset-x-0 top-0 h-[2px] origin-left bg-bronze",
                        autoplay && "slide-progress"
                      )}
                      style={
                        autoplay
                          ? { animationDuration: `${SLIDE_MS}ms`, animationPlayState: running ? "running" : "paused" }
                          : undefined
                      }
                    />
                  )}
                  <span
                    className={clsx(
                      "block text-[10px] uppercase tracking-[0.18em] transition-colors",
                      current ? "text-gold" : "text-paper/55"
                    )}
                  >
                    {pad(i + 1)} &middot; {s.label}
                  </span>
                  <span
                    className={clsx(
                      "mt-0.5 block font-display text-[15px] italic transition-colors sm:text-base",
                      current ? "text-paper" : "text-paper/70 group-hover:text-paper"
                    )}
                  >
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>

          <a
            href="#manifesto"
            className="hidden items-center gap-3 text-[10px] uppercase tracking-editorial text-paper/70 transition-colors hover:text-gold md:flex"
          >
            <span>Scroll to explore</span>
            <span className="flex h-7 w-7 animate-bounce items-center justify-center rounded-full border border-paper/25">
              &darr;
            </span>
          </a>
        </div>
      </div>

      {film?.src && (
        <VideoPlayer
          open={filmOpen}
          onClose={() => setFilmOpen(false)}
          poster={film.thumbnail}
          title={film.title}
          src={film.src}
          description={film.description}
        />
      )}
    </section>
  );
}
