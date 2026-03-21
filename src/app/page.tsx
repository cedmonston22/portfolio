import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Stats from "@/components/stats";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import AboutContact from "@/components/about-contact";
import Footer from "@/components/footer";

export default function Home(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Stats />
        <Skills />
        <Experience />
        <AboutContact />
      </main>
      <Footer />
    </>
  );
}
