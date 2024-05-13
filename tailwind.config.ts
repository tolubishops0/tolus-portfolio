import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImageLight: `linear-gradient(to top, rgba(208,208,212,1), rgba(82,80,80,0.71)), url('/noise.svg')`,
        backgroundImageDark: `linear-gradient(to top, rgba(6,6,6,1), rgba(30,29,29,0.71)), url('/noise.svg')`,
      },
      // screens: {
      //   smallmobile: "640px",
      //   bigmobile: "768px",
      //   smalltab: "1024px",
      //   desktop: "1280px",
      //   lgdesktop: "1600px",
      // }
      colors: {
        lightTheme: "black",
        darkTheme: "white",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
export default config;
