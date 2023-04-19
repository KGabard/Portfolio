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
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
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
      dropShadow: {
        big: '4px 4px 8px rgba(0, 0, 0, 0.2)',
        small: '3px 3px 6px rgba(0, 0, 0, 0.2)',
        sharp: '4px 4px 4px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'dark-noise': "url('/assets/images/dark-noise-3.svg')",
        'light-noise': "url('/assets/images/light-noise-2.svg')",
      },
      keyframes: {
        preFloat: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        levitate:
          'preFloat 300ms linear, float 1000ms 300ms infinite ease-out',
      },
    },
  },
  plugins: [],
}
