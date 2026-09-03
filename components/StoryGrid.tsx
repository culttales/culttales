import StoryCard from "./StoryCard";
import type { Story } from "@/lib/stories";

type StoryGridProps = {
  stories: Story[];
};

/**
 * Asymmetric editorial grid: a large lead story, then two-up and three-up
 * rows in a repeating but non-uniform rhythm — deliberately avoiding a flat
 * 3-column card grid.
 */
export default function StoryGrid({ stories }: StoryGridProps) {
  const [first, second, third, fourth, ...rest] = stories;

  return (
    <div className="flex flex-col gap-4 md:gap-5">
      {first && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          <div className="md:col-span-2">
            <StoryCard story={first} size="large" priority />
          </div>
          {second && (
            <div className="md:col-span-1">
              <StoryCard story={second} size="medium" />
            </div>
          )}
        </div>
      )}

      {(third || fourth) && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {third && <StoryCard story={third} size="medium" />}
          {fourth && <StoryCard story={fourth} size="medium" />}
        </div>
      )}

      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {rest.map((story) => (
            <StoryCard key={story.slug} story={story} size="small" />
          ))}
        </div>
      )}
    </div>
  );
}
