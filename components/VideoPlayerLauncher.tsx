"use client";

import Image from "next/image";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

/** A poster frame with a play button that opens the film in the screening room. */
export default function VideoPlayerLauncher({
  poster,
  title,
  src,
  description,
}: {
  poster: string;
  title: string;
  src?: string;
  description?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-cursor="play"
        aria-label={`Play ${title}`}
        className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-paper/10 bg-char text-left shadow-2xl"
      >
        <Image
          src={poster}
          alt=""
          fill
          sizes="(min-width: 1240px) 1240px, 100vw"
          className="card-img object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/10 to-transparent" />
        <span className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-bronze/90 text-paper shadow-2xl transition-transform duration-500 group-hover:scale-110 sm:h-24 sm:w-24">
          <svg width="22" height="25" viewBox="0 0 16 18" aria-hidden className="ml-1">
            <path d="M1 1.2v15.6a1 1 0 0 0 1.5.86l13-7.8a1 1 0 0 0 0-1.72l-13-7.8A1 1 0 0 0 1 1.2Z" fill="currentColor" />
          </svg>
        </span>
        <span className="absolute bottom-6 left-6 text-[10.5px] font-medium uppercase tracking-editorial text-gold">
          Press play to screen &rarr;
        </span>
      </button>

      <VideoPlayer
        open={open}
        onClose={() => setOpen(false)}
        poster={poster}
        title={title}
        src={src}
        description={description}
      />
    </>
  );
}
