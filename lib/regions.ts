export type Region = {
  name: string;
  image: string;
  detail: string;
  storySlug?: string;
};

export const regions: Region[] = [
  {
    name: "Rajasthan",
    image: "/images/rajasthan-2.jpg",
    detail: "Desert forts, camel processions, and a Mayra ritual that brings the bride's family bearing gifts.",
    storySlug: "shatrunjay-pushkar-wedding",
  },
  {
    name: "Kerala",
    image: "/images/kerala-1.jpg",
    detail: "Backwater ceremonies built on quiet precision — brass lamps, banana leaf feasts, a thali tied at the exact minute.",
    storySlug: "kerala-backwater-wedding",
  },
  {
    name: "Tamil Nadu",
    image: "/images/tamilnadu-2.jpg",
    detail: "Temple-town weddings paced by the nadaswaram, built around the Kashi Yatra and Oonjal swing.",
    storySlug: "tamil-nadu-temple-wedding",
  },
  {
    name: "West Bengal",
    image: "/images/bengal-1.jpg",
    detail: "Artistic and literary heritage folded into ritual — alpana floor art and the hushed Shubho Drishti.",
    storySlug: "bengal-boat-wedding",
  },
  {
    name: "Punjab",
    image: "/images/punjab-2.jpg",
    detail: "Sunrise Anand Karaj followed by a baraat loud enough for the whole city to join in.",
    storySlug: "punjab-anand-karaj",
  },
  {
    name: "Goa",
    image: "/images/goa-1.jpg",
    detail: "Konkani-Catholic tradition meeting the coast — roce ceremonies and courtyards that smell of the sea.",
    storySlug: "goa-konkani-wedding",
  },
  {
    name: "Gujarat",
    image: "/images/gujarat-1.jpg",
    detail: "Garba circles that last until dawn, and a Mandvo ritual marking the start of the celebrations.",
  },
  {
    name: "Karnataka",
    image: "/images/karnataka-1.jpg",
    detail: "Coastal and Deccan customs side by side, from Dhare ceremonies to elaborate silk drapes.",
  },
];
