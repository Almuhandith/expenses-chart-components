/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        SoftRed: "hsl(10, 79%, 65%)",
        Cyan: "hsl(186, 34%, 60%)",
        DarkBrown: "hsl(25, 47%, 15%)",
        MediumBrown: "hsl(28, 10%, 53%)",
        Cream: "hsl(27, 66%, 92%)",
        VeryPaleOrange: "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
