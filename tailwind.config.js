/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "Playfair Display",
        body: "Inter"
      },
      colors: {
        primary: "#F8F6F2",
        charcoal: "#2B2B2B",
        beige: "#D8C3A5"
      }
    },
  },
  plugins: [],
}