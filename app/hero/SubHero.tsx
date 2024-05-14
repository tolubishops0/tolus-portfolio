"use client";
import React, { useRef } from "react";
import { useTheme } from "next-themes";
import { socialIcons } from "../util";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import ThemeSwitch from "./ThemToggle";
import { useScroll, motion, Variants, useTransform } from "framer-motion";

const SubHero: React.FC = () => {
  const { resolvedTheme } = useTheme();
  console.log(resolvedTheme);
  const textColor = resolvedTheme === "dark" ? "darkTheme" : "lightTheme";

  const socialIcons = [
    {
      label: "git",
      icon: <BsGithub size={"1.5em"} />,
      link: "https://github.com/tolubishops0",
    },
    {
      label: "x",
      icon: <BsTwitterX size={"1.5em"} />,
      link: "https://twitter.com/tolubishops",
    },
    {
      label: "linkedin",
      icon: <BsLinkedin size={"1.5em"} />,
      link: "https://www.linkedin.com/in/tolujoyo/",
    },
  ];

  const getSocialLinks = (link: string) => {
    window.open(link, "_blank");
  };
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);


  return (
    <div
      // ref={ref}
      // style={{
      //   scale: scrollYProgress,
      //   opacity: scrollYProgress,
      // }}
      className="relative md:py-6 lg:py-8 flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-x-8 gap-y-4">
      <ThemeSwitch />
      <div className={`w-full pb-4 lg:pb-0 flex flex-col gap-y-4 xl:gap-y-6`}>
        <h1 className="text:lg sm:text-xl md:text-2xl xl:text-4xl font-black ">
          Tolulope Okunjoyo
        </h1>
        <h1 className="text-sm sm:text-base md:text-2xl xl:text-2xl font-bold italic ">
          Frontend Developer
        </h1>
        <p className="text-base md:text-xl xl:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fuga
          rerum eum laborum corporis dolores quo vitae aspernatur molestias
          tempora fugiat architecto voluptates ducimus assumenda.
        </p>
        <div className="flex gap-x-4">
          {socialIcons.map((item, index) => (
            <span
              className=" cursor-pointer"
              key={index}
              onClick={(e) => getSocialLinks(item.link)}>
              {item.icon}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[40%]">
        <img
          style={{ width: "100%", height: "100%" }}
          src={"/toluimg.png"}
          alt=""
        />
      </div>

      {/* <div className="animate-bounce w-10 absolute bottom-0 hidden lg:block">
        <img
          style={{ width: "100%", height: "100%" }}
          src={"/icons8-scroll-down-50.png"}
          alt=""
        />
      </div> */}

      {/* <div className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        --&gt;
      </div>
      ; */}
    </div>
  );
};

export default SubHero;
