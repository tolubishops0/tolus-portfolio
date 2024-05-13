"use client";
import React from "react";
import { useTheme } from "next-themes";
import Nav from "../nav/Nav";
import SubHero from "./SubHero";
import Skills from "../skills/Skills";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const textColor = resolvedTheme === "dark" ? "darkTheme" : "lightTheme";

  return (
    <div
      className={
        resolvedTheme === "dark"
          ? "bg-backgroundImageDark"
          : "bg-backgroundImageLight"
      }>
      <div
        style={{
          // height: "100vh",
          width: "80%",
          margin: "0 auto",
          color: `${textColor}`,
        }}>
        {" "}
        <Nav />
        <SubHero />
        {/* <Skills /> */}
      </div>
    </div>
  );
};

export default Hero;
