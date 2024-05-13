"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { skills, frameWorks, tools } from "../util";

const Skills: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const textColor = resolvedTheme === "dark" ? "darkTheme" : "lightTheme";

  return (
    <div
      style={{
        background:
          resolvedTheme === "dark"
            ? `linear-gradient( to bottom, rgba(6,6,6,1), rgba(30,29,29,0.71)), url('/noise.svg') `
            : `linear-gradient(to top, rgba(82,80,80,0.71), rgba(208,208,212,1)), url('/noise.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className={`w-[80%] mx-auto text-${textColor} py-8`}>
        <h1 className="text:lg sm:text-xl md:text-2xl xl:text-4xl font-black text-center ">
          My Skills
        </h1>
        <div className="flex flex-wrap items-stretch gap-y-16 gap-x-8 sm:gap-x-14 md:gap-x-6 xl:gap-x-10 justify-between mt-10">
          {skills.map((skill, index) => (
            <Image
              className="w-[25%] sm:w-[25%] md:w-[30%] lg:w-[22%] xl:w-[13%] 2xl:w-[18%] animate-pulse"
              alt=""
              key={index}
              src={skill.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
