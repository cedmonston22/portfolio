import type { Metadata } from "next";
import Experience from "@/components/experience";
import Skills from "@/components/skills";

export const metadata: Metadata = {
  title: "Experience",
  alternates: { canonical: "/experience" },
  openGraph: { title: "Experience | Cole Edmonston", url: "/experience" },
  twitter: { title: "Experience | Cole Edmonston" },
};

export default function ExperiencePage(): React.ReactElement {
  return (
    <>
      <Experience />
      <Skills />
    </>
  );
}
