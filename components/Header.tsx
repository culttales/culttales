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
            ? "bg-ink/80 backdrop-blur-md border-b border-line-light"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto flex max-w-frame items-center justify-between px-6 py-5 md:px-10">
          <Logo variant="white" className="h-6 md:h-7" priority />

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-draw text-sm text-bone/90"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className="link-draw text-sm text-bone">
              Let&rsquo;s Talk &rarr;
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v: boolean) => !v)}
            className="relative z-50 flex h-8 w-8 flex-col items-end justify-center gap-[6px] md:hidden"
          >
            <span
              className={clsx(
                "block h-px bg-bone transition-all duration-300",
                menuOpen ? "w-6 translate-y-[3.5px] rotate-45" : "w-6"
              )}
            />
            <span
              className={clsx(
                "block h-px bg-bone transition-all duration-300",
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
