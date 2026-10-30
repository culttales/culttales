import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import RevealText from "@/components/RevealText";
import { contact } from "@/lib/site";

// This page keeps the typeface it was approved with.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

// Private page shared directly with a client. Not linked from the site,
// not in the sitemap, and marked noindex.
export const metadata: Metadata = {
  title: "Who We Are",
  robots: { index: false, follow: false, nocache: true },
};

// Page-local accent: a muted champagne gold used only for hairlines,
// numerals and small labels.
const GOLD = "text-[#C9A96E]";
const GOLD_BG = "bg-[#C9A96E]";
const IVORY = "bg-[#F5F1E8]";

// Fine film grain laid over dark sections.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
      style={{ backgroundImage: GRAIN }}
    />
  );
}

function Label({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`text-[11px] uppercase tracking-[0.3em] md:tracking-[0.42em] ${
        tone === "dark" ? "text-bone/60" : "text-char/55"
      }`}
    >
      {children}
    </p>
  );
}

function Chapter({
  numeral,
  label,
  tone = "dark",
}: {
  numeral: string;
  label: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className={`font-display text-lg italic ${GOLD}`}>{numeral}</span>
      <span className={`my-5 block h-10 w-px ${GOLD_BG} opacity-60`} />
      <Label tone={tone}>{label}</Label>
    </div>
  );
}

function Ornament() {
  return (
    <div aria-hidden className="flex items-center justify-center gap-4">
      <span className={`block h-px w-16 ${GOLD_BG} opacity-50`} />
      <span className={`block h-1.5 w-1.5 rotate-45 ${GOLD_BG}`} />
      <span className={`block h-px w-16 ${GOLD_BG} opacity-50`} />
    </div>
  );
}

function Framed({
  src,
  alt,
  ratio,
  sizes,
}: {
  src: string;
  alt: string;
  ratio: string;
  sizes: string;
}) {
  return (
    <div className="p-2.5 ring-1 ring-[#C9A96E]/45 md:p-3.5">
      <div className={`relative w-full ${ratio}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    </div>
  );
}

const APPROACH = [
  {
    numeral: "i.",
    title: "Photography",
    body: "For the detail. Every ritual, every gesture, every fleeting glance, held still.",
  },
  {
    numeral: "ii.",
    title: "Cinematography",
    body: "For the emotion. Films that carry how a wedding feels, not only how it looks.",
  },
];

export default function TeamPreviewPage() {
  return (
    <div className={`client-page ${inter.variable}`}>
      {/* Hero */}
      <section className="relative flex h-[100svh] w-full flex-col overflow-hidden bg-ink">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-main.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(11,11,11,0.75)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />
        <Grain />

        <header className="relative z-10 flex justify-center pt-[calc(2.5rem+env(safe-area-inset-top))] md:pt-[calc(3rem+env(safe-area-inset-top))]">
          <Image
            src="/logo/cult-tales-logo-white.png"
            alt="CULT. tales"
            width={510}
            height={331}
            priority
            className="h-12 w-auto md:h-16"
          />
        </header>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
          <p className={`text-xs uppercase tracking-[0.3em] md:text-sm md:tracking-[0.42em] ${GOLD}`}>
            Where culture becomes story
          </p>
          <RevealText
            as="h1"
            className="mt-8 max-w-5xl font-display text-display-lg font-normal leading-[1.02] text-bone text-balance"
          >
            We are storytellers of{" "}
            <em className="italic text-bone/90">culture, love,</em> and
            tradition.
          </RevealText>
          <div className="mt-10">
            <Ornament />
          </div>
          <div className="mt-8">
            <Label>Wedding Photography &middot; Cinema &middot; Culture</Label>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center pb-10 md:pb-12">
          <Label>Scroll</Label>
          <span className={`mt-4 block h-12 w-px ${GOLD_BG} opacity-70`} />
        </div>
      </section>

      {/* I. Who we are */}
      <section className={`${IVORY} px-6 py-32 text-char md:px-10 md:py-48`}>
        <div className="mx-auto max-w-frame">
          <Chapter numeral="I" label="Who we are" tone="light" />

          <RevealText
            as="h2"
            className="mx-auto mt-16 max-w-5xl text-center font-display text-display-md font-normal leading-[1.2] text-char text-balance md:mt-20"
          >
            At CULT. TALES, we believe every wedding is more than a
            celebration &mdash;{" "}
            <em className="italic">it is a story</em> of two people, two
            families, generations of traditions, and emotions that deserve to
            live forever.
          </RevealText>

          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-12 md:mt-28 md:grid-cols-2 md:gap-20">
            <div className="space-y-8 text-[17px] leading-[1.95] text-char/70">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1.5 first-letter:font-display first-letter:text-[4.5rem] first-letter:leading-[0.75] first-letter:text-char">
                We are a Pan-Indian wedding photography and wedding cinema team dedicated to documenting weddings in their most
                authentic form. From intimate rituals and sacred traditions to
                spontaneous laughter, heartfelt emotions, and grand
                celebrations, we look beyond the obvious to capture the moments
                that truly matter.
              </p>
              <p>
                Our approach combines the art of cinematic filmmaking with the
                honesty of raw, unscripted storytelling. We don&rsquo;t simply
                photograph how a wedding looks; we capture how it feels.
              </p>
            </div>
            <div className="space-y-8 text-[17px] leading-[1.95] text-char/70 md:pt-16">
              <p>
                Every frame, every ritual, every fleeting glance becomes a part
                of a larger story &mdash; one that reflects your culture, your
                relationships, and your individuality.
              </p>
              <p>
                Travelling across India, we explore the diverse traditions and
                unique expressions of love that make every wedding different.
                We approach each celebration with curiosity, sensitivity, and a
                deep respect for the customs and people who bring it to life.
              </p>
              <p>
                For us, exceptional wedding storytelling is not just about
                beautiful visuals. It is about understanding your story,
                anticipating meaningful moments, preserving the details, and
                creating films and photographs that grow more valuable with
                time.
              </p>
            </div>
          </div>

          <dl className="mx-auto mt-24 grid max-w-3xl grid-cols-1 text-center md:mt-32 md:grid-cols-2">
            {[
              ["Based in", "Kerala & Rajasthan"],
              ["Craft", "Photography & Wedding Cinema"],
            ].map(([term, value], i) => (
              <div
                key={term}
                className={`border-t border-[#C9A96E]/40 py-10 ${
                  i > 0 ? "md:border-l" : ""
                }`}
              >
                <dt className="text-[11px] uppercase tracking-[0.42em] text-char/50">
                  {term}
                </dt>
                <dd className="mt-4 font-display text-2xl italic text-char">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Cinematic band */}
      <section className="relative h-[75svh] w-full overflow-hidden bg-ink md:h-[100svh]">
        <Image
          src="/images/moment-3.jpg"
          alt="A bride and groom walking through a shower of petals"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
        <div className="absolute inset-6 border border-bone/25 md:inset-10" />
        <p className="absolute inset-x-0 bottom-12 text-center font-display text-xl italic text-bone/90 md:bottom-20 md:text-2xl">
          Not how it looks &mdash; how it feels.
        </p>
      </section>

      {/* II. Approach */}
      <section className="relative overflow-hidden bg-ink px-6 py-32 text-bone md:px-10 md:py-48">
        <Grain />
        <div className="relative mx-auto max-w-frame">
          <Chapter numeral="II" label="Our approach" />

          <RevealText
            as="h2"
            className="mx-auto mt-16 max-w-3xl text-center font-display text-display-md font-normal text-balance md:mt-20"
          >
            Photography and wedding cinema,{" "}
            <em className="italic">woven into one story.</em>
          </RevealText>

          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 md:mt-28 md:grid-cols-2">
            {APPROACH.map((item, i) => (
              <div
                key={item.title}
                className={`border-t border-[#C9A96E]/35 px-2 py-12 text-center md:px-12 ${
                  i > 0 ? "md:border-l" : ""
                }`}
              >
                <p className={`font-display text-lg italic ${GOLD}`}>
                  {item.numeral}
                </p>
                <h3 className="mt-6 font-display text-4xl font-normal">
                  {item.title}
                </h3>
                <p className="mx-auto mt-5 max-w-xs text-[15px] leading-[1.9] text-bone/60">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* III. Rituals & Romance */}
      <section className={`${IVORY} px-6 py-32 text-char md:px-10 md:py-48`}>
        <div className="mx-auto max-w-frame">
          <Chapter numeral="III" label="Rituals &amp; Romance" tone="light" />

          <div className="mx-auto mt-20 max-w-6xl space-y-10 md:mt-24 md:space-y-16">
            <Framed
              src="/images/moment-4.jpg"
              alt="A couple at sunset on a palace terrace"
              ratio="aspect-[16/9]"
              sizes="(min-width: 1152px) 72rem, 100vw"
            />
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <Framed
                  src="/images/moment-1.jpg"
                  alt="A bride smiling among family"
                  ratio="aspect-[15/16]"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              <div className="md:col-span-7">
                <Framed
                  src="/images/moment-5.jpg"
                  alt="A bride in red by a window"
                  ratio="aspect-[3/2]"
                  sizes="(min-width: 768px) 55vw, 100vw"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {[
                ["/images/moment-6.jpg", "A couple dancing in a shower of sparks"],
                ["/images/moment-7.jpg", "A bride and groom smiling at each other"],
                ["/images/moment-8.jpg", "A couple in a quiet moment under red drapes"],
                ["/images/moment-9.jpg", "A couple walking hand in hand among guests"],
              ].map(([src, alt]) => (
                <Framed
                  key={src}
                  src={src}
                  alt={alt}
                  ratio="aspect-[2/3]"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative overflow-hidden bg-ink px-6 py-32 text-bone md:px-10 md:py-48">
        <Grain />
        <div className="relative mx-auto max-w-4xl text-center">
          <Ornament />
          <RevealText
            as="p"
            className="mt-16 font-display text-display-md font-normal italic leading-[1.25] text-balance"
          >
            We don&rsquo;t just document weddings. We preserve the culture, the
            emotions, and the stories that make them unforgettable.
          </RevealText>
          <div className="mt-16">
            <Label>Your story, told through the soul of your culture</Label>
          </div>

          <div className="mt-28 flex flex-col items-center md:mt-36">
            <Image
              src="/logo/cult-tales-logo-white.png"
              alt="CULT. tales"
              width={510}
              height={331}
              className="h-16 w-auto opacity-90 md:h-20"
            />
            <span className={`my-10 block h-px w-16 ${GOLD_BG} opacity-60`} />
            <Label>Contact details</Label>

            <dl className="mt-12 grid w-full grid-cols-1 border-t border-[#C9A96E]/30 md:grid-cols-3">
              {[
                ["Email", contact.email, `mailto:${contact.email}`],
                ["Phone", contact.phone, contact.phoneHref],
                ["Instagram", contact.instagramHandle, contact.instagramUrl],
              ].map(([term, value, href], i) => (
                <div
                  key={term}
                  className={`border-b border-[#C9A96E]/30 py-10 md:border-b-0 ${
                    i > 0 ? "md:border-l" : ""
                  }`}
                >
                  <dt className={`font-display text-sm italic ${GOLD}`}>
                    {term}
                  </dt>
                  <dd className="mt-3">
                    <a
                      href={href}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="link-draw font-display text-xl text-bone"
                    >
                      {value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-16 max-w-xl">
              <p className={`font-display text-sm italic ${GOLD}`}>
                Travel availability
              </p>
              <p className="mt-4 text-[15px] leading-[1.9] text-bone/65">
                We travel across all regions of India and internationally for
                Pan-Indian weddings. Timelines and budgets discussed
                individually.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
