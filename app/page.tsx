import Hero from "@/components/Hero";
import Filmstrip from "@/components/Filmstrip";
import RealStories from "@/components/RealStories";
import AboutSection from "@/components/AboutSection";
import EditorialSection from "@/components/EditorialSection";
import FeaturedStory from "@/components/FeaturedStory";
import CultureIndex from "@/components/CultureIndex";
import FilmCard from "@/components/FilmCard";
import JournalList from "@/components/JournalList";
import FAQ from "@/components/FAQ";
import InstagramStrip from "@/components/InstagramStrip";
import EnquiryLetter from "@/components/EnquiryLetter";
import Link from "next/link";
import { getAllStories, getFeaturedStories } from "@/lib/stories";
import { getAllFilms } from "@/lib/films";
import { getAllJournalPosts } from "@/lib/journal";

export default function HomePage() {
  const stories = getAllStories();
  const [featured] = getFeaturedStories();
  const realStories = stories.filter((s) => s.slug !== featured?.slug).slice(0, 4);
  const films = getAllFilms().slice(0, 2);
  const posts = getAllJournalPosts().slice(0, 3);

  return (
    <>
      <Hero />

      <EditorialSection
        id="introduction"
        tone="dark"
        align="center"
        eyebrow="Rooted in culture. Told with grace."
        statement="Every wedding carries a story. Every ritual carries a memory. Every culture deserves to be remembered."
        body="We travel across India to document weddings in their most authentic form — capturing rituals, traditions, people and fleeting moments that exist beyond the frame."
      />

      <Filmstrip />

      <RealStories stories={realStories} />

      <AboutSection />

      {featured && (
        <>
          <span className="gold-rule" />
          <FeaturedStory story={featured} />
        </>
      )}

      <span className="gold-rule" />

      <CultureIndex />

      <section className="bg-ink px-6 pb-28 pt-4 text-bone md:px-10 md:pb-48">
        <div className="mx-auto max-w-frame">
          <div className="mb-16 flex flex-col items-center text-center">
            <p className="eyebrow mb-6">In Motion</p>
            <h2 className="font-display text-display-lg text-balance">Our films</h2>
            <div aria-hidden className="ornament mt-10">
              <i />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {films.map((film) => (
              <FilmCard key={film.slug} film={film} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/films"
              className="inline-block border border-gold/60 px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-gold transition-colors duration-500 hover:bg-gold hover:text-ink"
            >
              Watch All Films
            </Link>
          </div>
        </div>
      </section>

      <EditorialSection
        tone="light"
        align="center"
        statement="We don't simply photograph weddings. We document the culture, people and stories surrounding them."
      />

      <section className="bg-paper px-6 pb-28 text-char md:px-10 md:pb-48">
        <div className="mx-auto max-w-frame">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow mb-4">Notes</p>
              <h2 className="font-display text-display-md text-balance">From the journal</h2>
            </div>
            <Link href="/journal" className="link-draw hidden text-[11px] uppercase tracking-[0.28em] text-char md:inline-block">
              Read the journal &rarr;
            </Link>
          </div>

          <JournalList posts={posts} />
        </div>
      </section>

      <FAQ />

      <InstagramStrip />

      <EnquiryLetter />
    </>
  );
}
