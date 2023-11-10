/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xxxs':{'min': '250px','max': '299px'},
      'xxs': {'min': '300px', 'max': '479px'},
      'xs': {'min': '480px', 'max': '575px'},
      'sm': {'min': '576px', 'max': '767px'}, 
      'md': {'min': '768px', 'max': '991px'},
      'lg': {'min': '992px', 'max': '1199px'},
      'xl': {'min': '1200px'},
      },
    extend: {
      height:{
        "100":"33.5rem",
        "82":"21.5rem"
      },
      Color:{
        'lavinder':'#E6E6FA',
        'regal-blue': '#243c5a',
      },
      fontSize:{
        "xxxs":"8px"
      }
     

    },
  },
  plugins: [],
}

