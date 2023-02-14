/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        e4c1f9: "#e4c1f9",
        d0f4de: "#d0f4de",
        d84040: "#d84040",
        161614: "#161614",
        fcf6bd: "#fcf6bd",
    },
    fontFamily: {
        'sans': ['Inter', 'sans-serif'],
    },
    },
  plugins: [],
}
}
