"use client";
import React, { useRef, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { project } from "../../util";
import { useScroll, motion, Variants, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const Projects = () => {
  const { resolvedTheme } = useTheme();
  const [isFlippedIndex, setIsFlippedIndex] = useState<number>(-1);
  const [isAnimated, setIsAnimated] = useState<Boolean>(false);
  const textColor = resolvedTheme === "dark" ? "darkTheme" : "lightTheme";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "center"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const handleFlip = (index: number) => {
    if (!isAnimated) {
      setIsFlippedIndex(index);
      setIsAnimated(true);
    }
  };
  const handleLinks = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <motion.div
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        ref={ref}>
        <div
          className={`w-full mx-auto text-${textColor} py-[2rem]  lg:py-[5rem]`}>
          <h1 className="text-[#5fcbd3] sm:text-xl md:text-2xl xl:text-4xl font-black text-center">
            Projects
          </h1>
          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-between gap-x-5 md:gap-x-2 gap-y-10 w-full h-full mx-auto mt-10">
            {project.map((item, index) => (
              <div
                key={index}
                className="flip-card w-full cursor-pointer h-[10rem] md:w-[48%] xl:w-[30%] rounded"
                onClick={() => handleFlip(index)}
                onMouseEnter={() => handleFlip(index)}
                onMouseLeave={() => setIsAnimated(false)}>
                <motion.div
                  initial={false}
                  animate={{ rotateY: isFlippedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.6, animationDirection: "normal" }}
                  onAnimationComplete={() => setIsAnimated(false)}
                  className="flip-card-inner h-full">
                  <div className="flip-card-front w-full h-full border-2 rounded">
                    <Image
                      alt=""
                      src={item.img}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div className="flip-card-back w-full h-full flex items-center ">
                    <div className="text-sm flex flex-col mx-auto w-[90%] gap-y-2 ">
                      <p className="text-[#5fcbd3] italic font-semibold text-sm text-center uppercase">
                        {item.label}
                      </p>
                      <p className="text-sm">{item.text}</p>
                      <div className="text-[#5fcbd3] flex items-center justify-between w-full">
                        <button
                          onClick={() => handleLinks(item.github)}
                          className="flex items-center py-1 text-sm italic">
                          Go to github{" "}
                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                          </span>
                        </button>
                        <button
                          onClick={() => handleLinks(item.link)}
                          className="flex items-end py-1  text-sm italic">
                          View live{" "}
                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            {" "}
                            -&gt;
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;

const framerText = (delay: number) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};
