"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import type { Film } from "@/lib/films";
import VideoPlayer from "./VideoPlayer";

type FilmCardProps = { film: Film; index?: number };

export default function FilmCard({ film, index }: FilmCardProps) {
  const [open, setOpen] = useState(false);
  const [previewing, setPreviewing] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const playable = Boolean(film.src);
  const canPreview = Boolean(film.preview) && !reduceMotion;

  const startPreview = () => {
    const v = video.current;
    if (!v) return;
    v.muted = true;
    v.play().then(() => setPreviewing(true)).catch(() => {});
  };
  const stopPreview = () => {
    video.current?.pause();
    setPreviewing(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => playable && setOpen(true)}
        onMouseEnter={canPreview ? startPreview : undefined}
        onMouseLeave={canPreview ? stopPreview : undefined}
        onFocus={canPreview ? startPreview : undefined}
        onBlur={canPreview ? stopPreview : undefined}
        disabled={!playable}
        data-cursor={playable ? "play" : undefined}
        aria-label={playable ? `Play ${film.title}` : `${film.title}, coming soon`}
        className={`group relative block w-full text-left ${playable ? "" : "cursor-default"}`}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-char shadow-xl">
          <Image
            src={film.thumbnail}
            alt=""
            fill
            sizes="(min-width: 1440px) 680px, (min-width: 768px) 50vw, 100vw"
            className="card-img object-cover"
          />
          {canPreview && (
            <video
              ref={video}
              src={film.preview}
              muted
              loop
              playsInline
              preload="none"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                previewing ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-obsidian/5 to-transparent" />

          <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[10px] font-medium uppercase tracking-editorial text-paper">
            <span className="rounded-full border border-paper/15 bg-obsidian/60 px-3.5 py-1.5 backdrop-blur-md">
              {film.location} &middot; {film.year}
            </span>
            {playable && (
              <span className="rounded-full border border-paper/15 bg-obsidian/60 px-3.5 py-1.5 backdrop-blur-md">
                {film.duration}
              </span>
            )}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            {playable ? (
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bronze/90 text-paper shadow-2xl transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20">
                <svg width="18" height="20" viewBox="0 0 16 18" fill="none" aria-hidden="true" className="ml-1">
                  <path d="M1 1.2v15.6a1 1 0 0 0 1.5.86l13-7.8a1 1 0 0 0 0-1.72l-13-7.8A1 1 0 0 0 1 1.2Z" fill="currentColor" />
                </svg>
              </span>
            ) : (
              <span className="text-[11px] uppercase tracking-[0.32em] text-paper/85">Coming soon</span>
            )}
          </div>
        </div>

        <div className="mt-5 flex items-baseline gap-5">
          {index !== undefined && (
            <span className="font-display text-lg italic text-bronze">{String(index + 1).padStart(2, "0")}</span>
          )}
          <div className="min-w-0 flex-1">
            <p className="font-display text-2xl text-obsidian transition-colors duration-500 group-hover:text-bronze md:text-3xl">
              {film.title}
            </p>
            <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-char/70">{film.description}</p>
          </div>
        </div>
      </button>

      {playable && (
        <VideoPlayer
          open={open}
          onClose={() => setOpen(false)}
          poster={film.thumbnail}
          title={film.title}
          src={film.src}
          description={film.description}
        />
      )}
    </>
  );
}
