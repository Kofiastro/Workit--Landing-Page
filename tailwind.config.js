/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily:{
        Fraunces:['Fraunces', 'san-serif'],
        Manrope:['Manrope', 'sans-serif']
      },
      colors: {
        navyBlue: 'hsl(273, 85%, 13%)',
        LimeGreen: 'hsl(150, 100%, 63%)',
        lightkhaki: 'hsl(271, 12%, 34%)',
        GrayishPink: 'hsl(276, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)',
      },

    },
  },
  plugins: [],
}

