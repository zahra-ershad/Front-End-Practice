/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // نام کلاس: ['نام فونت در گوگل', 'فونت جایگزین']
        'light': ['Montserrat', 'sans-serif'],   //  300
        'medium': ['Montserrat', 'sans-serif'],  //  500
        'black': ['Montserrat', 'sans-serif'],   //  900
      },
    },
  },
  plugins: [],
}