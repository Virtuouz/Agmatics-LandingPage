/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,md}"],
  theme: {
    
    extend: {
      colors:{
        'vynx' :{
          orange: '#D69E34',
          dullorange: '#A06F12',
          darkbrown: '#280F00',
          lightblue: '#5FB6E0',
          dullblue: '#156883',
          offwhite:'#F0E8E4'
        }
      },
    },
  },
  plugins: [],
};
