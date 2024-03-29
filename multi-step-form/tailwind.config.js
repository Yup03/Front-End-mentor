/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "marine-blue": "#02295a",
      "purplish-blue": "#473dff",
      "pastel-blue": "#adbeff",
      "light-blue": "#bfe2fd",
      "strawberry-red": "#ed3548",
      "cool-gray": "#9699ab",
      "light-gray": "#d6d9e6",
      magnolia: "#f0f6ff",
      alabaster: "#fafbff",
      white: "#ffffff",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        desktop: "url('/bg-sidebar-desktop.svg')",
        mobile: "url('/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
}
