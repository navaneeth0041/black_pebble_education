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
    },
  },
  plugins: [],
}
