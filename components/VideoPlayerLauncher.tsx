"use client";

import Image from "next/image";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

export default function VideoPlayerLauncher({
  poster,
  title,
  src,
}: {
  poster: string;
  title: string;
  src?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-cursor="play"
        className="group relative block aspect-video w-full overflow-hidden text-left"
      >
        <Image
          src={poster}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-slower ease-cinema group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-ink/30 transition-colors duration-500 group-hover:bg-ink/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="link-draw font-display text-2xl text-bone">
            Watch Film &rarr;
          </span>
        </div>
      </button>

      <VideoPlayer open={open} onClose={() => setOpen(false)} poster={poster} title={title} src={src} />
    </>
  );
}
