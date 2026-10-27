import type { Metadata } from "next";
import Image from "next/image";
import RevealText from "@/components/RevealText";

// Private page shared directly with a client. Not linked from the site,
// not in the sitemap, and marked noindex.
export const metadata: Metadata = {
  title: "Who We Are",
  robots: { index: false, follow: false, nocache: true },
};

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-dashed border-current/40 px-2 py-0.5 text-sm opacity-70">
      [PLACEHOLDER: {children}]
    </span>
  );
}

const APPROACH = [
  {
    n: "01",
    title: "Photography",
    body: "For the detail. Every ritual, every gesture, every fleeting glance, held still.",
  },
  {
    n: "02",
    title: "Cinematography",
    body: "For the emotion. Films that carry how a wedding feels, not only how it looks.",
  },
];

export default function TeamPreviewPage() {
  return (
    <>
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

        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

        <header className="relative z-10 flex justify-center pt-10 md:pt-14">
          <Image
            src="/logo/cult-tales-logo-white.png"
            alt="CULT. tales"
            width={510}
            height={331}
            priority
            className="h-14 w-auto md:h-20"
          />
        </header>

        <div className="relative z-10 mt-auto w-full px-6 pb-14 md:px-10 md:pb-20">
          <div className="mx-auto max-w-frame">
            <p className="mb-6 text-xs uppercase tracking-[0.28em] text-bone/70">
              Short for Culture. Long on Tales.
            </p>
            <h1 className="max-w-4xl font-display text-display-lg font-normal text-bone text-balance">
              We are storytellers of culture, love, and tradition.
            </h1>
            <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-bone/60">
              <span className="block h-px w-14 bg-bone/40" />
              Scroll
            </div>
          </div>
        </div>
      </section>

      {/* The story */}
      <section className="bg-paper px-6 py-28 text-char md:px-10 md:py-44">
        <div className="mx-auto grid max-w-frame grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <p className="border-t border-line-dark pt-5 text-xs uppercase tracking-[0.28em] text-char/60">
              Who we are
            </p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <RevealText
              as="p"
              className="font-display text-display-sm leading-snug text-char text-balance"
            >
              At CULT. TALES, we believe every wedding is more than a
              celebration — it is a story of two people, two families,
              generations of traditions, and emotions that deserve to live
              forever.
            </RevealText>

            <div className="mt-14 grid grid-cols-1 gap-8 text-base leading-[1.85] text-char/70 md:grid-cols-2 md:gap-14">
              <div className="space-y-8">
                <p>
                  We are a Pan-Indian wedding photography and filmmaking team
                  dedicated to documenting weddings in their most authentic
                  form. From intimate rituals and sacred traditions to
                  spontaneous laughter, heartfelt emotions, and grand
                  celebrations, we look beyond the obvious to capture the
                  moments that truly matter.
                </p>
                <p>
                  Our approach combines the art of cinematic filmmaking with the
                  honesty of documentary storytelling. We don&rsquo;t simply
                  photograph how a wedding looks; we capture how it feels.
                  Every frame, every ritual, every fleeting glance becomes a
                  part of a larger story — one that reflects your culture, your
                  relationships, and your individuality.
                </p>
              </div>
              <div className="space-y-8">
                <p>
                  Travelling across India, we explore the diverse traditions
                  and unique expressions of love that make every wedding
                  different. We approach each celebration with curiosity,
                  sensitivity, and a deep respect for the customs and people
                  who bring it to life.
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
          </div>
        </div>
      </section>

      {/* Full-bleed diptych */}
      <section className="grid grid-cols-1 bg-ink md:grid-cols-2">
        {[
          { src: "/images/couple-2.jpg", alt: "A couple holding hands in a garden" },
          { src: "/images/couple-4.jpg", alt: "A bride and groom in quiet conversation" },
        ].map((img) => (
          <div key={img.src} className="relative h-[85svh] w-full md:h-[100svh]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </section>

      {/* Approach */}
      <section className="bg-ink px-6 py-28 text-bone md:px-10 md:py-44">
        <div className="mx-auto max-w-frame">
          <p className="mb-6 text-xs uppercase tracking-[0.28em] text-dust">
            Our approach
          </p>
          <RevealText
            as="h2"
            className="max-w-3xl font-display text-display-md text-balance"
          >
            Photography and cinematography, woven into one story.
          </RevealText>

          <div className="mt-20 grid grid-cols-1 gap-14 md:mt-28 md:max-w-4xl md:grid-cols-2 md:gap-12">
            {APPROACH.map((item) => (
              <div key={item.n} className="border-t border-line-light pt-8">
                <p className="font-display text-sm text-dust">{item.n}</p>
                <h3 className="mt-6 font-display text-3xl">{item.title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-[1.8] text-bone/65">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="relative overflow-hidden bg-ink px-6 pb-32 text-bone md:px-10 md:pb-48">
        <div className="mx-auto max-w-4xl border-t border-line-light pt-24 text-center md:pt-36">
          <RevealText
            as="p"
            className="font-display text-display-md italic leading-snug text-balance"
          >
            We don&rsquo;t just document weddings. We preserve the culture, the
            emotions, and the stories that make them unforgettable.
          </RevealText>
          <p className="mt-16 text-xs uppercase tracking-[0.28em] text-dust">
            CULT. TALES — Your story, told through the soul of your culture.
          </p>
        </div>
      </section>

      {/* Selected work */}
      <section className="bg-paper px-6 pb-16 pt-28 text-char md:px-10 md:pt-44">
        <div className="mx-auto max-w-frame">
          <p className="border-t border-line-dark pt-5 text-xs uppercase tracking-[0.28em] text-char/60">
            Selected work
          </p>
          <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-12 md:gap-8">
            <div className="relative aspect-[2/3] w-full md:col-span-5 md:col-start-2">
              <Image
                src="/images/couple-1.jpg"
                alt="A bride smiling at a window"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[2/3] w-full md:col-span-4 md:col-start-8 md:mt-40">
              <Image
                src="/images/couple-3.jpg"
                alt="A bride in a pink lehenga in a garden"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details to come */}
      <section className="bg-paper px-6 pb-24 pt-16 text-char md:px-10 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-frame border-t border-line-dark pt-6">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-char/60">
            Get in touch
          </p>
          <Placeholder>contact details to show</Placeholder>
        </div>
      </section>
    </>
  );
}
