// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a0518',
        'brand-blue': '#1a103c',
        'brand-purple': '#3c2b85',
        'brand-orange': '#f0a500',
        'brand-light': '#e6e6e6',
        'brand-muted': 'rgba(230, 230, 230, 0.7)',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'], // Użyjemy czcionki Poppins
      }
  
    },
  },
  plugins: [],
}