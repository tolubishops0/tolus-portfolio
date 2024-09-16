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
import lendsqr from "../public/lendsqr.jpg";
import coa from "../public/coa.jpg";

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
    link: "skills",
  },
  {
    label: "Projects",
    link: "projects",
  },
  {
    label: "Resume",
    //update at same resume
    link: "https://drive.google.com/file/d/1k0zhy8TkAlNedSie21KcRlyJ9WZUsJ1O/view?usp=drivesdk",
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
    img: coa,
    label: "Tech Care",
    text: "A platform displaying users' heart history data using charts. Built with React, Tailwind CSS, and Chart libraries.",
    github: "https://github.com/tolubishops0/coa-trend",
    link: "https://coa-trend.netlify.app/",
  },
  {
    img: lendsqr,
    label: "LendSqr",
    text: "A user management dashboard with search and authentication. Built with TypeScript, Next.js, SCSS, and Local storage",
    github: "https://github.com/tolubishops0/lendsqr",
    link: "https://tolu-okunjoyo-lendsqr-fe-test.netlify.app/",
  },
  {
    img: anike,
    label: "Àníkẹ́ Sálúbàtà",
    text: "An e-commerce web application for selling handmade shoes. Built for my personal business using React, Tailwind CSS, MUI, Context API, Firebase and Local Storage.",
    github: "https://github.com/tolubishops0/anikesalubata",
    link: "https://harmonious-kheer-4c1df8.netlify.app/",
  },
  {
    img: spotify,
    label: "spotify",
    text: "A Spotify clone focusing on design and responsiveness. Built with React and Tailwind CSS.",
    github: "https://github.com/tolubishops0/mock-spotify",
    link: "https://sunny-spotify.netlify.app/",
  },
  {
    img: mhubs,
    label: "Movie Hubbs",
    text: "A movie listing app where users can browse a collection of movies, search for specific movies, and watch trailers. Built with React and Tailwind CSS",
    github: "https://github.com/tolubishops0/moviebase",
    link: "https://moviehubb-will.netlify.app/",
  },
  {
    img: scissor,
    label: "scissors",
    text: "A URL shortener application built using TypeScript, React, and Firebase. Allows users to shorten long URLs into more manageable links.",
    github: "https://github.com/tolubishops0/scissors",
    link: "https://whimsical-baklava-230b00.netlify.app/",
  },
  {
    img: ticket,
    label: "OverView",
    text: "A design-focused user interface for a ticketing project built with React, Material-UI, Tailwind CSS, and Recharts",
    github: "https://github.com/tolubishops0/ajeoba",
    link: "https://courageous-twilight-3ba4d7.netlify.app/",
  },
  {
    img: game,
    label: "Guess the number",
    text: "A simple and minimalist number guessing game built with JavaScript, HTML, and CSS",
    github: "https://github.com/tolubishops0/Guess-The-Number",
    link: "https://tolubishops0.github.io/Guess-The-Number/",
  },
];
