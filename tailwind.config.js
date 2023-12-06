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
    },
    screens: {
      '2xl': { max: '1600px' },
      // => @media(max-width: 1600px)
      xl: { max: '1279px' },
      // => @media(max-width: 1279px)
      lg: { max: '1023px' },
      // => @media(max-width: 1023px)
      md: { max: '767px' },
      // => @media(max-width: 767px)
      sm: { max: '639px' },
      // => @media(max-width: 639)
      xs: { max: '479px' }
      // => @media(max-width: 479px)
    }
  },
  plugins: []
};
