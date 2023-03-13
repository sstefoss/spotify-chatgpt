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
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "3rem",
              margin: "0",
            },
            h2: {
              margin: "0",
            },
            h3: {
              margin: "0",
            }
          },
        },
      },
    },
  },
  base: true,
  utils: true,
  logs: false,
  rtl: false,
  prefix: "",
};
