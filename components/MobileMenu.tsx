"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { contact } from "@/lib/site";
import AmbientToggle from "./AmbientToggle";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
};

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          data-lenis-prevent
          className="mx-4 mt-4 max-h-[calc(100svh-6rem)] overflow-y-auto rounded-2xl border border-paper/10 bg-obsidian/95 p-7 text-paper shadow-2xl backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col items-center gap-5 font-display text-[1.65rem] leading-tight">
            {[...links, { label: "Contact", href: "/contact" }].map((link) => (
              <Link key={link.href} href={link.href} onClick={onClose} className="transition-colors hover:text-bronze">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-7 flex flex-col items-center gap-4 border-t border-paper/10 pt-6">
            <span className="text-[10px] uppercase tracking-[0.28em] text-paper/60">
              Kerala &middot; Rajasthan &middot; Across India
            </span>
            <Link href="/contact" onClick={onClose} className="btn-bronze w-full">
              Book Your Dates
            </Link>
            <AmbientToggle light />
            <div className="flex gap-6 pt-1 text-[10px] uppercase tracking-editorial text-paper/70">
              <a href={contact.instagramUrl} className="hover:text-bronze">Instagram</a>
              <a href={contact.youtubeUrl} className="hover:text-bronze">YouTube</a>
              <a href={contact.facebookUrl} className="hover:text-bronze">Facebook</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
