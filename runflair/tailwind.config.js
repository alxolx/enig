/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f4f2ff',
          100: '#ece9fe',
          200: '#dbd5fd',
          300: '#c1b5fc',
          400: '#a38df9',
          500: '#855ef5',
          600: '#6655FF',
          700: '#5c3be6',
          800: '#4e33c2',
          900: '#402c9e',
        },
        accent: '#D4F870',
        dark: '#111827'
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(102, 85, 255, 0.15)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    }
  },
  plugins: [],
}

