import type { Question } from "@/components/FAQ";
import { getAllStories, type Story } from "@/lib/stories";

export type City = {
  slug: string;
  /** Slug of the parent region page, e.g. "rajasthan". */
  regionSlug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  label: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  heroFocus?: string;
  sections: { heading: string; body: string[] }[];
  /** Venues and settings named on the page, also used as areaServed hints. */
  settings: { name: string; description: string }[];
  faqs: Question[];
};

// City pages under each region page. As with the region pages, the text
// only states what the site already says about the studio (based in
// Rajasthan, photography and cinema, three-to-five-minute films) plus
// general background on each city. Hero images are from the studio's
// archive; their alt text describes the photo, not where it was taken.
export const cities: City[] = [
  {
    slug: "pushkar",
    regionSlug: "rajasthan",
    name: "Pushkar",
    metaTitle: "Pushkar Wedding Photographer & Films",
    metaDescription:
      "Pushkar wedding photography and films by CULT. tales, a Rajasthan-based team documenting destination weddings by the holy lake, from the baraat to the pheras.",
    label: "Pushkar — wedding photography & films",
    intro:
      "We are wedding photographers and filmmakers based in Rajasthan. In Pushkar we document destination weddings and family weddings around the holy lake, the old town and the desert at its edge.",
    heroImage: "/images/wedding-pheras.jpg",
    heroAlt: "A bride and groom smiling at each other beside the sacred fire",
    sections: [
      {
        heading: "A wedding in a pilgrimage town.",
        body: [
          "Pushkar is one of the oldest pilgrimage towns in India, built around a sacred lake ringed by ghats and temples, with the Aravalli hills on one side and the edge of the desert on the other. A wedding here carries that setting with it: bells from the ghats in the morning, a baraat through narrow old-town lanes at dusk, and the hills turning gold as the pheras begin.",
          "Because it is a holy town, Pushkar keeps vegetarian and alcohol-free traditions within the town itself, and many celebrations are held at resorts and farmhouses just outside it, a short drive from the lake. We plan coverage across both: the rituals in the family's chosen setting, and portraits by the ghats and in the hills where the light is best.",
        ],
      },
      {
        heading: "Photography and cinema, as one story.",
        body: [
          "Every Pushkar wedding we take on is covered across photography and wedding cinema. Photography keeps the marigolds, the mehendi and the faces in the crowd. Cinema keeps the dhol, the folk songs and the hush around the fire. Our wedding films are cinematic and usually three to five minutes long.",
          "Shatrunjay and Surbhi's three-day wedding on the edge of Pushkar's lake is one of our own stories, from the mayra and the baraat to the pheras, and it is a good picture of how we work here.",
        ],
      },
    ],
    settings: [
      { name: "Pushkar Lake & ghats", description: "Morning and evening portraits by the water, when the ghats are at their quietest." },
      { name: "The old town", description: "Narrow lanes and temple squares that make for a baraat with real streets behind it." },
      { name: "Aravalli hills", description: "Hilltop views over the lake and town, best in the last hour before sunset." },
      { name: "Desert-edge resorts", description: "Tented camps and farmhouses just outside town, where most multi-day celebrations are held." },
    ],
    faqs: [
      {
        q: "Do you photograph weddings in Pushkar?",
        a: "Yes. CULT. tales is based in Rajasthan, and Pushkar is one of the places we work. Shatrunjay and Surbhi's Pushkar wedding is in our stories.",
      },
      {
        q: "When is the best time for a wedding in Pushkar?",
        a: "Most couples choose the cooler months, roughly October to March. The Pushkar camel fair, held around the month of Kartik in October or November, fills the town, so check your dates against it if you want a quieter celebration.",
      },
      {
        q: "Can we have portraits by the lake?",
        a: "Yes. We plan portraits around the ghats at the quieter times of day and keep them respectful of the pilgrims and the temples around the water.",
      },
      {
        q: "Do you cover both photography and video?",
        a: "Yes. Every wedding is covered across photography and wedding cinema, delivered as one visual story. Our wedding films are usually three to five minutes long.",
      },
    ],
  },
  {
    slug: "udaipur",
    regionSlug: "rajasthan",
    name: "Udaipur",
    metaTitle: "Udaipur Wedding Photographer & Films",
    metaDescription:
      "Udaipur wedding photography and films by CULT. tales: lake palace and destination weddings on Lake Pichola and Fateh Sagar, covered across every ritual.",
    label: "Udaipur — wedding photography & films",
    intro:
      "We are wedding photographers and filmmakers based in Rajasthan. In Udaipur we document destination weddings in the City of Lakes, from boat arrivals on Lake Pichola to the pheras on a palace terrace.",
    heroImage: "/images/moment-4.jpg",
    heroAlt: "A couple at sunset on a palace terrace",
    heroFocus: "42% 50%",
    sections: [
      {
        heading: "A city built for weddings on the water.",
        body: [
          "Udaipur is the City of Lakes: Pichola, Fateh Sagar and the smaller lakes between them, framed by the Aravalli hills and lined with palaces, ghats and lake-facing heritage hotels. A wedding here is often planned around the water, with a boat arrival, a terrace ceremony at sunset, or a sangeet with the lights of the City Palace across the lake.",
          "Those settings reward planning. Light on the lake changes quickly in the evening, boats and terraces have their own timings, and the best views of a palace are often from across the water rather than inside it. We walk through the venue and the day's timings with you beforehand, so the photographs make the most of the place without slowing the celebration down.",
        ],
      },
      {
        heading: "Photography and cinema, as one story.",
        body: [
          "Every Udaipur wedding we take on is covered across photography and wedding cinema. Photography keeps the architecture, the jewellery and the faces. Cinema keeps the movement: the boat crossing the lake, the baraat at the palace gate, the dancing at the sangeet. Our wedding films are cinematic and usually three to five minutes long.",
          "Before the wedding we learn how your family keeps each ritual, from the pithi to the vidaai, and who needs to be in which frame, so that on the day we can stay quiet and let it happen.",
        ],
      },
    ],
    settings: [
      { name: "Lake Pichola", description: "Boat arrivals, island venues and the City Palace skyline at golden hour." },
      { name: "Fateh Sagar Lake", description: "A wider, quieter lake with the hills close behind, good for portraits." },
      { name: "Palace & heritage hotels", description: "Courtyards, jharokhas and terraces that need little added decoration." },
      { name: "Old city ghats", description: "Early-morning portraits along the water before the city wakes up." },
    ],
    faqs: [
      {
        q: "Do you photograph destination weddings in Udaipur?",
        a: "Yes. CULT. tales is based in Rajasthan, and we travel across the state for weddings, including Udaipur's lake and palace venues.",
      },
      {
        q: "Can you cover a boat arrival on the lake?",
        a: "Yes. We plan boat arrivals with you and your venue beforehand, including where we stand and when, so the moment is covered from the right angle.",
      },
      {
        q: "When is the best time for a wedding in Udaipur?",
        a: "Most couples choose the cooler months, roughly October to March. The lakes are usually fullest after the monsoon, which makes the autumn and winter months especially popular.",
      },
      {
        q: "Do you cover both photography and video?",
        a: "Yes. Every wedding is covered across photography and wedding cinema, delivered as one visual story. Our wedding films are usually three to five minutes long.",
      },
    ],
  },
  {
    slug: "jaipur",
    regionSlug: "rajasthan",
    name: "Jaipur",
    metaTitle: "Jaipur Wedding Photographer & Films",
    metaDescription:
      "Jaipur wedding photography and films by CULT. tales: palace, fort and family weddings in the Pink City, covered from the haldi to the vidaai.",
    label: "Jaipur — wedding photography & films",
    intro:
      "We are wedding photographers and filmmakers based in Rajasthan. In Jaipur we document palace weddings, destination weddings and large family weddings across the Pink City.",
    heroImage: "/images/moment-3.jpg",
    heroAlt: "Family showering a couple with rose petals",
    heroFocus: "52% 45%",
    sections: [
      {
        heading: "Palaces, forts and very big families.",
        body: [
          "Jaipur is the Pink City: a walled old town of terracotta facades, with Amber Fort, Nahargarh and the hills above it, and palaces across the city that now host weddings. It is also one of the easiest places in Rajasthan for guests to reach, which is why so many weddings here are large, with hundreds of family members and a baraat that takes over the street.",
          "Big weddings need coverage that keeps up without getting in the way. We plan with you who matters most in each ritual, which elders and cousins must not be missed, and where the quiet moments are likely to happen, so the photographs hold the whole family and not only the stage.",
        ],
      },
      {
        heading: "Photography and cinema, as one story.",
        body: [
          "Every Jaipur wedding we take on is covered across photography and wedding cinema. Photography keeps the detail: the mehendi, the safa, the jewellery handed down through a family. Cinema keeps the sound and movement of the baraat, the sangeet and the sacred fire. Our wedding films are cinematic and usually three to five minutes long.",
          "We also photograph the smaller days around a Jaipur wedding, from the pithi and mehendi to the mayra, so that the whole celebration is kept, not only the evening of the pheras.",
        ],
      },
    ],
    settings: [
      { name: "Palace hotels", description: "Lawns, courtyards and durbar halls built for celebrations on a grand scale." },
      { name: "Amber & Nahargarh", description: "Forts in the hills above the city, with sweeping views at dawn and dusk." },
      { name: "The walled old city", description: "Pink facades and bazaars for portraits with the city's colour behind them." },
      { name: "Farmhouse venues", description: "Open grounds on the city's edges for big baraats and long sangeet nights." },
    ],
    faqs: [
      {
        q: "Do you photograph weddings in Jaipur?",
        a: "Yes. CULT. tales is based in Rajasthan, and we travel across the state for weddings, including palace, fort and farmhouse venues in and around Jaipur.",
      },
      {
        q: "Can you cover a large wedding with hundreds of guests?",
        a: "Yes. We plan coverage with you before the day, including the family members and moments that matter most, so a big guest list does not mean anyone important is missed.",
      },
      {
        q: "When is the best time for a wedding in Jaipur?",
        a: "Most couples choose the cooler months, roughly October to March, because summer in Rajasthan is very hot. Tell us your dates and we will talk through the light and timings with you.",
      },
      {
        q: "Do you cover both photography and video?",
        a: "Yes. Every wedding is covered across photography and wedding cinema, delivered as one visual story. Our wedding films are usually three to five minutes long.",
      },
    ],
  },
  {
    slug: "jodhpur",
    regionSlug: "rajasthan",
    name: "Jodhpur",
    metaTitle: "Jodhpur Wedding Photographer & Films",
    metaDescription:
      "Jodhpur wedding photography and films by CULT. tales: Marwari, palace and destination weddings in the Blue City, below Mehrangarh Fort.",
    label: "Jodhpur — wedding photography & films",
    intro:
      "We are wedding photographers and filmmakers based in Rajasthan. In Jodhpur we document Marwari family weddings and destination weddings in the Blue City, under the walls of Mehrangarh.",
    heroImage: "/images/moment-5.jpg",
    heroAlt: "A bride in red smiling beside a window",
    heroFocus: "68% 40%",
    sections: [
      {
        heading: "The heart of Marwar.",
        body: [
          "Jodhpur sits at the heart of Marwar, below Mehrangarh Fort, with an old city of blue-washed houses spread out beneath it. The city has given its name to the Jodhpuri bandhgala many grooms wear, and Marwari weddings here keep their own traditions, colours and songs across several days.",
          "The city's settings range from the fort and Umaid Bhawan Palace to havelis, stepwells and the marble of Jaswant Thada. Each has its own light: the blue lanes are softest early in the day, the fort walls glow at sunset. We plan portraits and family moments around those hours rather than around a fixed schedule.",
        ],
      },
      {
        heading: "Photography and cinema, as one story.",
        body: [
          "Every Jodhpur wedding we take on is covered across photography and wedding cinema. Photography keeps the safa, the bandhgala, the gold and the family portraits. Cinema keeps the folk musicians, the dhol at the baraat and the quiet around the sacred fire. Our wedding films are cinematic and usually three to five minutes long.",
          "Before the wedding we learn how your family keeps each ritual, from the pithi to the vidaai, so that we are ready for the moments that matter to you.",
        ],
      },
    ],
    settings: [
      { name: "Mehrangarh Fort", description: "The fort above the city, with views across the blue old town." },
      { name: "Umaid Bhawan & palace hotels", description: "Art deco palaces and heritage hotels with lawns built for celebrations." },
      { name: "The blue old city", description: "Blue-washed lanes and doorways for portraits early in the day." },
      { name: "Jaswant Thada & stepwells", description: "White marble and carved sandstone for quieter couple portraits." },
    ],
    faqs: [
      {
        q: "Do you photograph weddings in Jodhpur?",
        a: "Yes. CULT. tales is based in Rajasthan, and we travel across the state for weddings, including Jodhpur's palaces, havelis and family homes.",
      },
      {
        q: "Do you photograph Marwari weddings?",
        a: "Yes. Before the day we learn the specific version of each ritual your family practises, so nothing important happens without us being ready for it.",
      },
      {
        q: "When is the best time for a wedding in Jodhpur?",
        a: "Most couples choose the cooler months, roughly October to March, because summer in western Rajasthan is very hot.",
      },
      {
        q: "Do you cover both photography and video?",
        a: "Yes. Every wedding is covered across photography and wedding cinema, delivered as one visual story. Our wedding films are usually three to five minutes long.",
      },
    ],
  },
  {
    slug: "jaisalmer",
    regionSlug: "rajasthan",
    name: "Jaisalmer",
    metaTitle: "Jaisalmer Wedding Photographer & Films",
    metaDescription:
      "Jaisalmer wedding photography and films by CULT. tales: desert weddings in the Golden City, from dune camps in the Thar to sandstone havelis and the fort.",
    label: "Jaisalmer — wedding photography & films",
    intro:
      "We are wedding photographers and filmmakers based in Rajasthan. In Jaisalmer we document desert weddings in the Golden City, from sandstone havelis to camps among the dunes of the Thar.",
    heroImage: "/images/moment-9.jpg",
    heroAlt: "A couple walking hand in hand among their guests",
    sections: [
      {
        heading: "A wedding in the desert.",
        body: [
          "Jaisalmer is the Golden City, built from yellow sandstone at the edge of the Thar. Its fort is one of the few in India that people still live inside, and its havelis are carved so finely they look like lace. Beyond the city, the dunes and desert camps make Jaisalmer one of the most distinctive wedding settings in the country.",
          "The desert asks for its own planning. Light is extraordinary at sunrise and sunset and harsh in between, evenings in winter can turn cold quickly, and wind and sand need care with every camera. We plan portraits around the golden hours, keep the ceremonies covered as the light falls, and stay ready for the bonfire and night-sky moments that only happen out in the dunes.",
        ],
      },
      {
        heading: "Photography and cinema, as one story.",
        body: [
          "Every Jaisalmer wedding we take on is covered across photography and wedding cinema. Photography keeps the sandstone, the textiles and the faces lit by fire. Cinema keeps the folk musicians, the wind across the dunes and the baraat arriving at the camp. Our wedding films are cinematic and usually three to five minutes long.",
          "Before the wedding we learn how your family keeps each ritual and which moments matter most, so the setting never takes over from the people in it.",
        ],
      },
    ],
    settings: [
      { name: "Sand dunes & desert camps", description: "Sunset ceremonies, bonfire evenings and wide open sky." },
      { name: "Jaisalmer Fort", description: "The golden living fort above the city, best in early or late light." },
      { name: "Sandstone havelis", description: "Carved facades and courtyards for detailed, intimate portraits." },
      { name: "Gadisar Lake", description: "Ghats and pavilions on the water for quiet morning portraits." },
    ],
    faqs: [
      {
        q: "Do you photograph desert weddings in Jaisalmer?",
        a: "Yes. CULT. tales is based in Rajasthan, and we travel across the state for weddings, including Jaisalmer's dune camps, havelis and heritage hotels.",
      },
      {
        q: "When is the best time for a wedding in Jaisalmer?",
        a: "Most couples choose the cooler months, roughly October to March. Days are pleasant then, but desert nights can get cold, so plan for warm layers for the evening functions.",
      },
      {
        q: "How do you protect equipment in the desert?",
        a: "We plan for wind and sand as part of the day, changing lenses and cards away from the open dunes and keeping spare equipment covered, so the coverage does not stop when the wind picks up.",
      },
      {
        q: "Do you cover both photography and video?",
        a: "Yes. Every wedding is covered across photography and wedding cinema, delivered as one visual story. Our wedding films are usually three to five minutes long.",
      },
    ],
  },
];

export function getAllCities(): City[] {
  return cities;
}

export function getCitiesForRegion(regionSlug: string): City[] {
  return cities.filter((c) => c.regionSlug === regionSlug);
}

export function getCity(regionSlug: string, citySlug: string): City | undefined {
  return cities.find((c) => c.regionSlug === regionSlug && c.slug === citySlug);
}

export function cityPath(city: City): string {
  return `/wedding-photography/${city.regionSlug}/${city.slug}`;
}

/** Stories whose location names this city, e.g. "Pushkar, Rajasthan". */
export function getStoriesForCity(city: City): Story[] {
  return getAllStories().filter((s) => s.location.split(",")[0].trim() === city.name);
}

/** The city page for a story's location, if one exists. */
export function getCityForStory(story: Story): City | undefined {
  const name = story.location.split(",")[0].trim();
  return cities.find((c) => c.name === name);
}
