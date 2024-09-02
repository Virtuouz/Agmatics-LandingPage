/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,md}"],
  theme: {
    
    extend: {
      colors:{
        'vynx' :{
          darkblue: '#011D26',
          lightblue: '#5FB6E0',
          dullblue: '#156883',
          offwhite:'#F5F5F5'
        }
      },
    },
  },
  plugins: [],
};
