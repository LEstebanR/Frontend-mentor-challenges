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
      },
    },
  },
  plugins: [],
};
export default config;
