/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./src/components/**/*.{js,jsx}", 
    "./src/components/buttons/**/*.{js,jsx}", 
    "./src/components/inputs/**/*.{js,jsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EFE7E7",
        secondary: "#262523",
        gold: "#DEBB86"
      },
      fontFamily: {
        poppins: ["Satoshi","Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
