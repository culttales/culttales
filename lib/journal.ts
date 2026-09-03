export type JournalPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "rituals-that-make-a-kerala-wedding",
    title: "The Rituals That Make a Kerala Wedding",
    category: "Traditions",
    date: "March 2026",
    readTime: "6 min",
    image: "/images/journal-1.jpg",
    excerpt:
      "Beneath the simplicity of a Nair wedding sits a set of rituals that have barely changed in generations.",
    body: [
      "A Kerala wedding rarely announces itself with spectacle. There is no towering baraat, no fireworks over a courtyard. Instead, the ceremony holds its weight in small, exact gestures: the lighting of a brass nilavilakku before a single guest has arrived, the precise minute at which a thali is tied.",
      "Understanding these rituals changes how you document them. A wide shot rarely tells the story — the story is in the hands, the timing, the quiet exchange of a look between a mother and daughter before the ceremony begins.",
      "This is what we look for on every Kerala wedding we document: not the moment everyone expects, but the ninety seconds before it.",
    ],
  },
  {
    slug: "inside-a-rajasthani-wedding",
    title: "Inside a Rajasthani Wedding",
    category: "Culture",
    date: "February 2026",
    readTime: "7 min",
    image: "/images/journal-2.jpg",
    excerpt:
      "Three days, four ceremonies, and a desert light that changes everything it touches.",
    body: [
      "Rajasthani weddings unfold in acts. By the time the baraat reaches the mandap, the couple has already been through a Mayra, a Ganesh Puja, and enough turmeric to colour an entire family's hands for a week.",
      "What makes these weddings distinct is scale without excess — every ritual, however grand, is rooted in something specific to the family hosting it. Our job is to find that specificity and protect it from becoming generic spectacle in the edit.",
    ],
  },
  {
    slug: "why-indian-weddings-are-stories-not-events",
    title: "Why Indian Weddings Are Stories, Not Events",
    category: "Journal",
    date: "January 2026",
    readTime: "5 min",
    image: "/images/journal-3.jpg",
    excerpt:
      "An event has a schedule. A story has a shape. Indian weddings, done right, are always the latter.",
    body: [
      "It's tempting to treat a wedding as a list of moments to check off — entrance, ceremony, reception. But every Indian wedding we've documented resists that structure. There's a shape to it, built from decades of family history, regional custom and the specific people getting married.",
      "Our approach starts before the camera does: understanding the community, the region, the specific version of a ritual this family practices, so the final story feels like theirs and no one else's.",
    ],
  },
  {
    slug: "wedding-fashion-across-india",
    title: "Wedding Fashion Across India, Region by Region",
    category: "Fashion",
    date: "December 2025",
    readTime: "8 min",
    image: "/images/journal-4.jpg",
    excerpt:
      "From Kanjeevaram silk to Phulkari embroidery, what a bride wears is a map of where she's from.",
    body: [
      "Fashion at an Indian wedding is never just fashion. A Kanjeevaram saree, a Banarasi dupatta, Phulkari embroidery on a Punjabi phulkari veil — each carries regional history, family craft, and often a piece of the mother's own wedding wardrobe.",
      "We spend as much time photographing the getting-ready hours as we do the ceremony itself, because that's where the fashion story — and its meaning — actually lives.",
    ],
  },
];

export function getAllJournalPosts(): JournalPost[] {
  return journalPosts;
}

export function getJournalPostBySlug(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}
