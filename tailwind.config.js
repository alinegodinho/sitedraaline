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
        medical: {
          dark: '#0D1828',     // Deep Navy (RGB 13, 24, 40)
          slate: '#23374B',    // Slate Blue (RGB 35, 55, 75)
          bronze: '#A47F67',   // Accent Bronze (RGB 164, 127, 103)
          cream: '#E4DBD5',    // Warm Cream (RGB 228, 219, 213)
          bgLight: '#FBFBFA',  // Premium White Space
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        luxury: '0.15em',
      }
    },
  },
  plugins: [],
};
