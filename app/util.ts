import twitter from "../public/icons8-twitter-30.png";
import linkedin from "../public/icons8-linkedin-50.png";
import git from "../public/icons8-github-64.png";

import html from "../public/html.png";
import css from "../public/css.png";
import js from "../public/JavaScript.png";
import ts from "../public/ts.png";
import scss from "../public/scss.png";
import gits from "../public/git.png";
import bits from "../public/BitBucket.png";
import mui from "../public/Material UI.png";
import tail from "../public/Tailwind CSS.png";
import next from "../public/Next.js.png";
import react from "../public/react.png";
import github from "../public/GitHub.png";
// import github from "../public/Material UI.png";

import spacex from "../public/spacex.png";
import anike from "../public/anike.png";
import mhubs from "../public/mhub.png";
import scissor from "../public/scis.png";
import spotify from "../public/spotufy.png";
import game from "../public/game.png";
import ticket from "../public/ticket.png";

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
    label: "Skills",
    link: "scrollToSection(sectionRef1)",
  },
  {
    label: "Projects",
    link: "scrollToSection(sectionRef2)",
  },
  // {
  //   label: "Contact me",
  //   link: "#contactme",
  // },
  {
    label: "Resume",
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
  {
    label: "scss",
    icon: scss,
  },
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

export const project = [
  {
    img: anike,
    label: "anikesalubata",
    text: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip",
    github: "https://github.com/tolubishops0/anikesalubata",
    link: "https://harmonious-kheer-4c1df8.netlify.app/",
  },
  {
    img: spotify,
    label: "spotify",
    text: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip",
    github: "https://github.com/tolubishops0/mock-spotify",
    link: "https://sunny-spotify.netlify.app/",
  },
  {
    img: mhubs,
    label: "Movie Hubbs",
    text: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip",
    github: "https://github.com/tolubishops0/moviebase",
    link: "https://whimsical-baklava-230b00.netlify.app/",
  },
  {
    img: scissor,
    label: "scissors",
    text: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip",
    github: "https://github.com/tolubishops0/scissors",
    link: "https://moviehubb-will.netlify.app/",
  },
  {
    img: ticket,
    label: "OverView",
    text: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip",
    github: "https://github.com/tolubishops0/ajeoba",
    link: "https://courageous-twilight-3ba4d7.netlify.app/",
  },
  {
    img: game,
    label: "Guess the number",
    text: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip",
    github: "https://github.com/tolubishops0/Guess-The-Number",
    link: "https://tolubishops0.github.io/Guess-The-Number/",
  },
];
