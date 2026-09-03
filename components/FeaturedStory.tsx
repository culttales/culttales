import Image from "next/image";
import Link from "next/link";
import type { Story } from "@/lib/stories";
import RevealText from "./RevealText";

export default function FeaturedStory({ story }: { story: Story }) {
  return (
    <section className="bg-ink px-6 pb-24 pt-4 text-bone md:px-10 md:pb-32">
      <div className="mx-auto max-w-frame">
        <p className="mb-8 text-sm text-dust">Featured Story</p>

        <Link href={`/stories/${story.slug}`} data-cursor="view" className="group grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
            <Image
              src={story.heroImage}
              alt={`${story.coupleNames} — ${story.location}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-slower ease-cinema group-hover:scale-[1.04]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <RevealText as="h3" className="font-display text-display-md text-balance">
              {story.openingLine}
            </RevealText>
            <p className="mt-6 max-w-editorial text-base leading-relaxed text-bone/70">
              {story.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm text-dust">
              <span>{story.location}</span>
              <span>&middot;</span>
              <span>{story.year}</span>
            </div>
            <span className="link-draw mt-8 w-fit text-sm text-bone">
              Read the story &rarr;
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
