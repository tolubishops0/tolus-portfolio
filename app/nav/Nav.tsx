"use client";
import React, { useState } from "react";
import { navContent } from "../util";
import Image from "next/image";
import menu from "../Assest/icons8-menu-30.png";
import cancel from "../Assest/icons8-cancel-24.png";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

type Component = {
  p: React.HTMLAttributes<HTMLParagraphElement>;
  div: React.HTMLAttributes<HTMLDivElement>;
};

const Nav: React.FC = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);

  const menuButtonToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <main className="w-[80%] mx-auto h-32 flex justify-between items-center">
      <div>
        <p className="font-black font-[briem-hand] text-2xl md:text-4xl italic">
          Tolulope
        </p>
      </div>
      <div className="lg:hidden " onClick={menuButtonToggle}>
        {!showMenu ? (
          <span className="transition ease-in-out delay-150 duration-300">
            {" "}
            <RiMenu3Line size={"2em"} />
          </span>
        ) : (
          <span className="transition ease-in-out delay-150 duration-300">
            {" "}
            <RxCross2 size={"2em"} />
          </span>
        )}
      </div>
      {showMenu && (
        <div
          className={`z-10 absolute top-0 left-0 h-full w-1/2 flex flex-col justify-start pt-10 px-8 gap-y-5 transition-transform duration-300 ${
            showMenu ? "transform translate-x-0" : "transform -translate-x-full"
          } bg-slate-400`}>
          {navContent.map((item, index) => (
            <p
              className="text-gray py-1 w-full text-base font-semibold cursor-pointer "
              key={index}>
              <a>{item.label}</a>
            </p>
          ))}
        </div>
      )}
      <div className="hidden lg:flex gap-x-8 items-center justify-center">
        {navContent.map((item, index) => (
          <p
            className="text-gray text-base font-semibold cursor-pointer "
            key={index}>
            <a>{item.label}</a>
          </p>
        ))}
      </div>
    </main>
  );
};

export default Nav;
