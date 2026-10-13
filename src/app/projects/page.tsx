import type { Metadata } from "next";
import Projects from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects",
  alternates: { canonical: "/projects" },
  openGraph: { title: "Projects | Cole Edmonston", url: "/projects" },
  twitter: { title: "Projects | Cole Edmonston" },
};

export default function ProjectsPage(): React.ReactElement {
  return <Projects />;
}
