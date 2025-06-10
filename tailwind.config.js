/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#f89006',
        'brand-teal': '#09be9d',
        'brand-navy': '#354152',
        'brand-blue': '#38b6ff',
        'brand-green': '#00bf63',
        'brand-red': '#ff3131',
        'brand-black': '#0a0a0a',
        'brand-white': '#ffffff',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
        'candal': ['Candal', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'mochiy': ['"Mochiy Pop One"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg-pattern.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}