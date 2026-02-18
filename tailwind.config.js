/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./wellnessLogic.ts",
    "./constants.ts"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f4a825",
        "background-light": "#fdfaf5",
        "background-dark": "#121212",
        "card-light": "#ffffff",
        "card-dark": "#1e1e1e",
      },
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        manrope: ["Manrope", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        'xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}