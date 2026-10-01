/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0a0d0b',
          900: '#111412',
          850: '#151917',
          800: '#1c221e',
          700: '#28312b',
        },
        forest: {
          900: '#182b22',
          800: '#223c30',
          700: '#2c4d3e',
          600: '#396350',
          500: '#487c65',
        },
        sand: {
          50: '#faf8f5',
          100: '#f4efe6',
          200: '#e8dfd1',
          300: '#d7c7b0',
        },
        gold: {
          DEFAULT: '#c6a87d',
          light: '#dfc7a2',
          dark: '#a68759',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


