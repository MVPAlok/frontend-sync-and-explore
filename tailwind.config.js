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
          DEFAULT: '#16B4A1',
          light: '#1ED4BE',
          dark: '#128E7F'
        },
        secondary: {
          DEFAULT: '#00B5D1',
          light: '#4FD1E5',
          dark: '#0091A8'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #16B4A1 0%, #00B5D1 100%)',
        'gradient-light': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(22, 180, 161, 0.05) 0%, rgba(22, 180, 161, 0.1) 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'gradient-features': 'linear-gradient(180deg, #E5FCFF 0%, rgba(229, 252, 255, 0.7) 100%)'
      }
    },
  },
  plugins: [],
}

