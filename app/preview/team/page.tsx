import type { Metadata } from "next";
import Image from "next/image";

// Private page shared directly with a client. Not linked from the site,
// not in the sitemap, and marked noindex.
export const metadata: Metadata = {
  title: "Who We Are",
  robots: { index: false, follow: false, nocache: true },
};

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-dashed border-bone/40 px-2 py-0.5 text-sm text-dust">
      [PLACEHOLDER: {children}]
    </span>
  );
}

export default function TeamPreviewPage() {
  return (
    <>
      <div className="bg-ink pb-24 pt-36 text-bone md:pb-32 md:pt-44">
        <div className="mx-auto max-w-frame px-6 md:px-10">
          <h1 className="max-w-3xl font-display text-display-lg text-balance">
            We are storytellers of culture, love, and tradition.
          </h1>
          <div className="mt-12 aspect-video w-full md:mt-16">
            <video
              src="/videos/intro.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-0 bg-ink md:grid-cols-2">
        <div className="relative aspect-[4/5] w-full md:aspect-auto">
          <Image
            src="/images/about-1.jpg"
            alt="Portrait"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-xl text-bone">
            <p className="font-display text-xl text-bone">
              Short for Culture. Long on Tales.
            </p>
            <p className="mt-6 text-base leading-relaxed text-bone/75">
              At CULT. TALES, we believe every wedding is more than a
              celebration — it is a story of two people, two families,
              generations of traditions, and emotions that deserve to live
              forever.
            </p>
            <p className="mt-6 text-base leading-relaxed text-bone/75">
              We are a Pan-Indian wedding photography and filmmaking team
              dedicated to documenting weddings in their most authentic form.
              From intimate rituals and sacred traditions to spontaneous
              laughter, heartfelt emotions, and grand celebrations, we look
              beyond the obvious to capture the moments that truly matter.
            </p>
            <p className="mt-6 text-base leading-relaxed text-bone/75">
              Our approach combines the art of cinematic filmmaking with the
              honesty of documentary storytelling. We don&rsquo;t simply
              photograph how a wedding looks; we capture how it feels. Every
              frame, every ritual, every fleeting glance becomes a part of a
              larger story — one that reflects your culture, your
              relationships, and your individuality.
            </p>
            <p className="mt-6 text-base leading-relaxed text-bone/75">
              Travelling across India, we explore the diverse traditions and
              unique expressions of love that make every wedding different. We
              approach each celebration with curiosity, sensitivity, and a deep
              respect for the customs and people who bring it to life.
            </p>
            <p className="mt-6 text-base leading-relaxed text-bone/75">
              For us, exceptional wedding storytelling is not just about
              beautiful visuals. It is about understanding your story,
              anticipating meaningful moments, preserving the details, and
              creating films and photographs that grow more valuable with time.
            </p>
            <p className="mt-6 font-display text-xl text-bone">
              We don&rsquo;t just document weddings. We preserve the culture,
              the emotions, and the stories that make them unforgettable.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-0 bg-ink md:grid-cols-2">
        <div className="relative aspect-video w-full">
          <Image
            src="/images/about-2.jpg"
            alt="Behind the scenes"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="border-t border-line-light px-6 py-12 md:border-l md:border-t-0 md:px-10 md:py-16">
          <p className="mb-4 text-sm text-dust">Our Approach</p>
          <h2 className="max-w-xs font-display text-3xl text-bone">
            Photography + Cinematography + Editorial
          </h2>
          <p className="mt-6 text-sm text-bone/70">
            We shoot every wedding across multiple mediums — photography for
            the detail, cinematography for the emotion, and editorial work to
            place the wedding within its cultural context.
          </p>
        </div>
      </section>

      <section className="bg-ink px-6 pb-28 text-bone md:px-10 md:pb-36">
        <div className="mx-auto max-w-frame border-t border-line-light pt-12">
          <p className="mb-4 text-sm text-dust">Selected Work</p>
          <p className="text-sm text-bone/70">
            <Placeholder>images or film links for the client</Placeholder>
          </p>
        </div>
      </section>

      <section className="bg-paper px-6 py-28 text-char md:px-10 md:py-36">
        <div className="mx-auto max-w-frame text-center">
          <h2 className="font-display text-display-md text-balance">
            Let&rsquo;s tell your story.
          </h2>
          <p className="mx-auto mt-8 max-w-editorial text-base leading-relaxed text-char/70">
            CULT. TALES — Your story, told through the soul of your culture.
          </p>
          <p className="mt-10 font-display text-xl text-char">
            <Placeholder>contact details to show</Placeholder>
          </p>
        </div>
      </section>
    </>
  );
}
