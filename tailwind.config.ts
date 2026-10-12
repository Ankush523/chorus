import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0c0c0e",
          raised: "#141418",
          border: "#2a2a32",
        },
        paper: {
          DEFAULT: "#ece6dc",
          muted: "#9a948a",
        },
        brass: {
          DEFAULT: "#c4a35a",
          dim: "#8a7340",
          glow: "#e8d4a8",
        },
        signal: {
          DEFAULT: "#3d8b6e",
          dim: "#2a5c49",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-plex)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1.2s ease-out forwards",
        drift: "drift 20s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-2%, 1%) scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
