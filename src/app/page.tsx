import Navbar from "@/components/navbar";
import ProfileCard from "@/components/profile-card";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

export default function Home(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main id="main">
        <ProfileCard />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
