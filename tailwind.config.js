/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['lato'],
        mono :['Montserrat, sans-serif']
      },
      fontWeight: {
        bold: '700',
        
      }
    },
  },
  plugins: [],
};
