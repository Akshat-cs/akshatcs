/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#7928CA",
        accent: "#00FFFF",
        dark: "#121212",
        light: "#f5f5f5",
        web3: {
          blue: "#3498db",
          purple: "#8e44ad",
          cyan: "#00FFFF",
          neon: "#39FF14",
          pink: "#FF00FF",
          dark: "#0F0F23",
          light: "#E6F0FF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "web3-grid": "url('/images/grid-bg.svg')",
        "web3-gradient": "linear-gradient(to right, #7928CA, #00FFFF)",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        glow: {
          "0%": { textShadow: "0 0 10px rgba(0, 255, 255, 0.5)" },
          "100%": {
            textShadow:
              "0 0 20px rgba(0, 255, 255, 0.9), 0 0 30px rgba(0, 255, 255, 0.7)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
