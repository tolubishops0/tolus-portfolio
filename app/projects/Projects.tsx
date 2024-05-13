"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Projects = () => {
  const { resolvedTheme } = useTheme();
  const textColor = resolvedTheme === "dark" ? "darkTheme" : "lightTheme";

  return (
    <div
      style={{
        background:
          resolvedTheme === "dark"
            ? `linear-gradient( to bottom, rgba(30,29,29,0.71), rgba(6,6,6,1)), url('/noise.svg') `
            : `linear-gradient(to top, rgba(208,208,212,1), rgba(82,80,80,0.71)), url('/noise.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div>
        <div className={`w-[80%] mx-auto text-${textColor} py-6 lg:py-8`}>
          <h1 className="text:lg sm:text-xl md:text-2xl xl:text-4xl font-black text-center ">
            My Projects
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
