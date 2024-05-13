import twitter from "../public/icons8-twitter-30.png";
import linkedin from "../public/icons8-linkedin-50.png";
import git from "../public/icons8-github-64.png";

import html from "../public/html.png";
import css from "../public/css.png";
import js from "../public/js.png";
import ts from "../public/ts.png";
import scss from "../public/scss.png";
import gits from "../public/git.png";
import bits from "../public/BitBucket.png";
import mui from "../public/Material UI.png";
import tail from "../public/Tailwind CSS.png";
import next from "../public/Next.js.png";
import react from "../public/react.png";
import github from "../public/GitHub.png";

type NavContentType = {
  label: string;
  link: string;
};

type SocialIcons = {
  label: string;
  icon: any;
  link: string;
};

export const socialIcons: SocialIcons[] = [
  {
    label: "git",
    icon: git,
    link: "https://github.com/tolubishops0",
  },
  {
    label: "x",
    icon: twitter,
    link: "https://twitter.com/tolubishops",
  },
  {
    label: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/tolujoyo/",
  },
];

export const navContent: NavContentType[] = [
  {
    label: "About-Me",
    link: "",
  },
  {
    label: "Skills",
    link: "",
  },
  {
    label: "Projects",
    link: "",
  },
  {
    label: "Contact me",
    link: "",
  },
];

export const skills = [
  {
    label: "html",
    icon: html,
  },
  {
    label: "css",
    icon: css,
  },
  {
    label: "js",
    icon: js,
  },
  {
    label: "ts",
    icon: ts,
  },
  {
    label: "scss",
    icon: scss,
  },
];

export const frameWorks = [
  {
    label: "react",
    icon: react,
  },
  {
    label: "mui",
    icon: mui,
  },
  {
    label: "tailwind",
    icon: tail,
  },
  {
    label: "next",
    icon: next,
  },
];

export const tools = [
  {
    label: "git",
    icon: gits,
  },
  {
    label: "bit",
    icon: bits,
  },
  {
    label: "github",
    icon: github,
  },
];
