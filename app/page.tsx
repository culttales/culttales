import HeroSlideshow from "@/components/home/HeroSlideshow";
import Manifesto from "@/components/home/Manifesto";
import StoriesShowcase from "@/components/home/StoriesShowcase";
import Cinema from "@/components/home/Cinema";
import Craft from "@/components/home/Craft";
import JournalNotes from "@/components/home/JournalNotes";
import Inquire from "@/components/home/Inquire";
import { getAllStories } from "@/lib/stories";
import { getReleasedFilms } from "@/lib/films";
import { getAllJournalPosts } from "@/lib/journal";

export default function HomePage() {
  const films = getReleasedFilms();

  return (
    <>
      <HeroSlideshow film={films[0]} />
      <Manifesto />
      <StoriesShowcase stories={getAllStories()} />
      <Cinema films={films} />
      <Craft />
      <JournalNotes posts={getAllJournalPosts().slice(0, 3)} />
      <Inquire />
    </>
  );
}
