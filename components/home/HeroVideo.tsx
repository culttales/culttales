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

      <div className="pointer-events-none absolute inset-0 bg-obsidian/45" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-obsidian/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="hero-rise text-[10px] font-medium uppercase tracking-[0.4em] text-paper/70 sm:text-[11px]">
          Where Culture Becomes Story
        </p>
        <h1 className="hero-rise mt-7 font-display text-[2.6rem] font-light italic leading-[1.08] text-paper [--d:120ms] sm:text-6xl md:mt-9 lg:text-[4.75rem]">
          We are documenting
          <br /> Pan Indian Wedding Stories.
        </h1>

        {film?.src && (
          <button
            type="button"
            onClick={() => setFilmOpen(true)}
            data-cursor="play"
            className="hero-rise group mx-auto mt-10 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.32em] text-paper/80 transition-colors [--d:240ms] hover:text-gold sm:text-[11px] md:mt-12"
          >
            <span aria-hidden className="h-px w-8 bg-paper/50 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
            Watch the film
            <span aria-hidden className="h-px w-8 bg-paper/50 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
          </button>
        )}
      </div>

      <a
        href="#stories"
        aria-label="Explore stories"
        className="hero-rise group absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center [--d:360ms] md:bottom-10"
      >
        <span aria-hidden className="h-12 w-px bg-paper/40 transition-colors group-hover:bg-gold" />
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
