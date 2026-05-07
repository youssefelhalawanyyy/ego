import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a3c2a",
          50: "#f0f7f2",
          100: "#dceee1",
          200: "#baddc5",
          300: "#8cc4a1",
          400: "#5da67a",
          500: "#3d8a5e",
          600: "#2d6e49",
          700: "#1a3c2a",
          800: "#142e20",
          900: "#0f2319",
        },
        gold: {
          DEFAULT: "#c9a84c",
          50: "#fdf9ef",
          100: "#f9f0d5",
          200: "#f2dfa8",
          300: "#e9c96f",
          400: "#c9a84c",
          500: "#b8932e",
          600: "#a17825",
          700: "#855c20",
          800: "#6e4a20",
          900: "#5c3d1e",
        },
        industrial: {
          dark: "#0a1f14",
          steel: "#4a5568",
          light: "#f7f8fa",
          border: "#e2e6ea",
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marqueeReverse 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "counter-up": "counterUp 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(201, 168, 76, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(201, 168, 76, 0.4)" },
        },
      },
      backgroundImage: {
        "gradient-industrial":
          "linear-gradient(135deg, #0a1f14 0%, #1a3c2a 50%, #0a1f14 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #c9a84c 0%, #e9c96f 50%, #c9a84c 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
