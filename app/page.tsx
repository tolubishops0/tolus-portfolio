"use client";
import React, { useState, useMemo, forwardRef, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Projects from "./hero/HomePage/Projects";
import Hero from "./hero/HomePage/HeroSecion";
import Skills from "./hero/HomePage/Skills";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import particles from "./partcles";

import { loadSlim } from "@tsparticles/slim";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

const Home = () => {
  const { resolvedTheme } = useTheme();
  const [init, setInit] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: resolvedTheme === "dark" ? "#5fcbd3" : "#5fcbd3",
        },
        links: {
          color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
          distance: 150,
          enable: true,
          opacity: 0,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div className="">
          <Nav ref={navRef} />
          <div className="w-[80%] mx-auto ">
              <Hero />
            <div className="" id="skills">
              <Skills />
            </div>
            <div id="projects">
              <Projects />
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
  return <></>;
};

export default Home;
