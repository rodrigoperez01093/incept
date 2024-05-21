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
          'sans': ['Lato', 'sans-serif'],
        },
        colors: {
          'incept-black': '#0e0f0f',
          'incept-primary': '#032133',
          'incept-gray1': '#B9C1C2',
          'incept-gray2': '#DEE0E0',
          'incept-gray3': '#F5F6F6',
          'incept-white': '#FFFFFF',
          'incept-blue1': '#167287',
          'incept-blue2': '#05BCB9',
          'incept-red': '#CE3434',
        },
        backgroundImage: theme => ({
          'gradient-to-tl': 'linear-gradient(to top right, #05BCB9, #167287)',
        }),  
      },
    },
    plugins: [],
  }