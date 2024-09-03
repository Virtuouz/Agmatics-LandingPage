/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,md}"],
  theme: {
    
    extend: {
      colors:{
        'vynx' :{
          orange: '#D69E34',
          dullorange: '#A06F12',
          lightblue: '#5FB6E0',
          dullblue: '#156883',
          offwhite:'#F5F5F5'
        }
      },
    },
  },
  plugins: [],
};
