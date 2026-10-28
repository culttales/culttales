"use client";

import Image from "next/image";
import { useState } from "react";
import type { Film } from "@/lib/films";
import VideoPlayer from "./VideoPlayer";

type FilmCardProps = { film: Film };

export default function FilmCard({ film }: FilmCardProps) {
  const [open, setOpen] = useState(false);
  const playable = Boolean(film.src);

  return (
    <>
      <button
        type="button"
        onClick={() => playable && setOpen(true)}
        disabled={!playable}
        data-cursor={playable ? "play" : undefined}
        className={`group relative block w-full overflow-hidden text-left ${playable ? "" : "cursor-default"}`}
      >
        <div className="relative aspect-[9/16] w-full overflow-hidden bg-ink">
          <Image
            src={film.thumbnail}
            alt={film.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-slower ease-cinema group-hover:scale-[1.04]"
          />
          <span aria-hidden className="pointer-events-none absolute inset-3 z-10 ring-1 ring-paper/30 transition-all duration-700 group-hover:inset-4 group-hover:ring-paper/70" />
          <div className="absolute inset-0 bg-ink/30 transition-colors duration-500 group-hover:bg-ink/45" />

          <div className="absolute inset-0 flex items-center justify-center">
            {playable ? (
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/70 text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
                  <path d="M1 1.2v15.6a1 1 0 0 0 1.5.86l13-7.8a1 1 0 0 0 0-1.72l-13-7.8A1 1 0 0 0 1 1.2Z" fill="currentColor" />
                </svg>
              </span>
            ) : (
              <span className="text-[11px] uppercase tracking-[0.32em] text-bone/85">Coming soon</span>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-baseline justify-between">
          <p className="font-display text-xl text-char transition-transform duration-500 group-hover:translate-x-1 md:text-2xl">
            {film.title}
          </p>
          <p className="text-[11px] uppercase tracking-[0.25em] text-char/55">{film.location} &middot; {film.year}</p>
        </div>
      </button>

      {playable && <VideoPlayer open={open} onClose={() => setOpen(false)} poster={film.thumbnail} title={film.title} src={film.src} />}
    </>
  );
}
