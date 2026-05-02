import type { MetadataRoute } from "next";

const baseUrl = "https://fgbc.church";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const publicRoutes = ["", "/intro", "/newcomer", "/bulletins", "/sharing-worship", "/pastoral-letter"] as const;

  return publicRoutes.map((path) => ({
    url: path ? `${baseUrl}${path}` : baseUrl,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
