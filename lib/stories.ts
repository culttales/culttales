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
  heroImage: string;
  cardImage: string;
  excerpt: string;
  openingLine: string;
  description: string;
  images: StoryImage[];
  film?: string;
  rituals: Ritual[];
  featured?: boolean;
};

// Replace `heroImage`, `cardImage`, and every entry in `images` with real
// photography before launch. Files currently point at generated placeholder
// textures in /public/images so the layouts can be reviewed end to end.
export const stories: Story[] = [
  {
    slug: "shatrunjay-pushkar-wedding",
    title: "Shatrunjay & Ira",
    coupleNames: "Shatrunjay & Ira",
    location: "Pushkar, Rajasthan",
    region: "Rajasthan",
    year: "2026",
    category: "Wedding Story",
    heroImage: "/images/rajasthan-2.jpg",
    cardImage: "/images/rajasthan-1.jpg",
    excerpt:
      "Where sacred waters meet desert winds, a Rajasthani wedding unfolds across three days of ritual and colour.",
    openingLine: "Where sacred waters meet desert winds.",
    description:
      "A three-day Rajasthani celebration held on the edge of Pushkar's holy lake, where centuries-old rituals met golden desert light. Camel processions, marigold courtyards and a baraat that wound through the old town at dusk.",
    images: [
      { src: "/images/rajasthan-1.jpg", alt: "Bride in traditional Rajasthani bridal attire", orientation: "portrait" },
      { src: "/images/rajasthan-2.jpg", alt: "Wide view of the Pushkar lakeside mandap", orientation: "landscape" },
      { src: "/images/rajasthan-3.jpg", alt: "Detail of hand-painted mehndi", orientation: "portrait" },
    ],
    film: "/images/film-1.jpg",
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
    heroImage: "/images/kerala-1.jpg",
    cardImage: "/images/kerala-2.jpg",
    excerpt:
      "A Nair wedding held on the backwaters, where the thali ceremony carried the quiet weight of generations.",
    openingLine: "The backwaters keep their own time.",
    description:
      "A traditional Kerala wedding set against palm-lined canals, built around the simplicity and grace of Nair customs — banana leaf feasts, brass lamps, and a thali tied at the exact auspicious minute.",
    images: [
      { src: "/images/kerala-1.jpg", alt: "Traditional Kerala Sadya feast on banana leaves", orientation: "landscape" },
      { src: "/images/kerala-2.jpg", alt: "Bride in cream and gold Kasavu saree", orientation: "portrait" },
      { src: "/images/kerala-3.jpg", alt: "Brass nilavilakku lamp lit for the ceremony", orientation: "landscape" },
    ],
    film: "/images/film-2.jpg",
    rituals: [
      { name: "Thali Kettu", description: "The groom ties a gold thali around the bride's neck, the central moment of a traditional Nair wedding." },
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
    heroImage: "/images/tamilnadu-2.jpg",
    cardImage: "/images/tamilnadu-1.jpg",
    excerpt:
      "A temple-town wedding built around the Kashi Yatra and a Mangalsutra tied to the sound of the nadaswaram.",
    openingLine: "The temple bells set the tempo for everything after.",
    description:
      "Held in the shadow of Madurai's temple towers, this wedding followed the full arc of a Tamil Brahmin ceremony — the Kashi Yatra, the Oonjal swing ritual, and a feast served on plantain leaves for four hundred guests.",
    images: [
      { src: "/images/tamilnadu-1.jpg", alt: "Groom performing the Kashi Yatra ritual", orientation: "portrait" },
      { src: "/images/tamilnadu-2.jpg", alt: "Couple seated on the Oonjal swing", orientation: "landscape" },
      { src: "/images/tamilnadu-3.jpg", alt: "Close detail of temple jewellery", orientation: "portrait" },
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
    heroImage: "/images/bengal-1.jpg",
    cardImage: "/images/bengal-3.jpg",
    excerpt:
      "A Bengali wedding steeped in Tagore's countryside, where the Shubho Drishti moment stopped the entire courtyard.",
    openingLine: "A red-bordered saree, a conch shell, a courtyard gone quiet.",
    description:
      "A Bengali wedding held in Shantiniketan, folding in the region's artistic heritage — alpana floor art, dhunuchi dance, and the hush of the Shubho Drishti before the couple's first ceremonial glance.",
    images: [
      { src: "/images/bengal-1.jpg", alt: "Bride carried on a wooden piri", orientation: "landscape" },
      { src: "/images/bengal-2.jpg", alt: "Detail of red and white shakha pola bangles", orientation: "portrait" },
      { src: "/images/bengal-3.jpg", alt: "Alpana floor art at the entrance", orientation: "landscape" },
    ],
    film: "/images/film-3.jpg",
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
    heroImage: "/images/punjab-2.jpg",
    cardImage: "/images/punjab-1.jpg",
    excerpt:
      "An Anand Karaj at dawn, followed by a baraat loud enough to be heard across the old city.",
    openingLine: "Dawn in the Golden Temple's shadow, then noise, colour, joy.",
    description:
      "An Anand Karaj held at sunrise, followed by a full day of Punjabi celebration — bhangra in the streets, a towering baraat, and a Doli farewell that had the entire wedding party in tears.",
    images: [
      { src: "/images/punjab-1.jpg", alt: "Groom arriving on a decorated mare", orientation: "portrait" },
      { src: "/images/punjab-2.jpg", alt: "Guests dancing bhangra during the baraat", orientation: "landscape" },
      { src: "/images/punjab-3.jpg", alt: "Bride's chooda bangles detail", orientation: "portrait" },
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
    heroImage: "/images/goa-1.jpg",
    cardImage: "/images/goa-3.jpg",
    excerpt:
      "A Goan-Konkani wedding across a Portuguese courtyard, roce ceremony and all.",
    openingLine: "Coconut milk, marigolds, and a courtyard that smelled of the sea.",
    description:
      "A Goan Catholic-Konkani wedding held in a restored Fontainhas courtyard house — the roce ceremony at noon, a church service by the sea, and a reception that ran until the early hours to a live Konkani band.",
    images: [
      { src: "/images/goa-1.jpg", alt: "Roce ceremony with coconut milk", orientation: "landscape" },
      { src: "/images/goa-2.jpg", alt: "Portuguese-era courtyard house detail", orientation: "portrait" },
      { src: "/images/goa-3.jpg", alt: "Reception under string lights", orientation: "landscape" },
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
