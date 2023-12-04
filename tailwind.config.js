/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)']
      },
      colors: {
        dark: '#1b1b1b',
        light: '#ffffff',
        primary: '#E55812',
        primaryDark: '#121212',
        expanderDark: '#B6BBC4'
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      }
    }
  },
  plugins: []
};
