/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    colors: {
      primary: "#1DB954",
      black: "#191414",
    },
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
    },
  },
  plugins: [],
};
