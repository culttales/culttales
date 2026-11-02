import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import HeroVideo from "@/components/home/HeroVideo";
import Manifesto from "@/components/home/Manifesto";
import StoriesShowcase from "@/components/home/StoriesShowcase";
import Cinema from "@/components/home/Cinema";
import Craft from "@/components/home/Craft";
import JournalNotes from "@/components/home/JournalNotes";
import Inquire from "@/components/home/Inquire";
import { getAllStories } from "@/lib/stories";
import { getReleasedFilms } from "@/lib/films";
import { getAllJournalPosts } from "@/lib/journal";
import { SHOW_JOURNAL } from "@/lib/site";

// The home page keeps the original type: Cormorant Garamond headings and
// Plus Jakarta Sans text. Loaded here, so other pages don't download them.
const classicDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400"],
  display: "swap",
});

const classicSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Swaps the site-wide font variables (and the heading tuning in globals.css)
// back to the original settings while the home page is on screen.
const classicType = `
html:root {
  --font-display: ${classicDisplay.style.fontFamily};
  --font-sans: ${classicSans.style.fontFamily};
}
body {
  letter-spacing: normal;
}
h1, h2, h3, h4, .font-display {
  font-stretch: normal;
}
h1, h2, h3, h4 {
  font-weight: 400;
  letter-spacing: -0.005em;
}
`;

export default function HomePage() {
  const films = getReleasedFilms();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: classicType }} />
      <HeroVideo film={films[0]} />
      <Manifesto />
      <StoriesShowcase stories={getAllStories()} />
      <Cinema films={films} />
      <Craft />
      {SHOW_JOURNAL && <JournalNotes posts={getAllJournalPosts().slice(0, 3)} />}
      <Inquire />
    </>
  );
}
