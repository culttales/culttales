import type { Metadata } from "next";
import StoryGrid from "@/components/StoryGrid";
import { getAllStories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Stories",
  description: "Weddings, rituals and tales from across India, documented by CULT. tales.",
};

export default function StoriesPage() {
  const stories = getAllStories();

  return (
    <div className="bg-ink pb-28 pt-36 text-bone md:pb-48 md:pt-52">
      <div className="mx-auto max-w-frame px-6 md:px-10">
        <div className="mx-auto mb-20 max-w-3xl text-center md:mb-28">
          <p className="eyebrow mb-6">Stories</p>
          <h1 className="font-display text-display-lg text-balance">
            Weddings, rituals and tales from across India.
          </h1>
          <div aria-hidden className="ornament mt-10">
            <i />
          </div>
        </div>

        <StoryGrid stories={stories} />
      </div>
    </div>
  );
}
