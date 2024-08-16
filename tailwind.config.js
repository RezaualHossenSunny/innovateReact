/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1400px',
      },
      backgroundImage: {
        covers: "url('../cover.png')",
     
      },
      colors: {
        comon: '#43E7DF',
      },
    },
  },
  plugins: [],
}