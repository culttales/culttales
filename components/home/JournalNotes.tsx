"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { JournalPost } from "@/lib/journal";
import { contact } from "@/lib/site";
import SectionMarker from "../SectionMarker";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Notes from the journal, one at a time, with the studio's channels below. */
export default function JournalNotes({ posts }: { posts: JournalPost[] }) {
  const [index, setIndex] = useState(0);
  if (posts.length === 0) return null;
  const post = posts[index];
  const step = (by: number) => setIndex((i) => (i + by + posts.length) % posts.length);

  return (
    <section id="journal" className="border-t border-line-dark bg-paper px-5 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-site">
        <SectionMarker index="05" title="Notes from the journal" aside="Rituals, culture & the craft behind our work" />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href={`/journal/${post.slug}`}
              data-cursor="view"
              className="group relative mx-auto block aspect-[4/5] max-w-md overflow-hidden rounded-2xl bg-sand shadow-lg"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 28rem, 100vw"
                    style={{ "--focus": post.imageFocus ?? "50% 50%" } as CSSProperties}
                    className="card-img object-cover object-[var(--focus)]"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-xl bg-obsidian/80 p-4 text-paper backdrop-blur-md">
                <div className="min-w-0">
                  <p className="text-[9.5px] font-medium uppercase tracking-editorial text-gold">{post.category}</p>
                  <p className="truncate font-display text-lg italic">{post.title}</p>
                </div>
                <span className="shrink-0 font-display text-sm italic text-paper/70">{post.date}</span>
              </div>
            </Link>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-1.5 text-[10px] font-medium uppercase tracking-editorial text-bronze">
              &#10022; From the journal &middot; {post.readTime} read
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <blockquote className="font-display text-[1.75rem] italic leading-[1.25] text-obsidian sm:text-4xl md:text-[42px]">
                  &ldquo;{post.excerpt}&rdquo;
                </blockquote>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line-dark pt-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-editorial text-obsidian">{post.title}</p>
                <Link href={`/journal/${post.slug}`} className="text-link mt-2">
                  Read the note &rarr;
                </Link>
              </div>
              {posts.length > 1 && (
                <div className="flex items-center gap-3">
                  <span className="mr-2 font-display text-base italic text-muted" aria-live="polite">
                    {index + 1} / {posts.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous note"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-obsidian/20 transition-colors hover:border-obsidian hover:bg-obsidian hover:text-paper"
                  >
                    &larr;
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next note"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-obsidian/20 transition-colors hover:border-obsidian hover:bg-obsidian hover:text-paper"
                  >
                    &rarr;
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-line-dark pt-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted">Follow the stories as they unfold</p>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-display text-3xl text-obsidian transition-colors hover:text-bronze sm:text-4xl"
          >
            {contact.instagramHandle}
          </a>
          <div className="mt-5 flex justify-center gap-8 text-[10.5px] font-medium uppercase tracking-editorial text-bronze">
            <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-obsidian">Instagram</a>
            <a href={contact.youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-obsidian">YouTube</a>
            <a href={contact.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-obsidian">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
}
