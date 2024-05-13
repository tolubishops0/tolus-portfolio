"use client";
import { useState, useEffect } from "react";
import sun from "../../public/sun.svg";
import moon from "../../public/moon.png";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();


  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  if (mounted)
    return (
      <Image
        style={{
          cursor: "pointer",
          position: "fixed",
          top: "50%",
          right: "0",
        }}
        src={resolvedTheme === "dark" ? sun : moon}
        width={24}
        height={24}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
        onClick={() =>
          resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
        }
      />
    );
}
