"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { project } from "../util";

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
        <div className={`w-[80%] mx-auto text-${textColor} py-8`}>
          <h1 className="text:lg sm:text-xl md:text-2xl xl:text-4xl font-black text-center ">
            My Projects
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-3 justify-center w-full mx-auto">
            {project.map((item, index) => (
              <div key={index} className="bg-red-500 ">
                <div className="p-2 mx-auto flex items-center justify-center ">
                  <Image
                    alt=""
                    src={item.img}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
