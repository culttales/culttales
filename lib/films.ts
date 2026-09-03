export type Film = {
  slug: string;
  title: string;
  location: string;
  year: string;
  thumbnail: string;
  duration: string;
  description: string;
  src?: string;
};

// `thumbnail` currently points at a generated placeholder texture — replace
// with a real frame grab or poster image, and wire an actual video source
// into VideoPlayer once footage is ready.
export const films: Film[] = [
  {
    slug: "a-wedding-in-pushkar",
    title: "A Wedding in Pushkar",
    location: "Rajasthan",
    year: "2026",
    thumbnail: "/images/film-1.jpg",
    duration: "4:12",
    description: "Three days of ritual on the edge of a holy lake, told as one continuous evening.",
    src: "/videos/showreel-1.mp4",
  },
  {
    slug: "backwater-vows",
    title: "Backwater Vows",
    location: "Kerala",
    year: "2026",
    thumbnail: "/images/film-2.jpg",
    duration: "3:47",
    description: "A Nair wedding drifting between canals, brass lamps and quiet certainty.",
    src: "/videos/showreel-2.mp4",
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

export function getFilmBySlug(slug: string): Film | undefined {
  return films.find((f) => f.slug === slug);
}
