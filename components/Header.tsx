"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import AmbientToggle from "./AmbientToggle";
import { SHOW_JOURNAL } from "@/lib/site";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Stories", href: "/stories" },
  { label: "Films", href: "/films" },
  { label: "About", href: "/about" },
  ...(SHOW_JOURNAL ? [{ label: "Journal", href: "/journal" }] : []),
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // The page the menu was opened on; navigating anywhere else closes it.
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the homepage's dark hero the bar starts clear with light text;
  // everywhere else, and once scrolled, it settles onto ivory.
  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,padding,box-shadow,color] duration-500",
        solid
          ? "bg-paper/90 py-3 text-obsidian shadow-[0_1px_0_rgba(22,20,18,0.08)] backdrop-blur-md"
          : "py-5 text-paper"
      )}
    >
      <div className="mx-auto grid max-w-site grid-cols-[1fr_auto_1fr] items-center px-5 md:px-12">
        <nav className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-editorial lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "py-1 transition-colors hover:text-bronze",
                (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)) && "text-bronze"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuPath(menuOpen ? null : pathname)}
          className="flex h-9 w-9 flex-col items-start justify-center gap-1.5 justify-self-start lg:hidden"
        >
          <span className={clsx("block h-[1.5px] w-6 bg-current transition-transform duration-300", menuOpen && "translate-y-[7.5px] rotate-45")} />
          <span className={clsx("block h-[1.5px] w-4 bg-current transition-opacity duration-300", menuOpen && "opacity-0")} />
          <span className={clsx("block h-[1.5px] w-6 bg-current transition-transform duration-300", menuOpen && "-translate-y-[7.5px] -rotate-45")} />
        </button>

        <Logo variant={solid ? "black" : "white"} className="h-8 md:h-10" eager />

        <div className="flex items-center justify-end gap-2.5 sm:gap-4 md:gap-6">
          <div className="hidden sm:block">
            <AmbientToggle light={!solid} />
          </div>
          <Link href="/contact" className="btn-bronze btn-sm">
            Enquire<span className="hidden sm:inline">&nbsp;/ Book a Date</span>
          </Link>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuPath(null)} links={NAV_LINKS} />
    </header>
  );
}
