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
        // Sans (body text) - Nord
        sans: ['var(--font-nord)', 'system-ui', 'sans-serif'],
        
        // Display (headings) - Codan Bold
        display: ['var(--font-codan-bold)', 'system-ui', 'sans-serif'],
        
        // Mono (code) - NectoMono
        mono: ['var(--font-necto-mono)', 'monospace'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
