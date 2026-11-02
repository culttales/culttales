import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import StoryBoard from "@/components/StoryBoard";
import ClosingInvite from "@/components/ClosingInvite";
import { getAllStories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Wedding Stories",
  description: "Weddings, rituals and love stories from across India, documented by CULT. tales.",
};

export default function StoriesPage() {
  const stories = getAllStories();

  return (
    <>
      <PageIntro
        label="Wedding stories — the archive"
        aside="Kerala · Rajasthan · Across India"
        title={
          <>
            Weddings, rituals &amp; <em>tales</em> from across India.
          </>
        }
        intro="Every story here is a wedding we were trusted with: its rituals, its people and the moments in between, kept the way they truly happened."
      />

      <section className="bg-paper px-5 pb-24 md:px-12 md:pb-36">
        <div className="mx-auto max-w-site">
          <StoryBoard
            stories={stories}
            heading={<p className="font-display text-2xl italic text-muted">Filter by region</p>}
          />
        </div>
      </section>

      <ClosingInvite />
    </>
  );
}
