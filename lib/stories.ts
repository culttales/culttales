export type StoryImage = {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
};

export type Ritual = {
  name: string;
  description: string;
};

export type Story = {
  slug: string;
  title: string;
  coupleNames: string;
  location: string;
  region: string;
  year: string;
  category: string;
  /** Filter group on the homepage. */
  zone: "north" | "south" | "east-west";
  heroImage: string;
  cardImage: string;
  /** Where to centre the card photo when it is cropped, e.g. "66% 40%". */
  cardFocus?: string;
  excerpt: string;
  openingLine: string;
  description: string;
  images: StoryImage[];
  /** Poster for the story's film. */
  film?: string;
  /** The film itself, when footage exists. */
  filmSrc?: string;
  rituals: Ritual[];
  featured?: boolean;
};

// PLACEHOLDER CONTENT. The couples, places and texts below are stand-ins.
// Every story now shows real photographs from the studio so the layouts can
// be judged, but the photos are not of the couples named here. Replace the
// names, text and images with each real wedding before launch.
export const stories: Story[] = [
  {
    slug: "shatrunjay-pushkar-wedding",
    title: "Shatrunjay & Surbhi",
    coupleNames: "Shatrunjay & Surbhi",
    location: "Pushkar, Rajasthan",
    region: "Rajasthan",
    year: "2026",
    category: "Wedding Story",
    zone: "north",
    heroImage: "/images/wedding-canopy.jpg",
    cardImage: "/images/moment-8.jpg",
    excerpt:
      "Where sacred waters meet desert winds, a Rajasthani wedding unfolds across three days of ritual and colour.",
    openingLine: "Where sacred waters meet desert winds.",
    description:
      "A three-day Rajasthani celebration held on the edge of Pushkar's holy lake, where centuries-old rituals met golden desert light. Camel processions, marigold courtyards and a baraat that wound through the old town at dusk.",
    images: [
      { src: "/images/wedding-pheras.jpg", alt: "The couple smiling at each other beside the sacred fire", orientation: "landscape" },
      { src: "/images/moment-7.jpg", alt: "The bride and groom smiling at each other under falling sparks", orientation: "portrait" },
      { src: "/images/moment-6.jpg", alt: "The couple dancing in a shower of sparks", orientation: "portrait" },
    ],
    film: "/images/film-1-still.jpg",
    filmSrc: "/videos/film-1.mp4",
    rituals: [
      { name: "Baraat", description: "The groom's processional entry, accompanied by drummers and dancing family through the old town streets." },
      { name: "Phera", description: "Seven vows taken around the sacred fire, each circle marking a promise for the marriage ahead." },
      { name: "Mayra", description: "The bride's maternal family arrives bearing gifts, a Rajasthani tradition of blessing before the ceremony." },
    ],
    featured: true,
  },
  {
    slug: "aiswarya-jishnu-engagement",
    title: "Aiswarya & Jishnu",
    coupleNames: "Aiswarya & Jishnu",
    location: "Kerala",
    region: "Kerala",
    year: "2026",
    category: "Wedding Story",
    zone: "south",
    heroImage: "/images/aiswarya-jishnu/garden.jpg",
    cardImage: "/images/aiswarya-jishnu/garden.jpg",
    cardFocus: "50% 60%",
    excerpt:
      "A Kerala engagement in cream and gold, set between whitewashed doors, patterned tiles and a tropical garden.",
    openingLine: "Cream silk, brass bells and a garden gone quiet.",
    description:
      "Aiswarya and Jishnu's engagement in Kerala, dressed in matching cream and gold. Soft light fell across carved white doors and old patterned tiles, and the couple slipped between easy laughter and stillness among banana leaves and hanging vines.",
    images: [
      { src: "/images/aiswarya-jishnu/steps.jpg", alt: "Jishnu touching Aiswarya's hair as they sit together on tiled steps before a white carved door", orientation: "portrait" },
      { src: "/images/aiswarya-jishnu/seated.jpg", alt: "Aiswarya and Jishnu seated among green plants in a whitewashed courtyard", orientation: "portrait" },
      { src: "/images/aiswarya-jishnu/bride.jpg", alt: "Aiswarya in a cream saree seated beside a white door with brass bells", orientation: "portrait" },
      { src: "/images/aiswarya-jishnu/engaged.webp", alt: "We are Engaged, Aiswarya and Jishnu, two portraits among tropical leaves", orientation: "portrait" },
    ],
    rituals: [],
    featured: true,
  },
  {
    slug: "alana-jafiz-wedding",
    title: "Alana Anish & Jafiz Javad",
    coupleNames: "Alana Anish & Jafiz Javad",
    location: "Kerala",
    region: "Kerala",
    year: "2026",
    category: "Wedding Story",
    zone: "south",
    heroImage: "/images/alana-jafiz/portrait.jpg",
    cardImage: "/images/alana-jafiz/portrait.jpg",
    cardFocus: "40% 35%",
    excerpt:
      "A Kerala wedding in blush and champagne, held among palms and tropical leaves.",
    openingLine: "Blush sequins, a drifting veil and a garden full of green.",
    description:
      "Alana and Jafiz's wedding in Kerala, dressed in soft blush and champagne against a backdrop of palms, heliconia and green lawns. A held hand, a lowered gaze and a quiet touch on the shoulder carried the day.",
    images: [
      { src: "/images/alana-jafiz/vows.jpg", alt: "Jafiz and Alana holding hands and looking at each other among tropical plants", orientation: "portrait" },
      { src: "/images/alana-jafiz/chair.jpg", alt: "Alana resting her hand on Jafiz's shoulder as he looks up at her", orientation: "portrait" },
    ],
    rituals: [],
    featured: true,
  },
  {
    slug: "arun-prabishna-wedding",
    title: "Arun & Prabishna",
    coupleNames: "Arun & Prabishna",
    location: "Kerala",
    region: "Kerala",
    year: "2026",
    category: "Wedding Story",
    zone: "south",
    heroImage: "/images/arun-prabishna/doorway.jpg",
    cardImage: "/images/arun-prabishna/doorway.jpg",
    cardFocus: "70% 65%",
    excerpt:
      "A Kerala celebration in emerald silk and cream mundu, set inside a traditional tiled-roof home.",
    openingLine: "Emerald silk, a brass bell and a house that remembers.",
    description:
      "Arun and Prabishna's celebration at a traditional Kerala home, all terracotta tiles, carved timber and warm lamplight. She wore emerald and magenta Kanjivaram silk, he wore a cream kurta and gold-bordered mundu, and the day moved between easy laughter and quiet, framed stillness.",
    images: [
      { src: "/images/arun-prabishna/balcony.jpg", alt: "Arun and Prabishna laughing together at a carved wooden balcony", orientation: "portrait" },
      { src: "/images/arun-prabishna/bride.jpg", alt: "Prabishna smiling in an emerald saree in warm lamplight", orientation: "portrait" },
      { src: "/images/arun-prabishna/hallway.jpg", alt: "Prabishna standing beside Arun seated in a wooden chair in a timber-beamed hallway", orientation: "portrait" },
      { src: "/images/arun-prabishna/chair.jpg", alt: "Arun seated in a wooden chair with Prabishna's arm around his shoulders", orientation: "portrait" },
    ],
    rituals: [],
    featured: true,
  },
  {
    slug: "bengal-boat-wedding",
    title: "Rohan & Anwesha",
    coupleNames: "Rohan & Anwesha",
    location: "Shantiniketan, West Bengal",
    region: "West Bengal",
    year: "2025",
    category: "Wedding Story",
    zone: "east-west",
    heroImage: "/images/moment-5.jpg",
    cardImage: "/images/moment-5.jpg",
    cardFocus: "68% 40%",
    excerpt:
      "A Bengali wedding steeped in Tagore's countryside, where the Shubho Drishti moment stopped the entire courtyard.",
    openingLine: "A red-bordered saree, a conch shell, a courtyard gone quiet.",
    description:
      "A Bengali wedding held in Shantiniketan, folding in the region's artistic heritage — alpana floor art, dhunuchi dance, and the hush of the Shubho Drishti before the couple's first ceremonial glance.",
    images: [
      { src: "/images/moment-5.jpg", alt: "The bride in red beside a window", orientation: "landscape" },
      { src: "/images/moment-1.jpg", alt: "The bride among the women of her family", orientation: "portrait" },
      { src: "/images/moment-9.jpg", alt: "The couple walking hand in hand among their guests", orientation: "portrait" },
    ],
    rituals: [
      { name: "Shubho Drishti", description: "The couple's first auspicious glance at each other, shared as the bride is carried in on a wooden piri." },
      { name: "Saat Paak", description: "The bride circles the groom seven times before the wedding rites begin, veiled behind betel leaves." },
    ],
  },
];

export function getAllStories(): Story[] {
  return stories;
}

export function getFeaturedStories(): Story[] {
  return stories.filter((s) => s.featured);
}

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getAdjacentStory(slug: string): Story {
  const idx = stories.findIndex((s) => s.slug === slug);
  return stories[(idx + 1) % stories.length];
}
