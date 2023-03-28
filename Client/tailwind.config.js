/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pBlue: "#2B3467",
        pLBlue: "#BAD7E9",
        pRed: "#EB455F",
        pCreme: "#FCFFE7",
        pYellow: "#FEDB39"
      }
    },
  },
  plugins: [],
}