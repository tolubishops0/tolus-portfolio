"use client";
import React, { useState } from "react";
import { navContent } from "../util";
import { useTheme } from "next-themes";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

type Component = {
  p: React.HTMLAttributes<HTMLParagraphElement>;
  div: React.HTMLAttributes<HTMLDivElement>;
};

const Nav: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const [activeTab, setActiveTab] = useState<String>("");
  const textColor = resolvedTheme === "dark" ? "darkTheme" : "lightTheme";

  const menuButtonToggle = () => {
    setShowMenu(!showMenu);
  };
  const handleTabClick = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    tab: string
  ) => {
    e.preventDefault();
    setShowMenu(false);
    setActiveTab(tab);
  };
  return (
    <main className=" h-32 flex justify-between items-center">
      <div>
        <p className="font-black font-[briem-hand] text-2xl md:text-4xl italic">
          Tolulope
        </p>
      </div>
      <div className="lg:hidden" onClick={menuButtonToggle}>
        {showMenu ? <RxCross2 size="2em" /> : <RiMenu3Line size="2em" />}
      </div>
      {showMenu && (
        <div className={`sidebar ${showMenu ? "open" : ""}`}>
          <div className="w-3/4 flex flex-col gap-y-6 mt-20">
            {navContent.map((item, index) => (
              <p
                onClick={(e) => handleTabClick(e, item.label)}
                className=" py-1 w-full text-medium font-semibold cursor-pointer "
                key={index}>
                <a
                  className={`
                 ${
                   activeTab === item.label
                     ? `border-b-2 border-white`
                     : ""
                 }`}>
                  {item.label}
                </a>
              </p>
            ))}
          </div>
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
