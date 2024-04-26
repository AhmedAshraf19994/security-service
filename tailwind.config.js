/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary_bg : "#000000",
        gold:"#FFD700"

      }
    },
  },
  plugins: [],
}

