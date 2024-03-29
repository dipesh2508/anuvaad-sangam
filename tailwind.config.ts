import type { Config } from "tailwindcss"



const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors:{
        "primary-1": '#E4DFFF',
        'primary-2': '#C7C2FA',
        'primary-3': '#9D97ED',
        'primary-4': '#7165E3',
        'primary-5': '#5141DC',
        'primary-6': '#4130D9',
        'primary-7': '#3223BE',
        'primary-8': '#1B1367',
        'primary-9': '#120D45',
        'primary-10': '#090622',
        'secondary-1':'#A4ECF4',
        'secondary-2':'#1AC8DB',
        'secondary-3':'#0F7580',
        'secondary-4':'#042124',
        'black': '#000000',
        'white': '#FFFFFF',
        'light-1': '#F9F9F9',
        'light-2': '#F5F6FA',
        'light-3': '#F3F3F3',
        'light-4': '#EDEDED',
        'facebook': '#1877F2',
        'insta1': '#4F5BD5',
        'insta3': '#D62976',
        'insta5': '#FEDA75',

        glassmorphism: "rgba(16, 16, 18, 0.60)",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        "count-badge": "0px 0px 6px 2px rgba(219, 188, 159, 0.30)",
        "groups-sidebar": "-30px 0px 60px 0px rgba(28, 28, 31, 0.50)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config