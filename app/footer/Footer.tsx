"use client";

import React from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { ImMail3 } from "react-icons/im";

const Footer = () => {
  const date = new Date().getFullYear();
  const getSocialLinks = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <div className="bg-black text-white py-12 flex flex-col gap-y-8 ">
      <div className="flex flex-col gap-y-8 items-center justify-left w-[80%]  mx-auto ">
        <div className="flex flex-col gap-y-4  ">
          <h1 className="text-[#5fcbd3] text-sm md:text-base font-black ">
            Tolulope Okunjoyo
          </h1>
          <p className="text-xs md:text-sm xl:w-[50%]">
            Hi, I am a software developer currently specializing in building and
            managing dynamic, creative websites and web applications.
          </p>
        </div>
        <div className="flex justify-left items-start w-full gap-x-6 mx-auto ">
          {socialIcons.map((item, index) => (
            <span
              className=" cursor-pointer text-xs hover:scale-110 transition-transform duration-200"
              key={index}
              onClick={() => getSocialLinks(item.link)}>
              {item.icon}
            </span>
          ))}
        </div>
      </div>
      <hr className="border-t-1 border-[#5fcbd3] w-[100%]" />
      <div className="text-center text-xs lg:text-sm flex flex-col [80%] mx-auto">
        <p className="italic mb-1">{`\u00A9 copyright ${date}. All rights reserved. `}</p>
        <span>Built with Next.js by Tolu</span>
      </div>
    </div>
  );
};

export default Footer;
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
