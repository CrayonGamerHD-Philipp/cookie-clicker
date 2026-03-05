/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff8ec",
          100: "#fce9c8",
          200: "#f8d48f",
          300: "#f3b95e",
          400: "#ed9f37",
          500: "#e7831f",
          600: "#cb6517",
          700: "#a24816",
          800: "#7f3918",
          900: "#673016"
        }
      }
    }
  },
  plugins: []
};
