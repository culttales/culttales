import Image from "next/image";
import Curtain from "./Curtain";
import Link from "next/link";
import type { Story } from "@/lib/stories";

export default function RealStories({ stories }: { stories: Story[] }) {
  return (
    <section className="bg-sand px-6 py-28 text-char md:px-10 md:py-44">
      <div className="mx-auto max-w-frame">
        <div className="mb-16 flex flex-col items-center text-center md:mb-24">
          <p className="eyebrow mb-6">Selected Work</p>
          <h2 className="font-display text-display-lg text-balance">
            Our <em>real</em> stories
          </h2>
          <div aria-hidden className="ornament mt-10">
            <i />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {stories.map((story, i) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              data-cursor="view"
              className={`group block ${i % 2 === 1 ? "lg:mt-20" : ""}`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-char/10">
                <Curtain className="absolute inset-0 overflow-hidden" delay={(i % 4) * 0.12}>
                  <Image
                    src={story.cardImage}
                    alt={`${story.coupleNames} — ${story.location}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-slower ease-cinema group-hover:scale-[1.05]"
                  />
                </Curtain>
                <span aria-hidden className="pointer-events-none absolute inset-3 ring-1 ring-paper/40 transition-all duration-700 group-hover:inset-4 group-hover:ring-paper/80" />
              </div>
              <div className="mt-6 text-center">
                <p className="font-display text-2xl italic">{story.coupleNames}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-char/55">
                  {story.location} &middot; {story.year}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/stories"
            className="btn-bronze"
          >
            See All Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
