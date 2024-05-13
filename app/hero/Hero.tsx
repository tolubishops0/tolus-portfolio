"use client";
import React from "react";
import { useTheme } from "next-themes";
import Nav from "../nav/Nav";
import SubHero from "./SubHero";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  console.log(resolvedTheme);
  const textColor = resolvedTheme === "dark" ? "darkTheme" : "lightTheme";

  return (
    <div
      className={
        resolvedTheme === "dark"
          ? "bg-backgroundImageDark"
          : "bg-backgroundImageLight"
      }
      style={{
        height: "100vh",
        width: "100%",
        color: `${textColor}`,
      }}>
      <Nav />
      <SubHero />
    </div>
  );
};

export default Hero;
