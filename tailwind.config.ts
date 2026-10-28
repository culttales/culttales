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
        paper: "#F5F1E8", // warm ivory light background
        gold: "#C9A96E", // champagne gold: hairlines, numerals, small labels
        bone: "#F4F1EA", // text on dark
        char: "#111111", // text on light
        dust: "#A6A29A", // secondary / muted text, both modes
        line: {
          light: "rgba(201,169,110,0.22)", // gold hairline on dark
          dark: "rgba(160,128,70,0.3)", // gold hairline on light
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
