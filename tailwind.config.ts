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
        ink: "#0B0B0B", // near black, kept for the private client page
        obsidian: "#161412", // warm black: dark sections and headings
        paper: "#F7F4EF", // alabaster: the main background
        sand: "#EFEAE2", // warm stone for alternating sections
        stone: "#E4DDD3", // deeper stone for chips and hover states
        wine: "#4A1D22",
        bronze: {
          DEFAULT: "#9E7B56", // accent for labels, italics and buttons
          deep: "#836341", // button hover
        },
        gold: "#C9A96E", // lighter accent on dark grounds
        bone: "#F4F1EA", // text on dark
        char: "#2B2420", // body text on light
        muted: "#6E675F", // secondary text and metadata
        dust: "#A6A29A",
        line: {
          light: "rgba(247,244,239,0.12)", // hairline on dark
          dark: "rgba(22,20,18,0.1)", // hairline on light
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 10.5vw, 10.5rem)", { lineHeight: "0.95", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(3.1rem, 7.2vw, 7rem)", { lineHeight: "1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(2.3rem, 4.4vw, 4.2rem)", { lineHeight: "1.08" }],
        "display-sm": ["clamp(1.75rem, 2.8vw, 2.5rem)", { lineHeight: "1.12" }],
      },
      letterSpacing: {
        label: "0.32em",
        editorial: "0.22em",
      },
      maxWidth: {
        editorial: "42rem",
        frame: "1680px",
        site: "1440px",
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
