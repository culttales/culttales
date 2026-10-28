import type { Metadata } from "next";
import JournalList from "@/components/JournalList";
import { getAllJournalPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on Indian wedding traditions, rituals, culture and fashion from CULT. tales.",
};

export default function JournalPage() {
  const posts = getAllJournalPosts();

  return (
    <div className="bg-paper pb-28 pt-36 text-char md:pb-48 md:pt-52">
      <div className="mx-auto max-w-frame px-6 md:px-10">
        <div className="mx-auto mb-20 max-w-3xl text-center md:mb-28">
          <p className="eyebrow mb-6">Journal</p>
          <h1 className="font-display text-display-lg text-balance">
            Culture, ritual, and the craft of documenting them.
          </h1>
          <div aria-hidden className="ornament mt-10">
            <i />
          </div>
        </div>

        <JournalList posts={posts} />
      </div>
    </div>
  );
}
