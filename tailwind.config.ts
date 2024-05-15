import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      colors: {
        'grey-bg': '#0C0C0C',
        'primary-blue': '#0077B6',
        'bg-button' : '#3E3E3E'
      }
    },
  },
  plugins: [],
};
export default config;
