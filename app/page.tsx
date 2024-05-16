import Image from "next/image";
import Homepge from "./hero/HomePage/Homepge";
import Projects from "./hero/HomePage/Projects";
import Hero from "./hero/HomePage/HeroSecion";
import Skills from "./hero/HomePage/Skills";

const Home = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
