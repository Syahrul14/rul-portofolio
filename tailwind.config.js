/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        preahvihear: ['Preahvihear', 'sans-serif'], // Add this line
      },
    },
  },
  plugins: [],
}

