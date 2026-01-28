import type { MetadataRoute } from "next";

const baseUrl = "https://fgbc.or.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/intro`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/newcomer`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
