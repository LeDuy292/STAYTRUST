/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2dd4bf", // Teal 400
        "background-light": "#f6f8f8",
        "background-dark": "#010f0a", // Deep Green Black
        "surface-dark": "#041612", // Slightly lighter green black
        "card-dark": "#071e19", // Card background green black
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
    },
  },
  plugins: [],
}