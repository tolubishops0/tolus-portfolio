import type { Config } from "tailwindcss";
import { useTheme } from "next-themes";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // screens: {
      //   smallmobile: "640px",
      //   bigmobile: "768px",
      //   smalltab: "1024px",
      //   desktop: "1280px",
      //   lgdesktop: "1600px",
      // },
      colors: {
        gray: "white",
        black: "black",
      },
      fontFamily: {

      },
    },
  },
  plugins: [],
};
export default config;
