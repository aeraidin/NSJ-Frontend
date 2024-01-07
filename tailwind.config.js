/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          100: '#E6E9EC',
          200: '#B3BCC5',
          300: '#808F9F',
          400: '#4D6279',
          500: '#1A3552',
          600: '#011F3F',
        },
        secondary : {
          100: '#FFF8EA',
          200: '#FFEAC0',
          300: '#FFDC97',
          400: '#FECE6D',
          500: '#FEC043',
          600: '#FEB92E',
        },
        gray : {
          50 : 'EFEFEF',
          100: '#D7D7D7',
          200: '#BABABA',
          300: '#9B9B9B',
          400: '#7E7E7E',
          500: '#616161',
          600: '#525252',
        },
        success : {
          100: '#EBFAF1',
          200: '#C3EFD6',
          300: '#9BE4BB',
          400: '#73D99F',
          500: '#4BCE84',
          600: '#37C976',
        },
        error : {
          100: '#FFEDED',
          200: '#FECACA',
          300: '#FEA7A7',
          400: '#FE8484',
          500: '#FD6261',
          600: '#FD504F',
        },
        third : {
          100: '#EDF5FA',
          200: '#CAE0EF',
          300: '#A7CBE4',
          400: '#84B7DA',
          500: '#61A2CF',
          600: '#4F98CA',
        },
      },
    },
  },
  plugins: [],
};
