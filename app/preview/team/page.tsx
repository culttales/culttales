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
          <p className="mb-6 text-sm text-dust">
            Prepared for <Placeholder>client name</Placeholder>
          </p>
          <h1 className="max-w-3xl font-display text-display-lg text-balance">
            We are storytellers of culture, love and tradition.
          </h1>
          <p className="mt-8 text-sm text-bone/60">
            Our website is currently under construction. This page is a short
            introduction to who we are.
          </p>
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
          <p className="mb-4 mt-10 text-sm text-dust">What We Document</p>
          <ul className="flex flex-col gap-3 text-sm text-bone/80">
            <li>The rituals — honoring their specificity to each community</li>
            <li>The people — family, friends, the edges of quiet moments</li>
            <li>The place — regional architecture, light, landscape</li>
            <li>The emotion — the unguarded feeling underneath every ceremony</li>
          </ul>
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-bone md:px-10 md:py-36">
        <div className="mx-auto max-w-frame">
          <p className="mb-8 text-sm text-dust">The Team</p>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {[1, 2, 3].map((n) => (
              <div key={n} className="border-t border-line-light pt-8">
                <div className="flex aspect-[4/5] w-full items-center justify-center border border-dashed border-bone/30 text-sm text-dust">
                  [PLACEHOLDER: team member {n} photo]
                </div>
                <h3 className="mt-6 font-display text-2xl">
                  <Placeholder>name</Placeholder>
                </h3>
                <p className="mt-3 text-sm text-bone/75">
                  <Placeholder>role and short bio</Placeholder>
                </p>
              </div>
            ))}
          </div>
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
            We work across all regions of India, and travel internationally
            for Pan-Indian and diaspora weddings.
          </p>
          <p className="mt-10 font-display text-xl text-char">
            <Placeholder>contact details to show</Placeholder>
          </p>
        </div>
      </section>
    </>
  );
}
