import type { Metadata } from "next";
import { breadcrumbs, jsonLd, pageMetadata } from "@/lib/seo";
import ClosingInvite from "@/components/ClosingInvite";
import FilmCard from "@/components/FilmCard";
import PageIntro from "@/components/PageIntro";
import Link from "next/link";
import SectionMarker from "@/components/SectionMarker";
import { getReleasedFilms } from "@/lib/films";

export const metadata: Metadata = pageMetadata({
  title: "Wedding Films & Cinematography in India",
  description:
    "Cinematic wedding films from across India by CULT. tales: three-to-five-minute films that keep the rituals, the music and the people of your day.",
  path: "/films",
});

export default function FilmsPage() {
  const films = getReleasedFilms();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbs([{ name: "Wedding Films", path: "/films" }]))} />
      <PageIntro
        label="CULT. tales cinema — motion & sound"
        aside="Hover a film to preview it"
        title={
          <>
            Wedding films that <em>move.</em>
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

      <section className="border-t border-line-dark bg-paper px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-site">
          <SectionMarker title="How we make a wedding film" aside="Cinema, not coverage" />
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <h2 className="text-[2.5rem] leading-[1.05] text-obsidian sm:text-5xl lg:col-span-5">
              A wedding film should sound like <em>your</em> wedding.
            </h2>
            <div className="space-y-6 text-base font-light leading-[1.75] text-char/90 md:text-lg lg:col-span-6 lg:col-start-7">
              <p>
                Our wedding films are cinematic and usually three to five minutes long, built around the emotional
                arc of your day rather than a checklist of events. We keep the sound as carefully as the picture: the
                dhol at the baraat, the nadaswaram at the muhurtham, the vows, the speeches and the laughter in
                between.
              </p>
              <p>
                Every wedding we document is covered across photography and wedding cinema together, so the film
                and the photographs tell one story. Before the day we learn your region, your family and the specific
                version of each ritual you practise, so the film follows the moments that matter to you.
              </p>
              <p>
                We are based in{" "}
                <Link href="/wedding-photography/kerala" className="underline underline-offset-4 hover:text-bronze">
                  Kerala
                </Link>{" "}
                and{" "}
                <Link href="/wedding-photography/rajasthan" className="underline underline-offset-4 hover:text-bronze">
                  Rajasthan
                </Link>{" "}
                and travel across India and beyond for weddings. Read the{" "}
                <Link href="/stories" className="underline underline-offset-4 hover:text-bronze">
                  wedding stories
                </Link>{" "}
                behind our films, or{" "}
                <Link href="/contact" className="underline underline-offset-4 hover:text-bronze">
                  tell us about yours
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingInvite eyebrow="Picture your own film" title="Every wedding has a sound. Let us keep yours." />
    </>
  );
}
