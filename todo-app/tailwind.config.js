/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      //Dark only
      "bright-blue": "#3a7bfd",
      "very-dark-blue": "#161722",
      "very-dark-desaturated-blue": "#25273c",
      "light-grayish-blue-hover ": "#e4e5f1",
      "very-dark-grayish-blue-alt": "#4d5066",

      //Light and Dark
      "very-dark-grayish-blue": {
        dark: "#393a4c",
        light: "#484b6a",
      },
      "Dark-grayish-blue": {
        dark: "#777a92",
        light: "#9394a5",
      },
      "light-grayish-blue": {
        dark: "#cacde8",
        light: "#d2d3db",
      },

      // Light only
      "very-light-gray": "#fafafa",
      "very-light-grayish-blue": "#e4e5f1",

      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
}
