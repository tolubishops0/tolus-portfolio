"use client";
import React, { useRef, forwardRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { skills, tools } from "../../util";
import { useScroll, motion, useTransform } from "framer-motion";


const Skills = forwardRef(() => {
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
    <div>
      <motion.div
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        ref={ref}
        className={`w-full mx-auto text-${textColor} py-[3rem] pb-[2rem] xl:pt-[4rem] xl:pb-[4rem]`}>
        <h1 className=" text-[#5fcbd3] sm:text-xl md:text-2xl xl:text-4xl font-black text-center ">
          My Skills
        </h1>
        <div className="flex flex-wrap items-stretch gap-y-16 gap-x-8 sm:gap-x-14 md:gap-x-6 xl:gap-x-10 justify-between mt-10">
          {skills.map((skill, index) => (
            <Image
              className="w-[20%] sm:w-[25%] md:w-[30%] lg:w-[22%] xl:w-[13%] 2xl:w-[10%] animate-pulse"
              alt=""
              key={index}
              src={skill.icon}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
});

Skills.displayName = "Skills";

export default Skills;
