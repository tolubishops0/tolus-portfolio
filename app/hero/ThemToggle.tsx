"use client";
import { useState, useEffect } from "react";
import sun from "../../public/sun.svg";
import moon from "../../public/moon.png";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
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
          right: "1%",
          // background: "#5fcbd3",
          borderRadius: "50%",
          boxShadow: "0 0 10px 0 #5fcbd3",
          padding: ".5rem",
        }}
        src={resolvedTheme === "dark" ? sun : moon}
        width={30}
        height={30}
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
