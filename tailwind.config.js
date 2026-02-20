/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: '#3b5220',
        whatsapp: '#25D366',
        background: '#ffffff',
      },
    },
  },
  plugins: [],
}
