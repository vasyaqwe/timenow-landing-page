/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1204px',
        xl: '1304px',
        '2xl': '1204px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1204px',
      xl: '1304px',
      '2xl': '1204px',
    },
    extend: {
      colors: {
        accent: {
          100: '#cdf9ff',
          400: "#46ccde",
          700: "#005560"
        },
        primary: {
          300: '#3a84f7',
          400: '#385dbe',
          900: '#1d1b67',
        },
        secondary: {
          400: '#005560',
          700: '#36495c',
        },
        neutral: {
          400: "#cacaca",
          700: "#838383"
        },
      }
    },
  },
  plugins: [],
}
