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
        // 1. TÍTULOS -> Josefin Sans
        // Uso: font-heading
        heading: ["var(--font-josefin)", "sans-serif"],
        display: ["var(--font-josefin)", "sans-serif"],

        // 2. NAV / SUBTÍTULOS -> Sora
        // Uso: font-nav
        nav: ["var(--font-sora)", "sans-serif"],

        // 3. TEXTO BASE -> DM Sans
        // Uso: por defecto en todo el body
        sans: ["var(--font-dmsans)", "sans-serif"],
        body: ["var(--font-dmsans)", "sans-serif"],
      },
      fontSize: {
        "fluid-hero": "clamp(1.5rem, 4vw, 2.5rem)",
        "fluid-h2": "clamp(2.5rem, 8vw, 5rem)",
        "fluid-h3-lg": "clamp(1.25rem, 4vw, 3rem)",
        "fluid-h3-md": "clamp(1.25rem, 3.5vw, 2.5rem)",
        "fluid-h3-sm": "clamp(1rem, 2vw, 1.25rem)",
        "fluid-p-lg": "clamp(1rem, 3vw, 1.25rem)",
        "fluid-p-md": "clamp(0.75rem, 2vw, 1rem)",
        "fluid-p-sm": "clamp(0.65rem, 1.2vw, 0.85rem)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sostenible: "#2B391C",
        pistachio: "#D6CCA8",
        oatmilk: "#F0EAD8",
        "soft-clay": "#C5BCAA",
        "warm-sand": "#E1DBC9",
        "ivory-cream": "#F9F3E8",
        "deep-green": "#2B391C",
      },
    },
  },
  plugins: [],
};

export default config;