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
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 9.5vw, 9rem)", { lineHeight: "1", letterSpacing: "-0.015em" }],
        "display-lg": ["clamp(2.75rem, 6.5vw, 6rem)", { lineHeight: "1.04", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2rem, 3.8vw, 3.5rem)", { lineHeight: "1.12" }],
        "display-sm": ["clamp(1.5rem, 2.4vw, 2.1rem)", { lineHeight: "1.15" }],
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
