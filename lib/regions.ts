import type { Question } from "@/components/FAQ";
import type { Ritual } from "@/lib/stories";

export type Region = {
  slug: string;
  /** Matches Story["region"], so the region page can list its stories. */
  name: string;
  metaTitle: string;
  metaDescription: string;
  label: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  /** Short paragraph shown on each story from this region. */
  storyNote: string;
  sections: { heading: string; body: string[] }[];
  rituals: Ritual[];
  places: string[];
  faqs: Question[];
};

// Service pages for the two states the studio is based in. The text only
// states what the site already says about the studio (based here, travels
// across India, photography and cinema, three-to-five-minute films) plus
// general background on each region's wedding traditions.
export const regions: Region[] = [
  {
    slug: "kerala",
    name: "Kerala",
    metaTitle: "Kerala Wedding Photography & Films",
    metaDescription:
      "Kerala wedding photography and cinematic wedding films by CULT. tales, a Kerala-based team documenting Hindu, Christian and Muslim weddings across the state.",
    label: "Kerala — wedding photography & cinema",
    intro:
      "We are a wedding photography and wedding cinema team based in Kerala. We document weddings across the state the way families keep them: the lamp, the muhurtham, the feast and everyone in between.",
    heroImage: "/images/arun-prabishna/doorway.jpg",
    heroAlt: "Arun and Prabishna in the doorway of a traditional tiled-roof Kerala home",
    storyNote:
      "Kerala weddings are often brief and exact: a ceremony timed to the minute of the muhurtham, a brass lamp lit before the first guest arrives, a sadya served on banana leaf. We are based in Kerala, so we plan our coverage around those minutes rather than around a schedule.",
    sections: [
      {
        heading: "Kerala weddings, as families keep them.",
        body: [
          "A Kerala wedding rarely announces itself with spectacle. Much of its weight sits in small, exact gestures: a nilavilakku lit at the start, a thali tied at the precise minute the family's astrologer has chosen, a mother adjusting the fold of a set-saree before her daughter steps out. Miss those few seconds and the story of the day is missing its centre.",
          "Kerala is also many weddings in one. Hindu ceremonies in temples and family homes, Christian weddings in churches across central Kerala, and Muslim weddings in the Malabar tradition each carry their own rituals, their own clothes and their own rhythm. We spend time with each family before the day to understand the specific version of each ritual they practise, so the photographs and the film feel like theirs and nobody else's.",
        ],
      },
      {
        heading: "Photography and cinema, as one story.",
        body: [
          "Every Kerala wedding we take on is covered across photography and wedding cinema. Photography holds the detail: the jasmine in the hair, the gold, the hands. Cinema carries the feeling: the nadaswaram, the laughter at the sadya, the quiet before the thali. Our wedding films are cinematic and usually three to five minutes long, built around the emotional arc of your day.",
          "We also photograph engagements and the smaller celebrations around a wedding. Traditional tiled-roof homes, temple courtyards, backwater light and tropical gardens give Kerala a look of its own, and we work with that light rather than against it.",
        ],
      },
    ],
    rituals: [
      { name: "Nilavilakku", description: "The tall brass lamp lit before the ceremony begins, a sign of light and auspicious beginnings in Kerala homes." },
      { name: "Thalikettu", description: "The groom ties the thali around the bride's neck at the chosen muhurtham, the central moment of a Kerala Hindu wedding." },
      { name: "Pudava Kodukkal", description: "The groom offers the bride a new pudava, a garment that marks her welcome into his family." },
      { name: "Sadya", description: "The vegetarian feast served on banana leaf after the ceremony, often the moment the whole family finally sits down together." },
      { name: "Minnu & Manthrakodi", description: "At a Kerala Christian wedding the groom ties the minnu pendant and drapes the bride in the manthrakodi saree." },
      { name: "Mylanchi & Nikah", description: "In the Malabar Muslim tradition, the mylanchi (henna) evening comes before the nikah, the marriage contract and blessing." },
    ],
    places: ["Kochi", "Thrissur", "Guruvayur", "Kozhikode", "Thiruvananthapuram", "Alappuzha", "Kottayam", "Kannur"],
    faqs: [
      {
        q: "Are you based in Kerala?",
        a: "Yes. CULT. tales is based in Kerala and Rajasthan, and we travel across Kerala for weddings, from Thiruvananthapuram to Kannur.",
      },
      {
        q: "Do you photograph Hindu, Christian and Muslim weddings in Kerala?",
        a: "We document weddings across Kerala's communities. Before the day we learn the specific version of each ritual your family practises, so nothing important happens without us being ready for it.",
      },
      {
        q: "Do you cover both photography and video?",
        a: "Yes. Every wedding is covered across photography and wedding cinema, delivered as one visual story. Our wedding films are usually three to five minutes long.",
      },
      {
        q: "Do you photograph engagements in Kerala?",
        a: "Yes. We photograph engagements and the smaller celebrations around a wedding as well as the wedding day itself.",
      },
      {
        q: "How do we book a Kerala wedding?",
        a: "Tell us about your wedding through the enquiry form. We reply within 48 hours to talk through your dates, your plans and your story.",
      },
    ],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    metaTitle: "Rajasthan Destination Wedding Photography",
    metaDescription:
      "Destination wedding photography and films in Rajasthan by CULT. tales: Pushkar, Udaipur, Jaipur, Jodhpur and Jaisalmer weddings, covered across every ritual.",
    label: "Rajasthan — destination wedding photography",
    intro:
      "We are a wedding photography and wedding cinema team based in Rajasthan and Kerala. In Rajasthan we document destination weddings and family weddings across every day of the celebration, from the first haldi to the vidaai.",
    heroImage: "/images/wedding-canopy.jpg",
    heroAlt: "Shatrunjay and Surbhi in wedding garlands, holding hands beneath a red wedding canopy",
    storyNote:
      "Rajasthani weddings tend to unfold over several days, each with its own ritual, its own colour and its own crowd. We are based in Rajasthan, so we plan our coverage around every day of the celebration, not only the pheras.",
    sections: [
      {
        heading: "A wedding told across several days.",
        body: [
          "A Rajasthani wedding is rarely one day. The pithi turns everyone yellow, the mehendi and sangeet fill an evening with music, the bride's maternal family arrives for the mayra, and the baraat winds through the streets before the pheras begin. Each day has a different light and a different story, and we treat each one as a chapter.",
          "Rajasthan is also one of India's most loved wedding destinations. Palaces, havelis, lakes and desert camps give every celebration a setting that deserves to be seen properly, so we photograph the place as carefully as the people: the courtyards, the jharokhas, the golden hour over the dunes.",
        ],
      },
      {
        heading: "Photography and cinema, as one story.",
        body: [
          "Every wedding we take on in Rajasthan is covered across photography and wedding cinema. Photography holds the detail: the mehendi, the safa, the jewellery handed down through a family. Cinema carries the sound: the dhol at the baraat, the folk songs at the sangeet, the hush around the sacred fire. Our wedding films are cinematic and usually three to five minutes long.",
          "Before the wedding we learn how your family keeps each ritual, which of them matter most to you and who needs to be in which frame, so that on the day we can stay quiet and let it happen.",
        ],
      },
    ],
    rituals: [
      { name: "Pithi", description: "The Rajasthani haldi: turmeric paste applied to the bride and groom by family, usually the first ritual of the celebration." },
      { name: "Mehendi & Sangeet", description: "An evening of henna, music and dance, often the most relaxed and joyful day of the wedding." },
      { name: "Mayra", description: "The bride's maternal family arrives bearing gifts, a Rajasthani tradition of blessing before the ceremony." },
      { name: "Baraat", description: "The groom's processional entry, accompanied by drummers and dancing family through the streets." },
      { name: "Pheras", description: "Seven vows taken around the sacred fire, each circle marking a promise for the marriage ahead." },
      { name: "Vidaai", description: "The bride's farewell to her family's home, one of the most emotional moments of the whole celebration." },
    ],
    places: ["Pushkar", "Udaipur", "Jaipur", "Jodhpur", "Jaisalmer", "Ajmer"],
    faqs: [
      {
        q: "Are you based in Rajasthan?",
        a: "Yes. CULT. tales is based in Rajasthan and Kerala, and we travel across Rajasthan for weddings, from Pushkar and Jaipur to Udaipur, Jodhpur and Jaisalmer.",
      },
      {
        q: "Do you cover multi-day destination weddings?",
        a: "Yes. Most Rajasthani weddings run over several days, and we plan our coverage around every ritual you want kept, not only the wedding day.",
      },
      {
        q: "Do you cover both photography and video?",
        a: "Yes. Every wedding is covered across photography and wedding cinema, delivered as one visual story. Our wedding films are usually three to five minutes long.",
      },
      {
        q: "When do most couples get married in Rajasthan?",
        a: "Most couples choose the cooler months, roughly October to March, because summer in Rajasthan is very hot. Tell us your dates and we will talk through the light and timings with you.",
      },
      {
        q: "How do we book a Rajasthan wedding?",
        a: "Tell us about your wedding through the enquiry form. We reply within 48 hours to talk through your dates, your plans and your story.",
      },
    ],
  },
];

export function getAllRegions(): Region[] {
  return regions;
}

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getRegionByName(name: string): Region | undefined {
  return regions.find((r) => r.name === name);
}
