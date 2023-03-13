/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    colors: {
      green: {
        50: "#f0fdf4",
        100: "#dbfde6",
        200: "#baf8cf",
        300: "#84f1aa",
        400: "#48e07d",
        500: "#1db954",
        600: "#14a547",
        700: "#13823b",
        800: "#156633",
        900: "#13542c",
      },
      red: {
        50: "#fff2f0",
        100: "#ffe1dd",
        200: "#ffc7c0",
        300: "#ffa194",
        400: "#ff6b57",
        500: "#ff3d23",
        600: "#ff1e00",
        700: "#d71900",
        800: "#b11703",
        900: "#921a0a",
      },
      gray: {
        50: "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#a4a4a4",
        400: "#818181",
        500: "#434343",
        600: "#383838",
        700: "#222222",
        800: "#191414",
        900: "#121212",
      },
      black: "#010101",
      white: "#FFFFFF",
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
              fontSize: "1.125rem",
            },
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
