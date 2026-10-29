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
    slug: "kerala-backwater-wedding",
    title: "Arjun & Meera",
    coupleNames: "Arjun & Meera",
    location: "Alleppey, Kerala",
    region: "Kerala",
    year: "2026",
    category: "Wedding Story",
    zone: "south",
    heroImage: "/images/moment-4.jpg",
    cardImage: "/images/moment-6.jpg",
    excerpt:
      "A Kerala wedding held on the backwaters, where the thali ceremony carried the quiet weight of generations.",
    openingLine: "The backwaters keep their own time.",
    description:
      "A traditional Kerala wedding set against palm-lined canals, built around the simplicity and grace of Kerala customs — banana leaf feasts, brass lamps, and a thali tied at the exact auspicious minute.",
    images: [
      { src: "/images/moment-4.jpg", alt: "The couple at sunset on a terrace", orientation: "landscape" },
      { src: "/images/moment-6.jpg", alt: "The couple dancing in a shower of sparks", orientation: "portrait" },
      { src: "/images/moment-1.jpg", alt: "The bride laughing among the women of her family", orientation: "portrait" },
    ],
    rituals: [
      { name: "Thali Kettu", description: "The groom ties a gold thali around the bride's neck, the central moment of a traditional Kerala wedding." },
      { name: "Nilavilakku", description: "A brass lamp is lit at the start of the ceremony and kept burning throughout, symbolising an auspicious beginning." },
    ],
    featured: true,
  },
  {
    slug: "tamil-nadu-temple-wedding",
    title: "Karthik & Divya",
    coupleNames: "Karthik & Divya",
    location: "Madurai, Tamil Nadu",
    region: "Tamil Nadu",
    year: "2025",
    category: "Wedding Story",
    zone: "south",
    heroImage: "/images/wedding-pheras.jpg",
    cardImage: "/images/film-1-still.jpg",
    excerpt:
      "A temple-town wedding built around the Kashi Yatra and a Mangalsutra tied to the sound of the nadaswaram.",
    openingLine: "The temple bells set the tempo for everything after.",
    description:
      "Held in the shadow of Madurai's temple towers, this wedding followed the full arc of a traditional Tamil ceremony — the Kashi Yatra, the Oonjal swing ritual, and a feast served on plantain leaves for four hundred guests.",
    images: [
      { src: "/images/wedding-pheras.jpg", alt: "The couple beside the sacred fire", orientation: "landscape" },
      { src: "/images/moment-8.jpg", alt: "The couple in a quiet moment under red drapes", orientation: "portrait" },
      { src: "/images/moment-6.jpg", alt: "The couple dancing in a shower of sparks", orientation: "portrait" },
    ],
    rituals: [
      { name: "Kashi Yatra", description: "A playful ritual where the groom pretends to renounce marriage for a spiritual life, before being persuaded to stay." },
      { name: "Oonjal", description: "The couple is seated on a decorated swing while relatives sing traditional songs around them." },
    ],
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
  {
    slug: "punjab-anand-karaj",
    title: "Gurpreet & Simran",
    coupleNames: "Gurpreet & Simran",
    location: "Amritsar, Punjab",
    year: "2025",
    region: "Punjab",
    category: "Wedding Story",
    zone: "north",
    heroImage: "/images/moment-3.jpg",
    cardImage: "/images/moment-7.jpg",
    excerpt:
      "An Anand Karaj at dawn, followed by a baraat loud enough to be heard across the old city.",
    openingLine: "Dawn in the Golden Temple's shadow, then noise, colour, joy.",
    description:
      "An Anand Karaj held at sunrise, followed by a full day of Punjabi celebration — bhangra in the streets, a towering baraat, and a Doli farewell that had the entire wedding party in tears.",
    images: [
      { src: "/images/moment-3.jpg", alt: "Family showering the couple with petals", orientation: "landscape" },
      { src: "/images/moment-7.jpg", alt: "The bride and groom smiling under falling sparks", orientation: "portrait" },
      { src: "/images/moment-8.jpg", alt: "The couple in a quiet moment under red drapes", orientation: "portrait" },
    ],
    rituals: [
      { name: "Anand Karaj", description: "The Sikh wedding ceremony, centred on four Laavan hymns circled around the Guru Granth Sahib." },
      { name: "Doli", description: "The emotional farewell as the bride leaves her family home for the first time." },
    ],
  },
  {
    slug: "goa-konkani-wedding",
    title: "Leo & Priyanka",
    coupleNames: "Leo & Priyanka",
    location: "Fontainhas, Goa",
    region: "Goa",
    year: "2025",
    category: "Wedding Story",
    zone: "east-west",
    heroImage: "/images/film-2-still.jpg",
    cardImage: "/images/film-2-still.jpg",
    excerpt:
      "A Goan-Konkani wedding across a Portuguese courtyard, roce ceremony and all.",
    openingLine: "Coconut milk, marigolds, and a courtyard that smelled of the sea.",
    description:
      "A Goan Catholic-Konkani wedding held in a restored Fontainhas courtyard house — the roce ceremony at noon, a church service by the sea, and a reception that ran until the early hours to a live Konkani band.",
    images: [
      { src: "/images/film-2-still.jpg", alt: "Friends and family dancing at the celebration", orientation: "landscape" },
      { src: "/images/moment-9.jpg", alt: "The couple walking hand in hand among their guests", orientation: "portrait" },
      { src: "/images/moment-1.jpg", alt: "The bride among the women of her family", orientation: "portrait" },
    ],
    rituals: [
      { name: "Roce", description: "Family members bless the couple by applying coconut milk, a Goan ceremony symbolising purity and good fortune." },
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
