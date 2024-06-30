/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xml: "412px",
      // => @media (min-width: 412px) { ... }

      xs: '360px',
      // => @media (min-width: 350px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      "2xl": '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
      Almarai: ['Almarai', 'sans-serif'],
      Yesteryear: ['Yesteryear', 'cursive'],
      Volkhov: ['Volkhov', 'serif'],
      Nunito: ['Nunito', 'sans-serif']
    },
    colors: {
      primary: ['#22D1EE']
    }
  },
  plugins: [],
}