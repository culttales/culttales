"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import type { Film } from "@/lib/films";
import VideoPlayer from "../VideoPlayer";

/**
 * Full-screen opening: a muted, looping film of a real wedding behind a
 * centred headline. The loop pauses while the hero is off screen, and
 * stays on its poster frame for visitors who prefer reduced motion.
 */
export default function HeroVideo({ film }: { film?: Film }) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [filmOpen, setFilmOpen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;
    if (reduceMotion || filmOpen) {
      video.pause();
      return;
    }
    let inView = true;
    const sync = () => {
      if (inView && !document.hidden) void video.play().catch(() => {});
      else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    observer.observe(section);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [reduceMotion, filmOpen]);

  return (
    <section
      ref={sectionRef}
      className="on-dark relative flex h-[100svh] min-h-[640px] w-full select-none flex-col items-center justify-center overflow-hidden bg-obsidian px-5 text-center text-paper"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay={!reduceMotion}
        preload="metadata"
        poster="/images/hero-poster.jpg"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-obsidian/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(22,20,18,0.6)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-obsidian/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-obsidian/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl pt-10">
        <p className="hero-rise mb-6 text-[10.5px] font-medium uppercase tracking-[0.32em] text-gold sm:text-xs md:mb-8">
          Where Culture Becomes Story
        </p>
        <h1 className="hero-rise font-display text-[2.85rem] font-normal italic leading-[1.04] tracking-[-0.01em] text-paper [--d:120ms] sm:text-6xl md:text-7xl lg:text-[5.6rem]">
          We are documenting
          <br className="hidden sm:block" /> Pan Indian
          <br className="hidden sm:block" /> Wedding Stories.
        </h1>
        <p className="hero-rise mx-auto mt-7 max-w-md text-base font-light leading-relaxed text-paper/80 [--d:240ms] md:mt-9 md:max-w-xl md:text-lg">
          Unearthing the real rituals, colourful traditions, and beautiful tales of love across India.
        </p>
        <p className="hero-rise mt-5 text-[10px] font-medium uppercase tracking-[0.28em] text-paper/60 [--d:300ms] sm:text-[11px]">
          Wedding Stories &middot; Culture &middot; Documentary
        </p>

        {film?.src && (
          <div className="hero-rise mt-9 flex justify-center [--d:360ms]">
            <button
              type="button"
              onClick={() => setFilmOpen(true)}
              data-cursor="play"
              className="group flex items-center gap-4 rounded-full border border-paper/30 bg-paper/10 py-2 pl-2 pr-6 text-left backdrop-blur-md transition-colors duration-500 hover:bg-paper hover:text-obsidian"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bronze text-paper transition-transform duration-500 group-hover:scale-105">
                <svg width="12" height="14" viewBox="0 0 16 18" aria-hidden className="ml-0.5">
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
          </div>
        )}
      </div>

      <a
        href="#stories"
        className="hero-rise absolute inset-x-0 bottom-7 z-10 mx-auto flex w-fit flex-col items-center gap-4 text-[10px] font-medium uppercase tracking-[0.32em] text-paper/80 transition-colors [--d:480ms] hover:text-gold md:bottom-9"
      >
        <span>Explore stories</span>
        <span aria-hidden className="h-10 w-px bg-gold/70" />
      </a>

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
