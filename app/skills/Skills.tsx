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
      <div
        // className="h-[80vh] md:h-[100vh]"
        style={{
          width: "80%",
          color: `${textColor}`,
          margin: "0 auto",
          // height: "80vh",
        }}>
        <h1 className="text:lg sm:text-xl md:text-2xl xl:text-4xl font-black text-center pt-3 md:pt-8 ">
          My Skills
        </h1>
        <div className="flex flex-wrap gap-y-16 gap-x-2 justify-between mt-8">
          {skills.map((skill, index) => (
            <Image
              className="w-[25%] md:w-[30%] lg:w-[15%] animate-pulse"
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
