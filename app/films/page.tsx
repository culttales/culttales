import type { Metadata } from "next";
import ClosingInvite from "@/components/ClosingInvite";
import FilmCard from "@/components/FilmCard";
import PageIntro from "@/components/PageIntro";
import { getReleasedFilms } from "@/lib/films";

export const metadata: Metadata = {
  title: "Films",
  description: "Cinematic wedding films from across India by CULT. tales: the rituals, the music and the people of the day.",
};

export default function FilmsPage() {
  const films = getReleasedFilms();

  return (
    <>
      <PageIntro
        label="CULT. tales cinema — motion & sound"
        aside="Hover a film to preview it"
        title={
          <>
            Stories that <em>move.</em>
          </>
        }
        intro="Our films keep the music, the rituals and the people of the day. Not only how your wedding looked, but how it felt."
      />

      <section className="bg-paper px-5 pb-24 md:px-12 md:pb-36">
        <div className="mx-auto grid max-w-site grid-cols-1 gap-x-10 gap-y-16 border-t border-line-dark pt-14 md:grid-cols-2">
          {films.map((film, i) => (
            <FilmCard key={film.slug} film={film} index={i} />
          ))}
        </div>
      </section>

      <ClosingInvite eyebrow="Picture your own film" title="Every wedding has a sound. Let us keep yours." />
    </>
  );
}
