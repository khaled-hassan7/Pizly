
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pizly: {
          light: '#e0465d',
          DEFAULT: '#c4122f',
          dark: '#9a0e25',
        }
      },
      fontFamily: {
        sans: ['"Josefin Sans"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}