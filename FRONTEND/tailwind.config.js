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
        "primary": "#1745cf",
        "teal-accent": "#14b8a6", // Màu mới
        "background-light": "#f6f6f8",
        "background-dark": "#111521",
        "card-dark": "#1a1e2e",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}