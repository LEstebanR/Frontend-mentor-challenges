import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CEFA5D",
        secondary: "#B4CF6F",
        bg: "#97A574",
        disable: "#767A6A",
      },
      maxWidth: {
        100: "40rem",
      },
    },
  },
  plugins: [],
};
export default config;
