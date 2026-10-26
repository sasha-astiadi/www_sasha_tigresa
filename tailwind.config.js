const headlessuiPlugin = require('@headlessui/tailwindcss');
const formsPlugin = require('@tailwindcss/forms');
const aspectRatioPlugin = require('@tailwindcss/aspect-ratio');
const typographyPlugin = require('@tailwindcss/typography'); // Correctly import the typography plugin

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        typewriter: 'var(--font-jmh-typewriter)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        gold: {
          50: '#FFC876', // Lightest shade
          100: '#F5B74F',
          200: '#D79A3E',
          300: '#CE933A',
          400: '#C78E38',
          500: '#B78333',
          600: '#A7772F',
          700: '#9E702B',
          800: '#916627',
          900: '#8A6226',
        },
        slate: {
          900: '#1F2937',
          200: '#E4E7EB',
        },
        'love-red': '#bc0a0f',
        base: '#faeee0',
        creme: {
          900: '#e3dfda',
          600: '#f6f1eb',
          200: '#fffdfb',
        },
      },
    },
  },
  plugins: [
    formsPlugin,
    headlessuiPlugin,
    aspectRatioPlugin,
    typographyPlugin, // Correctly added typography plugin here
  ],
};
