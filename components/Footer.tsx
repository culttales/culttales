import Link from "next/link";
import Logo from "./Logo";

const NAV = [
  { label: "Stories", href: "/stories" },
  { label: "Films", href: "/films" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-light bg-ink px-6 pb-10 pt-20 text-bone md:px-10 md:pt-28">
      <div className="mx-auto max-w-frame">
        <Logo variant="white" className="h-10 md:h-14" />
        <p className="mt-4 text-sm text-dust">Short for Culture. Long on Tales.</p>

        <div className="mt-14 grid grid-cols-2 gap-10 border-t border-line-light pt-10 md:grid-cols-4">
          <nav className="col-span-2 flex flex-wrap gap-x-8 gap-y-3 md:col-span-2">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="link-draw text-sm text-bone/85">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm text-bone/85">
            <a href="https://instagram.com" className="link-draw w-fit">Instagram</a>
            <a href="https://youtube.com" className="link-draw w-fit">YouTube</a>
          </div>

          <div className="flex flex-col gap-3 text-sm text-bone/85">
            <a href="mailto:hello@culttales.in" className="link-draw w-fit">hello@culttales.in</a>
            <a href="tel:+910000000000" className="link-draw w-fit">+91 00000 00000</a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line-light pt-8 text-xs text-dust md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} CULT. tales. All rights reserved.</p>
          <p>Documenting India, one wedding at a time.</p>
        </div>
      </div>
    </footer>
  );
}
