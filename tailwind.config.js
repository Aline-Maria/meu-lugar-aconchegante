/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neve: '#FFFFFF',     // branco puro
        cafe: '#704214',     // marrom café (texto)
        // marromClaro removido daqui conforme pedido
      },
    },
  },
  plugins: [],
}
