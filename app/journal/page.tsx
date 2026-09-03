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
    <div className="bg-paper pb-28 pt-36 text-char md:pb-36 md:pt-44">
      <div className="mx-auto max-w-frame px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm text-dust">Journal</p>
          <h1 className="font-display text-display-lg text-balance">
            Culture, ritual, and the craft of documenting them.
          </h1>
        </div>

        <JournalList posts={posts} />
      </div>
    </div>
  );
}
