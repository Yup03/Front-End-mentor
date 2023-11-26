/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "hsl(0, 0%, 98%)",
          "primary-content": "hsl(200, 15%, 8%)",
          neutral: "hsl(0, 0%, 100%)",
          "neutral-content": "hsl(0, 0%, 52%)",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "hsl(207, 26%, 17%)",
          "primary-content": "hsl(0, 0%, 100%)",
          neutral: "hsl(209, 23%, 22%)",
          "neutral-content": "hsl(0, 0%, 80%)",
        },
      },
    ],
  },
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        cards: "repeat(auto-fill, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
}
