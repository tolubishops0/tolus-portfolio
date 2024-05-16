"use client";
import React, { useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { skills, tools } from "../../util";
import { useScroll, motion, useTransform } from "framer-motion";

const Skills: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const textColor = resolvedTheme === "dark" ? "darkTheme" : "lightTheme";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "center"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <div
    // id="skills"
    // style={{
    //   background:
    //     resolvedTheme === "dark"
    //       ? `linear-gradient( to bottom, rgba(6,6,6,1), rgba(30,29,29,0.71)), url('/noise.svg') `
    //       : `linear-gradient(to top, rgba(82,80,80,0.71), rgba(208,208,212,1)), url('/noise.svg')`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <motion.div
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        ref={ref}
        className={`w-full mx-auto text-${textColor} py-8`}>
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
      </motion.div>
    </div>
  );
};

export default Skills;
