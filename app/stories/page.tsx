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
    <div className="bg-ink pb-28 pt-36 text-bone md:pb-36 md:pt-44">
      <div className="mx-auto max-w-frame px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm text-dust">Stories</p>
          <h1 className="font-display text-display-lg text-balance">
            Weddings, rituals and tales from across India.
          </h1>
        </div>

        <StoryGrid stories={stories} />
      </div>
    </div>
  );
}
