/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '1000px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'Quicksand': ['Quicksand', 'Helvetica'],
      'DM_Sans': ['DMSans', 'Helvetica'],
    },
    extend: {
      colors: {
        textblack: "var(--textblack)",
        textgray: "var(--textgray)",
        textwhite: "var(--textwhite)",
        primaryRed: "var(--primary-red)",
        purple: "var(--primary-purple)",
      },
      lineHeight: {
        '11': '3.1rem',
      }
    },
  },
  plugins: [],
}

