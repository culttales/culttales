"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Stories", href: "/stories" },
  { label: "Films", href: "/films" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled || menuOpen
            ? "bg-ink/85 backdrop-blur-md border-b border-gold/25"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto grid max-w-frame grid-cols-[1fr_auto_1fr] items-center px-6 py-5 md:px-10 md:py-6">
          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-draw text-[11px] uppercase tracking-[0.3em] text-bone/85 transition-colors hover:text-bone"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Logo variant="white" className="col-start-1 h-6 md:col-start-2 md:h-9" priority />

          <div className="hidden items-center justify-end gap-10 md:flex">
            {NAV_LINKS.slice(2, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-draw text-[11px] uppercase tracking-[0.3em] text-bone/85 transition-colors hover:text-bone"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="border border-gold/60 px-6 py-2.5 text-[11px] uppercase tracking-[0.3em] text-gold transition-colors duration-500 hover:bg-gold hover:text-ink">
              Let&rsquo;s Talk
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v: boolean) => !v)}
            className="relative z-50 col-start-3 flex h-8 w-8 flex-col items-end justify-center gap-[6px] justify-self-end md:hidden"
          >
            <span
              className={clsx(
                "block h-px bg-gold transition-all duration-300",
                menuOpen ? "w-6 translate-y-[3.5px] rotate-45" : "w-6"
              )}
            />
            <span
              className={clsx(
                "block h-px bg-gold transition-all duration-300",
                menuOpen ? "w-6 -translate-y-[3.5px] -rotate-45" : "w-4"
              )}
            />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </>
  );
}
