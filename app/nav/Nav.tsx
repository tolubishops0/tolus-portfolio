"use client";
import React, { useState, useEffect, useRef } from "react";
import { navContent } from "../util";
import { useTheme } from "next-themes";
import { useClickAway } from "react-use";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

type Component = {
  p: React.HTMLAttributes<HTMLParagraphElement>;
  div: React.HTMLAttributes<HTMLDivElement>;
};

const Nav: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const ref = useRef(null);
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const [activeTab, setActiveTab] = useState<String>("");
  useClickAway(ref, () => setShowMenu(false));

  const menuButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  console.log(showMenu, "sjow");

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
      <div className="z-50">
        <p className=" font-black font-[briem-hand] text-2xl md:text-4xl italic">
          Tolulope
        </p>
      </div>
      <div>
        <button onClick={menuButtonToggle} className="lg:hidden">
          {showMenu ? null : <RiMenu3Line size="2em" />}
        </button>
        <AnimatePresence mode="wait" initial={false}>
          {showMenu && (
            <>
              <motion.div
                {...framerSidebarBackground}
                aria-hidden="true"
                className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"></motion.div>
              <motion.div
                {...framerSidebarPanel}
                className="fixed top-0 bottom-0 left-0 z-40 w-1/2 h-screen border-r-2 border-zinc-800 bg-zinc-900"
                ref={ref}
                aria-label="Sidebar">
                <>
                  <ul
                    ref={ref}
                    className="w-[80%] flex flex-col items-center justify-start mx-auto gap-10 p-5 mt-28">
                    {navContent.map((item, index) => {
                      return (
                        <motion.li
                          {...framerText(index)}
                          onClick={(e) => handleTabClick(e, item.label)}
                          className=" py-1 w-full text-medium font-semibold cursor-pointer "
                          key={index}>
                          <a
                            className={`
                 ${activeTab === item.label ? `border-b-2 border-white` : ""}`}>
                            {item.label}
                          </a>
                        </motion.li>
                      );
                    })}
                  </ul>
                </>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
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

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.5 },
};

const framerSidebarPanel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.5 },
};

const framerText = (delay: number) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 1.5,
  },
};
