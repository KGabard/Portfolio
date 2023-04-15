import { useEffect } from 'react'

export default function useThemeMode() {
  let theme: 'light' | 'dark' = 'dark'

  if (typeof window !== 'undefined') {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      theme = 'dark'
    } else {
      theme = 'light'
    }
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
    } else {
      window.localStorage.setItem('theme', 'light')
    }
  }

  return { theme, toggleTheme }
}
