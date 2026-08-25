import type { MetadataRoute } from "next";

const siteUrl = "https://www.coleedmonston.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
  ];
}
