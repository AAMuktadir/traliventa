const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans], // Montserrat as default
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        theme: "#8C2109",
      },
    },
  },
  plugins: [],
};
