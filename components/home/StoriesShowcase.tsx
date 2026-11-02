import Link from "next/link";
import type { Story } from "@/lib/stories";
import StoryBoard from "../StoryBoard";

export default function StoriesShowcase({ stories }: { stories: Story[] }) {
  return (
    <section id="stories" className="border-t border-line-dark bg-paper px-5 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-site">
        <StoryBoard
          stories={stories}
          heading={
            <>
              <p className="eyebrow mb-3">02 / Wedding stories</p>
              <h2 className="text-[2.5rem] leading-[1.02] text-obsidian sm:text-6xl md:text-[64px]">
                A glimpse into our <br className="hidden sm:block" />
                <em>favourite</em> love stories.
              </h2>
            </>
          }
        />

        <div className="mt-16 flex justify-center md:mt-20">
          <Link href="/stories" className="btn-outline">
            View all wedding stories
          </Link>
        </div>
      </div>
    </section>
  );
}
