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
    <div className="bg-black text-white pt-12 pb-6 flex flex-col gap-y-8 ">
      <div className="flex flex-col gap-y-8 items-center justify-center w-[80%] mx-auto ">
        <div className="flex justify-left items-start w-full gap-x-6 mx-auto ">
          {socialIcons.map((item, index) => (
            <span
              className=" cursor-pointer"
              key={index}
              onClick={() => getSocialLinks(item.link)}>
              {item.icon}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 ">
          <h1 className="text-[#5fcbd3] sm:text-xl md:text-2xl xl:text-4xl font-black ">
            Tolulope Okunjoyo
          </h1>
          <p className="text-xs  md:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            fuga rerum eum laborum corporis dolores quo vitae aspernatur
            molestias tempora fugiat architecto voluptates ducimus assumenda.
          </p>
        </div>
      </div>
      <hr className="border-t-1 border-[#5fcbd3] w-[100%]" />
      <div className="text-center text-xs lg:text-sm flex justify-between items-center w-[80%] mx-auto">
        <p className="italic mb-1">{`@${date} Tolulope Okunjoyo`}</p>
        <span> All rights reserved</span>
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
