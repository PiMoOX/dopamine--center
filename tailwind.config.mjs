/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        pink: {
          50: '#fff8f9',
          100: '#ffeef2',
          200: '#ffd6e0',
          300: '#ffb3c6',
          400: '#ff85a1',
          500: '#f43f6b',
          600: '#e02d59',
        },
      },
    },
  },
  plugins: [],
};
