/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      neutral: {
        1: 'var(--neutral-primary)',
        2: 'var(--neutral-secondary)',
        3: 'var(--neutral-tertiary)',
        bg: 'var(--neutral-bg)',
        dark: {
          1: 'var(--neutral-dark-primary)',
          2: 'var(--neutral-dark-secondary)',
          3: 'var(--neutral-dark-tertiary)',
          bg: 'var(--neutral-dark-bg)',
        },
      },
      highlight: {
        1: 'var(--highlight-primary)',
        2: 'var(--highlight-secondary)',
        dark: {
          1: 'var(--highlight-dark-primary)',
          2: 'var(--highlight-dark-secondary)',
        },
      },
    },
    extend: {
      fontFamily: {
        bad: ['Bad Script', 'cursive'],
        merri: ['Merriweather Sans', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
