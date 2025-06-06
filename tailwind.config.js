/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'top-right': '5px -5px 10px rgba(0, 0, 0, 0.2)',
        'bottom-right': '5px 5px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

