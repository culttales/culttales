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
    <div className="bg-ink pb-28 pt-36 text-bone md:pb-36 md:pt-44">
      <div className="mx-auto max-w-frame px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm text-dust">Films</p>
          <h1 className="font-display text-display-lg text-balance">Stories that move.</h1>
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
