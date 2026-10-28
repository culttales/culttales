export type Film = {
  slug: string;
  title: string;
  location: string;
  year: string;
  thumbnail: string;
  duration: string;
  description: string;
  /** Full film, played in the lightbox. */
  src?: string;
  /** Short muted loop shown on hover and in the homepage showcase. */
  preview?: string;
};

// The first two films are real footage, stored upright at 1920x1080 and kept
// under Cloudflare's 25 MiB asset limit. Their titles and places are still
// placeholders. The last two have no footage yet, so they stay off the site
// (see getReleasedFilms) until a `src` is added.
export const films: Film[] = [
  {
    slug: "a-wedding-in-pushkar",
    title: "A Wedding in Pushkar",
    location: "Rajasthan",
    year: "2026",
    thumbnail: "/images/film-1-still.jpg",
    duration: "0:55",
    description: "Three days of ritual on the edge of a holy lake, told as one continuous evening.",
    src: "/videos/film-1.mp4",
    preview: "/videos/film-1-preview.mp4",
  },
  {
    slug: "the-sangeet",
    title: "The Sangeet",
    location: "Kerala",
    year: "2026",
    thumbnail: "/images/film-2-still.jpg",
    duration: "0:39",
    description: "Lights low, music loud and two families on one dance floor. The night before the vows.",
    src: "/videos/film-2.mp4",
    preview: "/videos/film-2-preview.mp4",
  },
  {
    slug: "shubho-drishti",
    title: "Shubho Drishti",
    location: "West Bengal",
    year: "2025",
    thumbnail: "/images/film-3.jpg",
    duration: "5:03",
    description: "The moment before the moment — a Bengali wedding's held breath.",
  },
  {
    slug: "the-doli",
    title: "The Doli",
    location: "Punjab",
    year: "2025",
    thumbnail: "/images/film-4.jpg",
    duration: "4:31",
    description: "Sunrise vows, a loud and joyful baraat, and a farewell that undoes everyone.",
  },
];

export function getAllFilms(): Film[] {
  return films;
}

/** Films with footage to play; the ones shown on the site. */
export function getReleasedFilms(): Film[] {
  return films.filter((f) => f.src);
}

export function getFilmBySlug(slug: string): Film | undefined {
  return films.find((f) => f.slug === slug);
}
