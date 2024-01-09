/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#1E2640",
        "background":"#353C53",
        "background-light":"#E6E6E6",
        "text":"#4D4D4D",
        "text-dark":"#1A181E",
        "secondary":"#146EB4",
        "border":"#D9D9D9"
      }
    },
  },
  plugins: [],
}

