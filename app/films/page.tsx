import type { Metadata } from "next";
import FilmCard from "@/components/FilmCard";
import { getAllFilms } from "@/lib/films";

export const metadata: Metadata = {
  title: "Films",
  description: "Cinematic wedding films documenting Indian weddings by CULT. tales.",
};

export default function FilmsPage() {
  const films = getAllFilms();

  return (
    <div className="bg-paper pb-28 pt-36 text-char md:pb-48 md:pt-52">
      <div className="mx-auto max-w-frame px-6 md:px-10">
        <div className="mx-auto mb-20 max-w-3xl text-center md:mb-28">
          <p className="eyebrow mb-6">Films</p>
          <h1 className="font-display text-display-lg text-balance">Stories that move.</h1>
          <div aria-hidden className="ornament mt-10">
            <i />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
          {films.map((film) => (
            <FilmCard key={film.slug} film={film} />
          ))}
        </div>
      </div>
    </div>
  );
}
