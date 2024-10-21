/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "com":["Cormorant" , "serif"],
        "syne":["Syne", "sans-serif"],
        "metro":["Metrophobic", "sans-serif"]
      }
    },
  },
  plugins: [],
}