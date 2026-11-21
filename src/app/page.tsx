import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Hobbies from "@/components/Hobbies";
import Comms from "@/components/Comms";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Achievements />
        <Hobbies />
        <Comms />
      </main>
    </>
  );
}
