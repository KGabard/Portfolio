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
        openMenu: {
          '0%': {
            transform: 'scaleY(0)',
          },
          '80%': {
            transform: 'scaleY(1.2)',
          },
          '100%': {
            transform: 'scaleY(1)',
          },
        },
        textAfterWriting: {
          '0%': {
            transformOrigin: 'left center',
            transform: 'translateX(-2.5%) skewX(-20deg) scaleX(0)',
          },
          '40%': {
            transformOrigin: 'left center',
            transform: 'translateX(-2.5%) skewX(-20deg) scaleX(1.05)',
          },
          '60%': {
            transformOrigin: 'right center',
            transform: 'translateX(2.5%) skewX(-20deg) scaleX(1.05)',
          },
          '100%': {
            transformOrigin: 'right center',
            transform: 'translateX(2.5%) skewX(-20deg) scaleX(0)',
          },
        },
        textAfterColoringLight: {
          '0%': {
            backgroundColor: 'var(--neutral-secondary)',
          },
          '50%': {
            backgroundColor: 'var(--neutral-secondary)',
          },
          '100%': {
            backgroundColor: 'var(--highlight-primary)',
          },
        },
        textAfterColoringDark: {
          '0%': {
            backgroundColor: 'var(--neutral-dark-tertiary)',
          },
          '50%': {
            backgroundColor: 'var(--neutral-dark-tertiary)',
          },
          '100%': {
            backgroundColor: 'var(--highlight-dark-primary)',
          },
        },
        textAppearance: {
          from: {
            color: 'transparent',
          },
          '99%': {
            color: 'transparent',
          },
          to: {
            color: 'inherit',
          },
        },
        fade: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        slideSlightlyRight: {
          from: {
            transform: 'translateX(-30px)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        slideSlightlyLeft: {
          from: {
            transform: 'translateX(30px)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        slideSlightlyUp: {
          from: {
            transform: 'translateY(20px)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
        fadeOut: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
        slideSlightlyDown: {
          from: {
            transform: 'translateY(0px)',
          },
          to: {
            transform: 'translateY(20px)',
          },
        },
        slideIn: {
          from: {
            transform: 'translateY(-100%)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
        growX: {
          from: {
            transform: 'scaleX(0)',
            transformOrigin: 'left',
          },
          to: {
            transform: 'scaleX(1)',
            transformOrigin: 'left',
          },
        },
        growY: {
          from: {
            transform: 'scaleY(0)',
          },
          to: {
            transform: 'scaleY(1)',
          },
        },
      },
      animation: {
        levitate: 'preFloat 300ms linear, float 1000ms 300ms infinite ease-out',
        openMenu: 'openMenu 0.3s ease-in-out forwards',
        writeTextLight:
          'textAfterWriting 1s ease-in-out, textAfterColoringLight 1s ease-in-out',
        writeTextDark:
          'textAfterWriting 1s ease-in-out, textAfterColoringDark 1s ease-in-out',
        textAppear: 'textAppearance 500ms backwards',
        fadeIn: 'fade 500ms ease-in both',
        slideIn: 'slideIn 0ms both',
        fadeInAndUp:
          'fade 400ms ease-in both, slideSlightlyUp 400ms ease-in both',
        fadeInAndRight:
          'fade 400ms ease-in both, slideSlightlyRight 400ms ease-in both',
        fadeInAndLeft:
          'fade 400ms ease-in both, slideSlightlyLeft 400ms ease-in both',
        fadeOutAndDown:
          'fadeOut 400ms ease-in both, slideSlightlyDown 400ms ease-in both',
        growX: 'growX 250ms ease-in-out both',
        growY: 'growY 450ms ease-in-out both',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
