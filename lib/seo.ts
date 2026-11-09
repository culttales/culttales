import type { Metadata } from "next";

export const SITE_URL = "https://www.culttales.com";
export const SITE_NAME = "CULT. tales";

/**
 * Title, description, canonical and share tags for one page. Next merges
 * openGraph and twitter shallowly, so each page sends the full set rather
 * than inheriting pieces from the layout, including the default share
 * images, which a page's own openGraph would otherwise drop.
 */
export function pageMetadata({
  title,
  description,
  path,
  images,
}: {
  title: string;
  description: string;
  path: string;
  images?: string[];
}): Metadata {
  const shareTitle = `${title} — ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: images ?? ["/opengraph-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: images ?? ["/twitter-image.jpg"],
    },
  };
}

/** BreadcrumbList for a page, from Home down to the page itself. */
export function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** Serialises JSON-LD for a <script> tag without letting "</" close it early. */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
