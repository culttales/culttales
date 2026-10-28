import Link from "next/link";
import Logo from "./Logo";
import { contact } from "@/lib/site";

const NAV = [
  { label: "Stories", href: "/stories" },
  { label: "Films", href: "/films" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="on-dark border-t border-gold/15 bg-wine px-6 pb-10 pt-20 text-bone md:px-10 md:pt-28">
      <div className="mx-auto max-w-frame">
        <div className="flex flex-col items-center text-center">
          <Logo variant="white" className="h-12 md:h-16" />
          <p className="mt-5 font-display text-lg italic text-bone/70">
            Short for Culture. Long on Tales.
          </p>
          <div className="ornament mt-10">
            <i />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:flex-col md:items-start">
            <p className="eyebrow mb-2 w-full md:w-auto">Explore</p>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="link-draw w-fit text-sm text-bone/85">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 text-sm text-bone/85 md:items-start">
            <p className="eyebrow mb-2">Follow</p>
            <a href={contact.instagramUrl} className="link-draw w-fit">Instagram</a>
            <a href={contact.youtubeUrl} className="link-draw w-fit">YouTube</a>
            <a href={contact.facebookUrl} className="link-draw w-fit">Facebook</a>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm text-bone/85 md:items-start">
            <p className="eyebrow mb-2">Enquiries</p>
            <a href={`mailto:${contact.email}`} className="link-draw w-fit">{contact.email}</a>
            <a href={contact.phoneHref} className="link-draw w-fit">{contact.phone}</a>
          </div>
        </div>

        <span className="gold-rule mt-16" />
        <div className="mt-8 flex flex-col gap-2 text-center text-[11px] uppercase tracking-[0.25em] text-bone/45 md:flex-row md:items-center md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} CULT. tales. All rights reserved.</p>
          <p>Documenting India, one wedding at a time.</p>
        </div>
      </div>
    </footer>
  );
}
