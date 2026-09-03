import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EditorialSection from "@/components/EditorialSection";
import FeaturedStory from "@/components/FeaturedStory";
import StoryGrid from "@/components/StoryGrid";
import CultureIndex from "@/components/CultureIndex";
import FilmCard from "@/components/FilmCard";
import JournalList from "@/components/JournalList";
import ContactCTA from "@/components/ContactCTA";
import Link from "next/link";
import { getAllStories, getFeaturedStories } from "@/lib/stories";
import { getAllFilms } from "@/lib/films";
import { getAllJournalPosts } from "@/lib/journal";

export default function HomePage() {
  const stories = getAllStories();
  const [featured] = getFeaturedStories();
  const selectedStories = stories.filter((s) => s.slug !== featured?.slug).slice(0, 5);
  const films = getAllFilms().slice(0, 2);
  const posts = getAllJournalPosts().slice(0, 3);

  return (
    <>
      <Hero />

      <AboutSection />

      <EditorialSection
        id="introduction"
        tone="dark"
        align="left"
        statement="Every wedding carries a story. Every ritual carries a memory. Every culture deserves to be remembered."
        body="We travel across India to document weddings in their most authentic form — capturing rituals, traditions, people and fleeting moments that exist beyond the frame."
      />

      {featured && <FeaturedStory story={featured} />}

      <section className="bg-ink px-6 pb-28 pt-4 text-bone md:px-10 md:pb-36">
        <div className="mx-auto max-w-frame">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-display text-display-md text-balance">Stories</h2>
              <p className="mt-3 max-w-md text-base text-bone/70">
                Weddings, rituals and tales from across India.
              </p>
            </div>
            <Link href="/stories" className="link-draw hidden text-sm text-bone md:inline-block">
              View all stories &rarr;
            </Link>
          </div>

          <StoryGrid stories={selectedStories} />

          <Link href="/stories" className="link-draw mt-10 inline-block text-sm text-bone md:hidden">
            View all stories &rarr;
          </Link>
        </div>
      </section>

      <CultureIndex />

      <section className="bg-ink px-6 pb-28 pt-4 text-bone md:px-10 md:pb-36">
        <div className="mx-auto max-w-frame">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-display text-display-md text-balance">Films</h2>
              <p className="mt-3 max-w-md text-base text-bone/70">Stories that move.</p>
            </div>
            <Link href="/films" className="link-draw hidden text-sm text-bone md:inline-block">
              Watch all films &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {films.map((film) => (
              <FilmCard key={film.slug} film={film} />
            ))}
          </div>
        </div>
      </section>

      <EditorialSection
        tone="light"
        align="center"
        statement="We don't simply photograph weddings. We document the culture, people and stories surrounding them."
      />

      <section className="bg-paper px-6 py-28 text-char md:px-10 md:py-36">
        <div className="mx-auto max-w-frame">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-display text-display-md text-balance">Journal</h2>
              <p className="mt-3 max-w-md text-base text-char/70">
                Notes on culture, ritual and the craft of documenting them.
              </p>
            </div>
            <Link href="/journal" className="link-draw hidden text-sm text-char md:inline-block">
              Read the journal &rarr;
            </Link>
          </div>

          <JournalList posts={posts} />
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-bone md:px-10 md:py-36">
        <div className="mx-auto grid max-w-frame grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-display-md text-balance">
              We are storytellers of culture, love and tradition.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="max-w-editorial text-base leading-relaxed text-bone/70">
              CULT. tales travels across India documenting weddings in their
              most authentic form. We capture more than ceremonies — the
              people, the rituals, the chaos, the silence, the laughter, the
              heritage, the emotion.
            </p>
            <Link href="/about" className="link-draw mt-8 w-fit text-sm text-bone">
              More about us &rarr;
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
