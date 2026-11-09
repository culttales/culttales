import type { MetadataRoute } from "next";
import { getAllStories } from "@/lib/stories";
import { getAllJournalPosts } from "@/lib/journal";
import { getAllRegions } from "@/lib/regions";
import { SITE_URL } from "@/lib/seo";
import { SHOW_JOURNAL } from "@/lib/site";

// No lastModified: the pages carry no real edit dates, and stamping every
// URL with the build time teaches Google to ignore the field.
export default function sitemap(): MetadataRoute.Sitemap {
  const stories = getAllStories().map((story) => ({
    url: `${SITE_URL}/stories/${story.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const regions = getAllRegions().map((region) => ({
    url: `${SITE_URL}/wedding-photography/${region.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const journal = (SHOW_JOURNAL ? getAllJournalPosts() : []).map((post) => ({
    url: `${SITE_URL}/journal/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...regions,
    {
      url: `${SITE_URL}/stories`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/films`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...(SHOW_JOURNAL
      ? [
          {
            url: `${SITE_URL}/journal`,
            changeFrequency: "weekly" as const,
            priority: 0.8,
          },
        ]
      : []),
    {
      url: `${SITE_URL}/about`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    ...stories,
    ...journal,
  ];
}
