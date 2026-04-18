import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import VisitorTracker from "@/components/VisitorTracker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohit Kumar Jalan — Full-Stack Engineer",
};

export default function Home() {
  return (
    <>
      <VisitorTracker />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
