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
        paper: "#F3F0E9", // primary light background
        bone: "#F4F1EA", // text on dark
        char: "#111111", // text on light
        dust: "#A6A29A", // secondary / muted text, both modes
        line: {
          light: "rgba(255,255,255,0.15)", // hairline on dark
          dark: "rgba(17,17,17,0.14)", // hairline on light
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.25rem, 9vw, 8.5rem)", { lineHeight: "0.98", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.9rem, 3.6vw, 3.25rem)", { lineHeight: "1.08" }],
        "display-sm": ["clamp(1.5rem, 2.4vw, 2.1rem)", { lineHeight: "1.15" }],
      },
      letterSpacing: {
        label: "0.14em",
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
