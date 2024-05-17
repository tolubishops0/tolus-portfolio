"use client";
import React, { useRef } from "react";
import { useTheme } from "next-themes";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import ThemeSwitch from "../ThemToggle";
import { useScroll, useTransform } from "framer-motion";
import { ImMail3 } from "react-icons/im";

const SubHero: React.FC = () => {
  const { resolvedTheme } = useTheme();

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
    {
      label: "linkedin",
      icon: <ImMail3 size={"1.5em"} />,
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
    <div className="relative w-full pt-[5rem] pb-[2rem] lg:pt-[9rem] lg:pb-[5rem] flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-x-8 gap-y-8">
      <ThemeSwitch />
      <div className={`w-full pb-4 lg:pb-0 flex flex-col gap-y-4 xl:gap-y-6`}>
        <h1 className=" text:lg sm:text-xl md:text-2xl xl:text-4xl font-black ">
          Tolulope Okunjoyo
        </h1>
        <h1 className="text-[#5fcbd3] text-sm sm:text-base md:text-2xl xl:text-2xl font-bold italic ">
          Frontend Developer
        </h1>
        <div>
          <p className="text-base md:text-base ">
            Hi, I am a software developer currently specializing in building and
            managing dynamic, creative websites and web applications. I focus on
            developing intuitive user experiences that evolve and improve based
            on user metrics. While my current focus is on web development, I am
            also interested in expanding into mobile app development. I am
            constantly building and experimenting with new projects to enhance
            my skills and push the boundaries of development.
          </p>
          <button
            onClick={(e) =>
              getSocialLinks(
                "https://drive.google.com/file/d/1P1BcKNYJ1vT70LuKWF551izRfGOABQLX/view?usp=drivesdk"
              )
            }
            className="mt-2 flex items-end py-1 font-bold text-base text-[#5fcbd3]">
            View Resume
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              {" "}
              --&gt;
            </span>
          </button>
        </div>
        <div className="flex gap-x-4">
          {socialIcons.map((item, index) => (
            <span
              className=" cursor-pointer text-sm hover:scale-110 transition-transform duration-200"
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
