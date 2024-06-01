import { plugin } from "postcss";
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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fall: {
          '0%': {transform: 'translate(0%,-150%) skewX(0deg)'},
          '50%': {transform: 'translate(0%,0%) skewX(-10deg)'},
          '100%': {transform: 'translate(0%,150%) skewX(0deg)'},
        },
      },
      animation: {
        fall: 'fall 3s ease infinite'
      }
    },
  },
  plugins: [
  ],
};
export default config;
