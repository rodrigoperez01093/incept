/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "../public/index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          'cero': '0px',
          'xs': '360px',
          'sm':'750px',
          '2xl':'1366px',
        },
        fontFamily: {
          'sans': ['Open Sans', 'sans-serif'],
        },
        colors: {
          'vita-black': '#010E11',
          'incept-primary': '#032133',
          'vita-gray1': '#B9C1C2',
          'vita-gray2': '#DEE0E0',
          'vita-gray3': '#F5F6F6',
          'vita-white': '#F9F9FA',
          'vita-blue1': '#167287',
          'vita-blue2': '#05BCB9',
          'vita-red': '#CE3434',
        },
        backgroundImage: theme => ({
          'gradient-to-tl': 'linear-gradient(to top right, #05BCB9, #167287)',
        }),  
      },
    },
    plugins: [],
  }