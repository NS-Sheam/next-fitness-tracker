import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        "band-primary": "#03045E",
        "band-secondary": "#0077B6",
        "band-ternery": "#00B4D8",
        "sky-blue": "#90E0EF",
        "lignt-blue": "#CAF0F8",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
