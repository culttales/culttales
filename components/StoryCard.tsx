"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { Story } from "@/lib/stories";

type StoryCardProps = {
  story: Story;
  size?: "large" | "medium" | "small";
  priority?: boolean;
};

const ASPECT: Record<NonNullable<StoryCardProps["size"]>, string> = {
  large: "aspect-[4/5] md:aspect-[16/10]",
  medium: "aspect-[4/5]",
  small: "aspect-[3/4]",
};

export default function StoryCard({ story, size = "medium", priority }: StoryCardProps) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      data-cursor="view"
      className="group relative block overflow-hidden"
    >
      <div className={clsx("relative overflow-hidden bg-ink", ASPECT[size])}>
        <Image
          src={story.cardImage}
          alt={`${story.coupleNames} — ${story.location}`}
          fill
          priority={priority}
          sizes={size === "large" ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          className="object-cover transition-transform duration-slower ease-cinema group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-7">
          <div>
            <p className="font-display text-xl text-bone md:text-2xl">
              {story.coupleNames}
            </p>
            <p className="mt-1 text-sm text-dust">
              {story.location} &middot; {story.year}
            </p>
          </div>
          <span
            aria-hidden
            className="translate-x-0 text-bone opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100"
          >
            &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
