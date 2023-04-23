/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontSize: {
      xs: "1.2rem",
      sm: "1.4rem",
      base: "1.6rem",
      xl: "1.8rem",
      "2xl": "2.4rem",
      "3xl": "3.2rem",
      "4xl": "6.4rem",
      "5xl": "8rem",
    },
    fontFamily: {
      sans: ["'Space Grotesk'", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "952px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      colors: {
        bg: "hsl(0, 0%, 100%)",
        onBg: "hsl(279, 6%, 55%)",
        onIn: "hsl(270, 3%, 87%)",
      },
    },
  },
  plugins: [],
};
