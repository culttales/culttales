"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

type VideoPlayerProps = {
  open: boolean;
  onClose: () => void;
  poster: string;
  title: string;
  src?: string;
};

/**
 * Full-screen lightbox for wedding films. `src` is left optional — wire in
 * the real video URL (mp4/webm, or an embed) once footage is ready. Until
 * then this shows the poster frame so the interaction can be reviewed.
 */
export default function VideoPlayer({ open, onClose, poster, title, src }: VideoPlayerProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — film`}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close film"
            className="absolute right-6 top-6 text-sm text-bone/80 hover:text-bone"
          >
            Close &times;
          </button>

          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-video w-full max-w-5xl overflow-hidden bg-black"
          >
            {src ? (
              <video
                src={src}
                poster={poster}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <>
                <Image src={poster} alt={title} fill className="object-cover opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <p className="max-w-xs text-sm text-bone/80">
                    Film source not yet connected — drop an mp4/webm URL into
                    the `src` prop to play {title} here.
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
