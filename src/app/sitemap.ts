import type { MetadataRoute } from "next";

const siteUrl = "https://www.coleedmonston.me";

const routes = ["", "/projects", "/resume"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
