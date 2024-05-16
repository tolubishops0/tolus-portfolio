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
    <div className="bg-black text-white">
      <div className="flex flex-col gap-y-4 items-center justify-center h-[30vh] w-[80%">
        <div className="flex items-center justify-center gap-x-6">
          {socialIcons.map((item, index) => (
            <span
              className=" cursor-pointer"
              key={index}
              onClick={() => getSocialLinks(item.link)}>
              {item.icon}
            </span>
          ))}
        </div>
        <div className="text-center text-sm">
          <p className="italic mb-1">{`@${date} Tolulope Okunjoyo`}</p>
          <span> All rights reserved</span>
        </div>
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
