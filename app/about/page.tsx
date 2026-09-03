import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EditorialSection from "@/components/EditorialSection";
import RevealText from "@/components/RevealText";

export const metadata: Metadata = {
  title: "About",
  description: "CULT. tales — storytellers of culture, love and tradition across India.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-ink pb-24 pt-36 text-bone md:pb-32 md:pt-44">
        <div className="mx-auto max-w-frame px-6 md:px-10">
          <RevealText as="h1" className="max-w-3xl font-display text-display-lg text-balance">
            We are storytellers of culture, love and tradition.
          </RevealText>
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
            <p className="text-base leading-relaxed text-bone/75">
              CULT. tales travels across India documenting weddings in their most
              authentic form. We capture more than ceremonies — the people, the
              rituals, the chaos, the silence, the laughter, the heritage, the
              emotion.
            </p>
            <p className="mt-6 text-base leading-relaxed text-bone/75">
              Every wedding carries a story that deserves to be told with care,
              authenticity and visual honesty. We spend time understanding the
              community, the region, the specific version of a ritual this family
              practices, so the final story feels entirely theirs.
            </p>
            <p className="mt-6 font-display text-xl text-bone">
              Short for Culture. Long on Tales.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-0 bg-ink md:grid-cols-2 md:grid-rows-[auto_auto]">
        <div className="relative aspect-video w-full md:col-span-1">
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

        <div className="border-t border-line-light px-6 py-12 md:border-t md:px-10 md:py-16">
          <p className="mb-4 text-sm text-dust">What We Document</p>
          <ul className="flex flex-col gap-3 text-sm text-bone/80">
            <li>The rituals — honoring their specificity to each community</li>
            <li>The people — family, friends, the edges of quiet moments</li>
            <li>The place — regional architecture, light, landscape</li>
            <li>The emotion — the unguarded feeling underneath every ceremony</li>
          </ul>
        </div>
      </section>

      <EditorialSection
        tone="light"
        align="center"
        statement="Understanding a wedding means understanding a culture, a family, a moment in time that will never happen again."
      />

      <section className="bg-ink px-6 py-28 text-bone md:px-10 md:py-36">
        <div className="mx-auto max-w-frame">
          <p className="mb-8 text-sm text-dust">Services</p>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            <div className="border-t border-line-light pt-8">
              <h3 className="font-display text-2xl">Wedding Stories</h3>
              <p className="mt-3 text-sm text-bone/75">
                Full-day coverage across photography and cinematography,
                delivered as a curated visual narrative of the wedding,
                the people, and the rituals.
              </p>
            </div>

            <div className="border-t border-line-light pt-8">
              <h3 className="font-display text-2xl">Wedding Films</h3>
              <p className="mt-3 text-sm text-bone/75">
                Cinematic wedding documentaries — 3 to 5 minute edits built
                around the emotional arc of the day.
              </p>
            </div>

            <div className="border-t border-line-light pt-8">
              <h3 className="font-display text-2xl">Cultural Stories</h3>
              <p className="mt-3 text-sm text-bone/75">
                Editorial documentation of rituals, traditions, and cultural
                celebrations beyond individual weddings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-28 text-char md:px-10 md:py-36">
        <div className="mx-auto max-w-frame text-center">
          <RevealText as="h2" className="font-display text-display-md text-balance">
            Let&rsquo;s tell your story.
          </RevealText>
          <p className="mx-auto mt-8 max-w-editorial text-base leading-relaxed text-char/70">
            We work across all regions of India, and travel internationally
            for Pan-Indian and diaspora weddings. Get in touch to discuss your
            vision.
          </p>
          <Link
            href="/contact"
            className="link-draw mt-10 inline-block font-display text-2xl text-char"
          >
            Start a Conversation &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
