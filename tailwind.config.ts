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
        disabled: "#767A6A",
      },
      maxWidth: {
        100: "40rem",
      },
      boxShadow: {
        card: "8px 8px 0 1px rgba(0, 0, 0)",
        hover: "10px 10px 0 1px rgba(0, 0, 0)",
      },
      height: {
        screenWithFooter: "calc(100vh - 6rem)",
        screenHome: "calc(100vh - 3rem)",
      },
      minHeight: {
        screenWithFooter: "calc(100vh - 6rem)",
        screenHome: "calc(100vh - 3rem)",
      },
    },
  },
  plugins: [],
};
export default config;
