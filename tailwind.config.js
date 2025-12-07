/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f44336",
        "background-light": "#fdf6e3",
        "background-dark": "#1a1a1a",
        "text-light": "#333333",
        "text-dark": "#e0e0e0",
        "card-light": "#ffffff",
        "card-dark": "#2a2a2a",
        "border-light": "#e5e7eb",
        "border-dark": "#4a4a4a",
      },
      fontFamily: {
        display: ["VT323", "monospace"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}