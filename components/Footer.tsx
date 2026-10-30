import Link from "next/link";
import Logo from "./Logo";
import { SHOW_JOURNAL, contact } from "@/lib/site";

const NAV = [
  { label: "Wedding Stories", href: "/stories" },
  { label: "Films", href: "/films" },
  { label: "About Us", href: "/about" },
  ...(SHOW_JOURNAL ? [{ label: "Journal", href: "/journal" }] : []),
  { label: "Contact", href: "/contact" },
];

const TICKER = [
  "Where Culture Becomes Story",
  "Wedding Photography · Cinema · Culture",
  "Kerala · Rajasthan · Across India & Beyond",
  "Visual storytellers & memory keepers",
];

export default function Footer() {
  return (
    <footer className="on-dark border-t border-line-light bg-obsidian px-5 pb-12 pt-20 text-paper md:px-12">
      <div className="mx-auto max-w-site">
        <div aria-hidden className="mb-16 overflow-hidden border-y border-line-light py-5">
          <div className="animate-marquee gap-12 text-xs uppercase tracking-[0.28em] text-paper/60">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-12">
                {TICKER.map((item) => (
                  <span key={item} className="flex items-center gap-12">
                    <span>{item}</span>
                    <span className="text-bronze">&#10022;</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 border-b border-line-light pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="white" className="h-12 md:h-14" />
            <div className="mt-6 max-w-sm border-t border-bronze/50 pt-5">
              <p className="text-xs uppercase tracking-[0.24em] text-gold">Where Culture Becomes Story</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-paper/50">
                Wedding Photography &middot; Cinema &middot; Culture
              </p>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-paper/70">
              A visual storytelling studio documenting Pan-Indian wedding stories, where love
              meets legacy.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-5 inline-block text-xs uppercase tracking-editorial text-bronze transition-colors hover:text-paper"
            >
              {contact.email}
            </a>
          </div>

          <nav className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-editorial text-paper/50">Navigation</p>
            <ul className="mt-4 space-y-2.5 text-xs uppercase tracking-editorial text-paper/80">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-bronze">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-editorial text-paper/50">The Studio</p>
            <p className="mt-4 text-sm font-light leading-relaxed text-paper/75">
              Based in Kerala &amp; Rajasthan.
              <br />
              Travelling across India and beyond.
            </p>
            <a href={contact.phoneHref} className="mt-3 inline-block text-sm text-paper/75 transition-colors hover:text-bronze">
              {contact.phone}
            </a>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-editorial text-bronze">
              <a href={contact.instagramUrl} className="transition-colors hover:text-paper">Instagram</a>
              <a href={contact.youtubeUrl} className="transition-colors hover:text-paper">YouTube</a>
              <a href={contact.facebookUrl} className="transition-colors hover:text-paper">Facebook</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center pt-12 text-center">
          <p
            aria-hidden
            className="pointer-events-none select-none whitespace-nowrap font-display text-[13vw] leading-none tracking-tight text-paper/10 min-[1440px]:text-[188px]"
          >
            CULT. TALES
          </p>
          <div className="mt-6 flex w-full flex-col items-center justify-between gap-4 text-[10px] uppercase tracking-editorial text-paper/50 sm:flex-row">
            <span>&copy; {new Date().getFullYear()} CULT. tales. All rights reserved.</span>
            <span>Where Culture Becomes Story</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
