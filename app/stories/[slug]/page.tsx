import type { Metadata } from "next";
import Image from "next/image";
import Curtain from "@/components/Curtain";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealText from "@/components/RevealText";
import VideoPlayerLauncher from "@/components/VideoPlayerLauncher";
import { getAllStories, getAdjacentStory, getStoryBySlug, type Story } from "@/lib/stories";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};

  return {
    title: `${story.coupleNames} — ${story.location}`,
    description: story.excerpt,
    openGraph: {
      title: `${story.coupleNames} — ${story.location}`,
      description: story.excerpt,
      images: [story.heroImage],
    },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const maybeStory = getStoryBySlug(slug);
  if (!maybeStory) notFound();
  // notFound() throws, so TypeScript should narrow here — add non-null assertion
  // for build-time type checking without node_modules present.
  const story = maybeStory as Story;

  const next = getAdjacentStory(story.slug);

  return (
    <article className="bg-paper text-char">
      {/* Opening */}
      <section className="px-6 pb-14 pt-36 md:px-10 md:pb-20 md:pt-52">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6">{story.category}</p>
          <h1 className="font-display text-display-lg text-balance">{story.coupleNames}</h1>
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-char/60">
            {story.location} &middot; {story.year}
          </p>
          <div aria-hidden className="ornament mt-10">
            <i />
          </div>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <div className="relative mx-auto aspect-[4/5] max-w-frame overflow-hidden md:aspect-[16/9]">
          <Image
            src={story.heroImage}
            alt={`${story.coupleNames} — ${story.location}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <span aria-hidden className="pointer-events-none absolute inset-4 ring-1 ring-paper/60 md:inset-8" />
        </div>
      </div>

      {/* Story introduction */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl">
          <RevealText as="h2" className="font-display text-display-md text-balance">
            &ldquo;{story.openingLine}&rdquo;
          </RevealText>
          <p className="mt-8 max-w-editorial text-base leading-relaxed text-char/75">
            {story.description}
          </p>
        </div>
      </section>

      {/* Visual story: alternating asymmetric image layout */}
      <section className="flex flex-col gap-4 px-6 pb-4 md:gap-5 md:px-10">
        {story.images[0] && (
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <span aria-hidden className="pointer-events-none absolute inset-4 z-10 ring-1 ring-paper/60 md:inset-8" />
            <Curtain className="absolute inset-0 overflow-hidden">
              <Image
                src={story.images[0].src}
                alt={story.images[0].alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </Curtain>
          </div>
        )}

        {(story.images[1] || story.images[2]) && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {story.images.slice(1, 3).map((img) => (
              <div key={img.src + img.alt} className="relative aspect-[4/5] w-full overflow-hidden">
                <Curtain className="absolute inset-0 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </Curtain>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Cultural context */}
      <section className="bg-sand px-6 py-24 text-char md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4">Cultural Context</p>
          <h2 className="font-display text-display-md text-balance">
            The rituals behind the ceremony.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            {story.rituals.map((ritual) => (
              <div key={ritual.name} className="border-t border-line-dark pt-5">
                <h3 className="font-display text-xl">{ritual.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-char/70">
                  {ritual.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding film */}
      {story.film && (
        <section className="px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-frame">
            <p className="eyebrow mb-6">Wedding Film</p>
            <VideoPlayerLauncher poster={story.film} title={`${story.coupleNames} — Wedding Film`} />
          </div>
        </section>
      )}

      {/* Closing */}
      <section className="border-t border-line-dark px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-frame">
          <p className="eyebrow mb-8">Another story awaits</p>
          <Link href={`/stories/${next.slug}`} data-cursor="view" className="group grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-14">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Curtain className="absolute inset-0 overflow-hidden">
                <Image
                  src={next.cardImage}
                  alt={`${next.coupleNames} — ${next.location}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-slower ease-cinema group-hover:scale-[1.04]"
                />
              </Curtain>
            </div>
            <div>
              <h3 className="font-display text-display-sm text-balance">{next.coupleNames}</h3>
              <p className="eyebrow mt-2">{next.location} &middot; {next.year}</p>
              <span className="link-draw mt-6 inline-block text-[11px] uppercase tracking-[0.28em] text-char">Read the story &rarr;</span>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
