import { useTheme } from 'next-themes'

export default function ThemeBtn() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="text-amber-500 dark:text-sky-200 text-4xl"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
