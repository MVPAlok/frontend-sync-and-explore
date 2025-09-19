/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A8F98',
          light: '#6DDADF',
          dark: '#00737C'
        },
        gray: {
          400: '#4B4B4B',
          500: '#000000'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, rgba(109, 218, 223, 1) 0%, rgba(255, 255, 255, 1) 100%)',
        'gradient-light': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(22, 180, 161, 0.05) 0%, rgba(22, 180, 161, 0.1) 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'gradient-text': 'linear-gradient(90deg, rgba(26, 143, 152, 1) 0%, rgba(0, 115, 124, 1) 100%)'
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif']
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        '5xl': '2.5rem',
        '6xl': '3.75rem',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        '4xl': '2.5rem',
      },
      height: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}

