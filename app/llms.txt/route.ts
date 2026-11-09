import { getAllRegions } from "@/lib/regions";
import { SITE_URL } from "@/lib/seo";
import { contact } from "@/lib/site";
import { getAllStories } from "@/lib/stories";

// A plain-text guide to the site for AI assistants (llmstxt.org), built
// from the same data as the pages so new stories appear here too.
export const dynamic = "force-static";

export function GET() {
  const regions = getAllRegions().map(
    (r) => `- [${r.metaTitle}](${SITE_URL}/wedding-photography/${r.slug}): ${r.metaDescription}`
  );
  const stories = getAllStories().map(
    (s) => `- [${s.coupleNames} — ${s.headline}](${SITE_URL}/stories/${s.slug}): ${s.excerpt}`
  );

  const body = `# CULT. tales

> CULT. tales is a Pan-Indian wedding photography and wedding cinema team based in Kerala and Rajasthan, India. We document weddings in their most authentic form, across photography, cinematic wedding films and cultural documentation, and travel across India and internationally for Pan-Indian and diaspora weddings.

- Services: wedding photography, wedding cinematography (films usually three to five minutes long), engagement photography, cultural documentation of rituals and traditions.
- Based in: Kerala and Rajasthan, India. Travels across every region of India and abroad.
- Contact: ${contact.email}, ${contact.phone}. Enquiries are answered within 48 hours.

## Main pages

- [Home](${SITE_URL}/): Pan-Indian wedding photography and films.
- [Wedding stories](${SITE_URL}/stories): real weddings from across India.
- [Wedding films](${SITE_URL}/films): cinematic wedding films.
- [About](${SITE_URL}/about): who we are and how we work.
- [Contact](${SITE_URL}/contact): enquiry form and frequently asked questions.

## Wedding photography by region

${regions.join("\n")}

## Wedding stories

${stories.join("\n")}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
