import Image from "next/image";
import Hero from "./hero/Hero";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <main>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Hero  />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
