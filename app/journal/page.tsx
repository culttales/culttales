import type { Metadata } from "next";
import ClosingInvite from "@/components/ClosingInvite";
import JournalList from "@/components/JournalList";
import PageIntro from "@/components/PageIntro";
import { getAllJournalPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on Indian wedding traditions, rituals, culture and fashion from CULT. tales.",
};

export default function JournalPage() {
  return (
    <>
      <PageIntro
        label="The journal — notes from the studio"
        aside="Rituals · Culture · Craft"
        title={
          <>
            Culture, ritual &amp; the <em>craft</em> of keeping them.
          </>
        }
        intro="What we learn at every wedding: the meaning behind a ritual, the regions they come from, and how we document them with care."
      />

      <section className="bg-paper px-5 pb-24 md:px-12 md:pb-36">
        <div className="mx-auto max-w-site border-t border-line-dark pt-14">
          <JournalList posts={getAllJournalPosts()} />
        </div>
      </section>

      <ClosingInvite eyebrow="Planning your own celebration?" />
    </>
  );
}
