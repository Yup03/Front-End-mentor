/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      primary: "#0a317a",
      accent: "#f55452",
      very_light_grayish_blue: "hsl(210, 60%, 98%)",
      light_grayish_blue_1: "hsl(211, 68%, 94%)",
      light_grayish_blue_2: "hsl(205, 33%, 90%)",
      grayish_blue: "hsl(219, 14%, 63%)",
      dark_grayish_blue: " hsl(219, 12%, 42%)",
      very_dark_blue: "hsl(224, 21%, 14%)",
    },
    extend: {},
  },

  plugins: [],
}
