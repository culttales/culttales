import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClosingInvite from "@/components/ClosingInvite";
import FAQ from "@/components/FAQ";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SectionMarker from "@/components/SectionMarker";
import { getAllRegions, getRegionBySlug } from "@/lib/regions";
import { SITE_NAME, SITE_URL, breadcrumbs, jsonLd, pageMetadata } from "@/lib/seo";
import { getAllStories } from "@/lib/stories";

type RegionPageProps = {
  params: Promise<{ region: string }>;
};

export function generateStaticParams() {
  return getAllRegions().map((region) => ({ region: region.slug }));
}

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const { region: slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) return {};

  return pageMetadata({
    title: region.metaTitle,
    description: region.metaDescription,
    path: `/wedding-photography/${region.slug}`,
    images: [region.heroImage],
  });
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { region: slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) notFound();

  const path = `/wedding-photography/${region.slug}`;
  const stories = getAllStories().filter((s) => s.region === region.name);

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: region.metaTitle,
    serviceType: "Wedding photography and wedding cinematography",
    description: region.metaDescription,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${region.heroImage}`,
    provider: { "@id": `${SITE_URL}/#studio`, name: SITE_NAME },
    areaServed: [
      { "@type": "State", name: region.name },
      ...region.places.map((place) => ({ "@type": "City", name: place })),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(service)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbs([{ name: region.metaTitle, path }]))}
      />
      <PageIntro
        label={region.label}
        aside={`Based in ${region.name}`}
        title={
          <>
            {region.name} wedding photography <em>&amp; films.</em>
          </>
        }
        intro={region.intro}
      />

      <section className="bg-paper px-5 md:px-12">
        <div className="relative mx-auto aspect-[4/5] max-w-[1240px] overflow-hidden rounded-2xl bg-sand shadow-xl sm:aspect-[16/9]">
          <Image
            src={region.heroImage}
            alt={region.heroAlt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1240px) 1240px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-paper px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-site space-y-20">
          {region.sections.map((section) => (
            <div key={section.heading} className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <h2 className="text-[2.5rem] leading-[1.05] text-obsidian sm:text-5xl lg:col-span-5">
                {section.heading}
              </h2>
              <div className="space-y-6 text-base font-light leading-[1.75] text-char/90 md:text-lg lg:col-span-6 lg:col-start-7">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="on-dark bg-obsidian px-5 py-20 text-paper md:px-12 md:py-28">
        <div className="mx-auto max-w-site">
          <SectionMarker title={`The rituals of a ${region.name} wedding`} aside="What we plan our coverage around" />
          <h2 className="mt-12 max-w-3xl text-[2.5rem] font-light leading-[1.05] sm:text-5xl">
            The rituals behind the <em>ceremony.</em>
          </h2>
          <dl className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {region.rituals.map((ritual) => (
              <div key={ritual.name} className="border-t border-line-light pt-5">
                <dt className="font-display text-2xl text-gold">{ritual.name}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-paper/75">{ritual.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-site">
          <SectionMarker title={`Where we work in ${region.name}`} aside="And anywhere else you are" />
          <ul className="mt-10 flex flex-wrap gap-3">
            {region.places.map((place) => (
              <li
                key={place}
                className="rounded-full bg-sand px-5 py-2.5 text-[11px] font-medium uppercase tracking-editorial text-obsidian"
              >
                {place}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-base font-light leading-[1.7] text-char/80">
            We travel across {region.name}, the rest of India and beyond for weddings. If your celebration is
            somewhere not listed here, <Link href="/contact" className="underline underline-offset-4 hover:text-bronze">tell us where</Link>.
          </p>
        </div>
      </section>

      {stories.length > 0 && (
        <section className="bg-paper px-5 pb-20 md:px-12 md:pb-28">
          <div className="mx-auto max-w-site">
            <SectionMarker title={`${region.name} wedding stories`} aside="From our archive" />
            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
              {stories.map((story) => (
                <Reveal key={story.slug}>
                  <Link href={`/stories/${story.slug}`} data-cursor="view" className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
                      <Image
                        src={story.cardImage}
                        alt={`${story.coupleNames}, ${story.location}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="card-img object-cover"
                        style={story.cardFocus ? { objectPosition: story.cardFocus } : undefined}
                      />
                    </div>
                    <p className="eyebrow mt-5">
                      {story.location} &middot; {story.year}
                    </p>
                    <h3 className="mt-2 text-3xl text-obsidian md:text-4xl">{story.coupleNames}</h3>
                    <p className="mt-2 font-display text-lg italic text-char/80">{story.excerpt}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ questions={region.faqs} />

      <ClosingInvite eyebrow={`Planning a wedding in ${region.name}?`} />
    </>
  );
}
