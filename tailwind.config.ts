import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "rgb(var(--canvas) / <alpha-value>)",
          subtle: "rgb(var(--canvas-subtle) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          muted: "rgb(var(--surface-muted) / <alpha-value>)",
        },
        slate: {
          ink: "rgb(var(--text-ink) / <alpha-value>)",
          body: "rgb(var(--text-body) / <alpha-value>)",
          muted: "rgb(var(--text-muted) / <alpha-value>)",
          line: "rgb(var(--border-line) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "#1D4ED8",
          light: "#3B82F6",
          deep: "#1E3A8A",
        },
        accent: {
          DEFAULT: "#EA580C",
          hover: "#C2410C",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
        },
        success: {
          DEFAULT: "#059669",
          soft: "rgb(var(--success-soft) / <alpha-value>)",
        },
        danger: {
          DEFAULT: "rgb(var(--danger) / <alpha-value>)",
          soft: "rgb(var(--danger-soft) / <alpha-value>)",
        },
        band: {
          DEFAULT: "rgb(var(--band) / <alpha-value>)",
          muted: "rgb(var(--band-muted) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-calistoga)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        float: "var(--shadow-float)",
        glass: "var(--shadow-glass)",
        inset: "var(--shadow-inset)",
      },
      animation: {
        "pulse-soft": "pulseSoft 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
