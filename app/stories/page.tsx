import type { Metadata } from "next";
import { breadcrumbs, jsonLd, pageMetadata } from "@/lib/seo";
import PageIntro from "@/components/PageIntro";
import StoryBoard from "@/components/StoryBoard";
import ClosingInvite from "@/components/ClosingInvite";
import { getAllStories } from "@/lib/stories";

export const metadata: Metadata = pageMetadata({
  title: "Real Indian Wedding Stories & Photos",
  description:
    "Real Indian wedding stories from Kerala, Rajasthan and West Bengal: the rituals, the families and the photographs, documented by CULT. tales.",
  path: "/stories",
});

export default function StoriesPage() {
  const stories = getAllStories();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbs([{ name: "Wedding Stories", path: "/stories" }]))} />
      <PageIntro
        label="Wedding stories — the archive"
        aside="Kerala · Rajasthan · Across India"
        title={
          <>
            Indian weddings, rituals &amp; <em>tales</em> from across the country.
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
