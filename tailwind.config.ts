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
        canvas: {
          DEFAULT: "#FAF9F6",
          subtle: "#F1F5F9",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F8FAFC",
        },
        slate: {
          ink: "#0F172A",
          body: "#334155",
          muted: "#64748B",
          line: "#E2E8F0",
        },
        brand: {
          DEFAULT: "#1D4ED8",
          light: "#3B82F6",
          deep: "#1E3A8A",
        },
        accent: {
          DEFAULT: "#EA580C",
          hover: "#C2410C",
          soft: "#FFEDD5",
        },
        success: {
          DEFAULT: "#059669",
          soft: "#D1FAE5",
        },
      },
      fontFamily: {
        display: ["var(--font-calistoga)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 2px 40px -12px rgba(15, 23, 42, 0.12)",
        float: "0 24px 80px -20px rgba(15, 23, 42, 0.18)",
        glass: "0 8px 32px rgba(15, 23, 42, 0.06)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.8)",
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
