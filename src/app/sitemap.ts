import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://coleedmonston.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...projectRoutes,
  ];
}
