import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import clsx from "clsx";
import ClosingInvite from "@/components/ClosingInvite";
import Reveal from "@/components/Reveal";
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

// Gallery rhythm: wide frames span the page; tall frames pair up with an
// offset, and a tall frame without a partner sits centred.
function galleryLayout(images: Story["images"]) {
  const classes: string[] = [];
  for (let i = 0; i < images.length; i++) {
    if (images[i].orientation === "landscape") {
      classes.push("md:col-span-12 aspect-[4/3] md:aspect-[16/9]");
    } else if (images[i + 1]?.orientation === "portrait") {
      classes.push("md:col-span-6 aspect-[4/5]", "md:col-span-6 aspect-[4/5] md:mt-20");
      i++;
    } else {
      classes.push("md:col-span-6 md:col-start-4 aspect-[4/5]");
    }
  }
  return classes;
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const all = getAllStories();
  const index = all.findIndex((s) => s.slug === story.slug);
  const previous = all[(index - 1 + all.length) % all.length];
  const next = getAdjacentStory(story.slug);
  const gallery = galleryLayout(story.images);

  return (
    <article className="bg-paper text-char">
      <div className="px-5 pt-[calc(7rem+env(safe-area-inset-top))] md:px-12 md:pt-[calc(8rem+env(safe-area-inset-top))]">
        <nav
          aria-label="Stories"
          className="mx-auto flex max-w-site items-center justify-between gap-4 border-b border-line-dark py-4"
        >
          <Link href="/stories" className="text-link">
            &larr; All stories
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={`/stories/${previous.slug}`}
              className="rounded-full border border-obsidian/15 px-3.5 py-2 text-[10px] font-medium uppercase tracking-editorial transition-colors hover:border-obsidian"
            >
              &larr; <span className="hidden sm:inline">Previous</span>
            </Link>
            <Link
              href={`/stories/${next.slug}`}
              className="rounded-full border border-obsidian/15 px-3.5 py-2 text-[10px] font-medium uppercase tracking-editorial transition-colors hover:border-obsidian"
            >
              <span className="hidden sm:inline">Next story</span> &rarr;
            </Link>
          </div>
        </nav>
      </div>

      <header className="px-5 pt-14 md:px-12 md:pt-20">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="eyebrow">
            {story.location} &middot; {story.year} &middot; {story.category}
          </p>
          <h1 className="text-[3.25rem] font-light leading-none text-obsidian sm:text-7xl md:text-[88px]">
            {story.coupleNames}
          </h1>
          <p className="font-display text-2xl italic text-char/80">&ldquo;{story.openingLine}&rdquo;</p>
        </div>

        <div className="relative mx-auto mt-12 aspect-[4/5] max-w-[1240px] overflow-hidden rounded-2xl bg-sand shadow-xl sm:aspect-[16/9]">
          <Image
            src={story.heroImage}
            alt={`${story.coupleNames}, ${story.location}`}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1240px) 1240px, 100vw"
            className="object-cover"
          />
        </div>
      </header>

      <section className="px-5 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 border-b border-line-dark pb-16 lg:grid-cols-12">
          <aside className="space-y-5 self-start rounded-2xl bg-sand p-7 lg:col-span-4">
            <p className="text-[10px] font-semibold uppercase tracking-editorial text-bronze">Story notes</p>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">Location</p>
              <p className="font-display text-xl text-obsidian">{story.location}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">Rituals</p>
              <p className="mt-0.5 text-sm text-char">{story.rituals.map((r) => r.name).join(" · ")}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">In a line</p>
              <p className="mt-1 font-display text-base italic text-obsidian">{story.excerpt}</p>
            </div>
          </aside>

          <div className="space-y-10 lg:col-span-8">
            <p className="text-base font-light leading-[1.75] text-char/90 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[4.25rem] first-letter:leading-[0.8] first-letter:text-obsidian md:text-lg">
              {story.description}
            </p>

            <div>
              <h2 className="text-3xl text-obsidian md:text-4xl">
                The rituals behind the <em>ceremony.</em>
              </h2>
              <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {story.rituals.map((ritual) => (
                  <div key={ritual.name} className="border-t border-line-dark pt-5">
                    <dt className="font-display text-xl text-obsidian">{ritual.name}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-char/75">{ritual.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {story.images.length > 0 && (
        <section className="px-5 pb-20 md:px-12 md:pb-28">
          <div className="mx-auto max-w-[1240px]">
            <p className="mb-8 text-[11px] font-medium uppercase tracking-editorial text-muted">
              Selected frames from the story
            </p>
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
              {story.images.map((image, i) => (
                <Reveal
                  key={image.src + i}
                  className={clsx("relative overflow-hidden rounded-2xl bg-sand", gallery[i])}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={image.orientation === "landscape" ? "(min-width: 1240px) 1240px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                    className="object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {story.film && story.filmSrc && (
        <section className="on-dark bg-obsidian px-5 py-20 text-paper md:px-12 md:py-28">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-3 !text-gold">The wedding film</p>
                <h2 className="text-4xl font-light md:text-5xl">
                  {story.coupleNames}, <em>in motion.</em>
                </h2>
              </div>
            </div>
            <VideoPlayerLauncher poster={story.film} title={`${story.coupleNames} — Wedding film`} src={story.filmSrc} />
          </div>
        </section>
      )}

      <section className="px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-editorial text-muted">Another story awaits</p>
          <Link
            href={`/stories/${next.slug}`}
            data-cursor="view"
            className="group grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand">
              <Image
                src={next.cardImage}
                alt={`${next.coupleNames}, ${next.location}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="card-img object-cover"
                style={next.cardFocus ? { objectPosition: next.cardFocus } : undefined}
              />
            </div>
            <div>
              <p className="eyebrow">
                {next.location} &middot; {next.year}
              </p>
              <h3 className="mt-3 text-4xl text-obsidian md:text-5xl">{next.coupleNames}</h3>
              <p className="mt-3 font-display text-lg italic text-char/80">&ldquo;{next.openingLine}&rdquo;</p>
              <span className="text-link mt-6">Read the story &rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      <ClosingInvite eyebrow="Inspired by this celebration?" />
    </article>
  );
}
