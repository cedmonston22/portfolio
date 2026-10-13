import ProfileCard from "@/components/profile-card";
import Experience from "@/components/experience";
import Skills from "@/components/skills";

export default function Home(): React.ReactElement {
  return (
    <>
      <ProfileCard />
      <Experience />
      <Skills />
    </>
  );
}
