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
      keyframes: {
        'up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, // bay lên 20px rồi xuống
        },
        'left-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' }, // bay lên 20px rồi xuống
        },
      },
      animation: {
        'up-down': 'up-down 2s ease-in-out infinite',
        'left-right':'left-right 2s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}

