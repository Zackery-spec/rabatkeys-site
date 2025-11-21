import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'], // Luxury Headings
        sans: ['var(--font-inter)', 'sans-serif'], // Clean Body
      },
      colors: {
        rabat: {
          navy: "#1B2631",     // Deep, authoritative blue
          sand: "#C5A059",     // Muted luxury gold
          teal: "#367588",     // Zellige accent
          beige: "#F9F7F2",    // Soft background
          slate: "#475569",    // Footer gray
        },
      },
      backgroundImage: {
        'moroccan-pattern': "url('/patterns/subtle-zellige.png')", // Placeholder for asset
        'hero-gradient': "linear-gradient(to right, rgba(27, 38, 49, 0.95), rgba(27, 38, 49, 0.7), rgba(54, 117, 136, 0.3))",
      }
    },
  },
  plugins: [],
};
export default config;