import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F5EFE8",
        sand: "#E8DED2",
        warm: "#D8C7B5",
        gold: {
          DEFAULT: "#B8915A",
          light: "#C9A86A",
          deep: "#8F7040",
        },
        ink: "#4A4038",
        mute: "#8A817A",
        wax: {
          DEFAULT: "#6E2428",
          deep: "#4A1518",
          light: "#8B3338",
        },
        chat: {
          bg: "#0B141A",
          header: "#1F2C34",
          incoming: "#202C33",
          outgoing: "#005C4B",
          panel: "#111B21",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(74, 64, 56, 0.08)",
        lift: "0 8px 28px rgba(74, 64, 56, 0.10)",
        seal: "0 14px 32px rgba(74, 21, 24, 0.35)",
        phone: "0 30px 80px rgba(20, 16, 12, 0.28)",
      },
      letterSpacing: {
        luxury: "0.22em",
      },
      backgroundImage: {
        paper:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.45), transparent 36%), radial-gradient(circle at 80% 10%, rgba(216,199,181,0.28), transparent 32%), linear-gradient(180deg, #F7F2EB 0%, #F5EFE8 42%, #EFE6DA 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "-100% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        breathe: "breathe 4.5s ease-in-out infinite",
        shimmer: "shimmer 3.2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
