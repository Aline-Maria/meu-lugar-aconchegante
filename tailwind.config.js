/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neve: '#F6F1E7',
        cafe: '#5C4033',
        creme: '#FFF5E1',
        dourado: '#C1A05A',
        slick: '#a06342',
      },
      width: {
        '940': '940px',
      },
      height: {
        '326': '326px',
      },
      fontFamily: {
        gwendolyn: ['Gwendolyn', 'cursive'],
        architects: ['Architects Daughter', 'cursive'],
      },
      fontSize: {
        '3.5xl': '2.44rem',
        'lg-plus': '1.35rem',
        '2.5xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
