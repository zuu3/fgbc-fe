import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin"],
      },
    ],
    host: "https://fgbc.church",
    sitemap: "https://fgbc.church/sitemap.xml",
  };
}
