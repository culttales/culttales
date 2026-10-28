"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef } from "react";
import { announceMediaPlay, lockScroll } from "@/lib/scrollLock";

type VideoPlayerProps = {
  open: boolean;
  onClose: () => void;
  poster: string;
  title: string;
  src?: string;
  description?: string;
};

/**
 * The screening room: a dark full-screen dialog that plays one film with
 * its title above and a line about it below. Escape, the close button or a
 * click outside the frame closes it, and focus returns to where it was.
 * Without `src` it shows the poster with a note, so placeholder films can
 * still be reviewed.
 */
export default function VideoPlayer({ open, onClose, poster, title, src, description }: VideoPlayerProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onCloseRef.current();
    document.addEventListener("keydown", onKey);
    lockScroll(true);
    announceMediaPlay();
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      lockScroll(false);
      previous?.focus?.();
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          data-lenis-prevent
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="on-dark fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 p-4 backdrop-blur-2xl sm:p-10"
        >
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl space-y-4"
          >
            <div className="flex items-end justify-between gap-6 text-paper">
              <div className="min-w-0">
                <span className="block text-[10px] font-medium uppercase tracking-editorial text-gold">
                  CULT. tales cinema &middot; Screening room
                </span>
                <h3 id={titleId} className="mt-1 truncate font-display text-2xl sm:text-3xl">
                  {title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close film"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-bronze hover:bg-bronze"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </button>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-2xl border border-paper/15 bg-black shadow-2xl">
              {src ? (
                <video
                  src={src}
                  poster={poster}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="h-full w-full object-contain"
                />
              ) : (
                <>
                  <Image src={poster} alt="" fill sizes="(min-width: 1024px) 64rem, 100vw" className="object-cover opacity-60" />
                  <p className="absolute inset-0 flex items-center justify-center p-8 text-center font-display text-xl italic text-paper/85">
                    This film is being prepared. Ask us for a private link.
                  </p>
                </>
              )}
            </div>

            {description && (
              <p className="font-display text-base italic text-paper/70 sm:text-lg">{description}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
