import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClosingInvite from "@/components/ClosingInvite";
import FAQ from "@/components/FAQ";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SectionMarker from "@/components/SectionMarker";
import { cityPath, getAllCities, getCitiesForRegion, getCity, getStoriesForCity } from "@/lib/cities";
import { getRegionBySlug } from "@/lib/regions";
import { SITE_NAME, SITE_URL, breadcrumbs, jsonLd, pageMetadata } from "@/lib/seo";

type CityPageProps = {
  params: Promise<{ region: string; city: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCities().map((city) => ({ region: city.regionSlug, city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { region: regionSlug, city: citySlug } = await params;
  const city = getCity(regionSlug, citySlug);
  if (!city) return {};

  return pageMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: cityPath(city),
    images: [city.heroImage],
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { region: regionSlug, city: citySlug } = await params;
  const city = getCity(regionSlug, citySlug);
  const region = getRegionBySlug(regionSlug);
  if (!city || !region) notFound();

  const path = cityPath(city);
  const regionPath = `/wedding-photography/${region.slug}`;
  const stories = getStoriesForCity(city);
  const nearby = getCitiesForRegion(region.slug).filter((c) => c.slug !== city.slug);

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: city.metaTitle,
    serviceType: "Wedding photography and wedding cinematography",
    description: city.metaDescription,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${city.heroImage}`,
    provider: { "@id": `${SITE_URL}/#studio`, name: SITE_NAME },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: region.name },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(service)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbs([
            { name: region.metaTitle, path: regionPath },
            { name: city.metaTitle, path },
          ])
        )}
      />
      <PageIntro
        label={city.label}
        aside={`Based in ${region.name}`}
        title={
          <>
            {city.name} wedding photography <em>&amp; films.</em>
          </>
        }
        intro={city.intro}
      />

      <section className="bg-paper px-5 md:px-12">
        <div className="relative mx-auto aspect-[4/5] max-w-[1240px] overflow-hidden rounded-2xl bg-sand shadow-xl sm:aspect-[16/9]">
          <Image
            src={city.heroImage}
            alt={city.heroAlt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1240px) 1240px, 100vw"
            className="object-cover"
            style={city.heroFocus ? { objectPosition: city.heroFocus } : undefined}
          />
        </div>
      </section>

      <section className="bg-paper px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-site space-y-20">
          {city.sections.map((section) => (
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
          <SectionMarker title={`Wedding settings in ${city.name}`} aside="What we plan our coverage around" />
          <h2 className="mt-12 max-w-3xl text-[2.5rem] font-light leading-[1.05] sm:text-5xl">
            The places that shape <em>the day.</em>
          </h2>
          <dl className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {city.settings.map((setting) => (
              <div key={setting.name} className="border-t border-line-light pt-5">
                <dt className="font-display text-2xl text-gold">{setting.name}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-paper/75">{setting.description}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-14 max-w-2xl text-base font-light leading-[1.7] text-paper/75">
            Planning around the pithi, mayra, baraat and pheras?{" "}
            <Link href={regionPath} className="underline underline-offset-4 hover:text-gold">
              Read about the rituals of a {region.name} wedding
            </Link>
            .
          </p>
        </div>
      </section>

      {stories.length > 0 && (
        <section className="bg-paper px-5 pt-20 md:px-12 md:pt-28">
          <div className="mx-auto max-w-site">
            <SectionMarker title={`${city.name} wedding stories`} aside="From our archive" />
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

      <section className="bg-paper px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-site">
          <SectionMarker title={`More of ${region.name}`} aside="And anywhere else you are" />
          <ul className="mt-10 flex flex-wrap gap-3">
            {nearby.map((other) => (
              <li key={other.slug}>
                <Link
                  href={cityPath(other)}
                  className="block rounded-full bg-sand px-5 py-2.5 text-[11px] font-medium uppercase tracking-editorial text-obsidian transition-colors hover:bg-obsidian hover:text-paper"
                >
                  {other.name} wedding photography
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-base font-light leading-[1.7] text-char/80">
            We travel across {region.name}, the rest of India and beyond for weddings.{" "}
            <Link href={regionPath} className="underline underline-offset-4 hover:text-bronze">
              See all of our {region.name} wedding photography
            </Link>
            , or <Link href="/contact" className="underline underline-offset-4 hover:text-bronze">tell us where you are getting married</Link>.
          </p>
        </div>
      </section>

      <FAQ questions={city.faqs} />

      <ClosingInvite eyebrow={`Planning a wedding in ${city.name}?`} />
    </>
  );
}
