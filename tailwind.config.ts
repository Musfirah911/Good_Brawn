import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables theme switching
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D76F32", // Burnt Orange
        dark: "#1B1B1B",    // Charcoal Black
        light: "#E0B973",   // Soft Gold
        accent: "#C29FA0",  // Muted Rose (Elegant touch)
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
