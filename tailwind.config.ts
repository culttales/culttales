import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B", // primary dark background
        paper: "#F8F4ED", // warm ivory: the main background
        sand: "#EFE6D9", // deeper sand for alternating sections
        wine: "#4A1D22", // deep oxblood for closing sections
        bronze: "#8A6A3A", // gold for text and lines on light grounds
        gold: "#C9A96E", // champagne gold: hairlines, numerals, small labels
        bone: "#F4F1EA", // text on dark
        char: "#2B2420", // espresso text on light
        dust: "#A6A29A", // secondary / muted text, both modes
        line: {
          light: "rgba(201,169,110,0.22)", // gold hairline on dark
          dark: "rgba(138,106,58,0.28)", // bronze hairline on light
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 10.5vw, 10.5rem)", { lineHeight: "0.95", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(3.1rem, 7.2vw, 7rem)", { lineHeight: "1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(2.3rem, 4.4vw, 4.2rem)", { lineHeight: "1.08" }],
        "display-sm": ["clamp(1.75rem, 2.8vw, 2.5rem)", { lineHeight: "1.12" }],
      },
      letterSpacing: {
        label: "0.32em",
      },
      maxWidth: {
        editorial: "42rem",
        frame: "1680px",
      },
      transitionTimingFunction: {
        cinema: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        slow: "900ms",
        slower: "1400ms",
      },
    },
  },
  plugins: [],
};

export default config;
