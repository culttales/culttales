"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { contact } from "@/lib/site";

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
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 flex flex-col justify-between bg-paper px-6 pb-10 pt-28 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-line-dark py-5 font-display text-display-sm text-char"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col gap-3 text-xs uppercase tracking-[0.25em] text-bronze"
          >
            <p>Short for Culture. Long on Tales.</p>
            <div className="flex gap-6 pt-2 text-char/80">
              <a href={contact.instagramUrl} className="link-draw">Instagram</a>
              <a href={contact.youtubeUrl} className="link-draw">YouTube</a>
              <a href={contact.facebookUrl} className="link-draw">Facebook</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
