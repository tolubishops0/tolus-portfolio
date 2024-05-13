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
        style={{
          width: "80%",
          color: `${textColor}`,
          margin: "0 auto",
          height: "80vh",
        }}>
        <h1 className="text:lg sm:text-xl md:text-2xl xl:text-4xl font-black text-center py-6 ">
          My Skills
        </h1>
        <div className="flex flex-wrap gap-8">
          {skills.map((skill, index) => (
            <Image className="w-[25%]" alt="" key={index} src={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
