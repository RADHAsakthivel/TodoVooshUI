import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Ensure this captures all files in pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Ensure this captures all components
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgPrimary: "var(--bgPrimary)"
      },
    },
  },
  plugins: [],
};
export default config;
