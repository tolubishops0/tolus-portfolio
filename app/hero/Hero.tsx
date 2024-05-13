"use client";
import React from "react";
import { useTheme } from "next-themes";
import Nav from "../nav/Nav";
import SubHero from "./SubHero";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  console.log(resolvedTheme);

  return (
    <div
      style={{
        backgroundImage:
          resolvedTheme === "dark"
            ? `linear-gradient(360deg, rgba(0,0,2,1), rgba(0,0,0,0.85)), url('/noise.svg')`
            : `linear-gradient(0deg, rgba(185,185,185,1), rgba(0,0,0,0)), url('/noise.svg')`,
        height: "100vh",
        width: "100%",
      }}>
      <Nav />
      <SubHero />
    </div>
  );
};

export default Hero;
