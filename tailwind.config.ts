import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blazr: {
          red: "#E8201A",
          orange: "#FF6B00",
          amber: "#F5A623",
          gold: "#FFD700",
          dark: "#0A0A0A",
          card: "#111111",
          border: "#1F1F1F",
          muted: "#6B6B6B",
          light: "#F5F5F5",
          charcoal: "#1A1A1A",
          glow: "#E8201A",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Bebas Neue", "Impact", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        shimmer: "shimmer 2s infinite",
        ticker: "ticker 30s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #E8201A, 0 0 10px #E8201A" },
          "100%": { boxShadow: "0 0 20px #E8201A, 0 0 40px #FF6B00" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backgroundImage: {
        "blazr-gradient": "linear-gradient(135deg, #E8201A 0%, #FF6B00 50%, #F5A623 100%)",
        "dark-gradient": "linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
        "card-gradient": "linear-gradient(145deg, #1A1A1A 0%, #111111 100%)",
        "glow-gradient": "radial-gradient(circle at center, #E8201A22 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
