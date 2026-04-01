import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        flame: "#E8450A",
        ice: "#2BBFFF",
        "bg-dark": "#0A0A0A",
        surface: "#141414",
        "surface-raised": "#1E1E1E",
        "text-primary": "#F0F0F0",
        "text-muted": "#8A8A8A",
        "border-dark": "#2A2A2A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
