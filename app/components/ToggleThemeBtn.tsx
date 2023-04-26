'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import moonIcon from 'public/assets/icons/moon-icon.svg'
import sunIcon from 'public/assets/icons/sun-icon.svg'

export default function ToggleThemeBtn() {
  const [enableClick, setEnableClick] = useState(false)
  const { theme, setTheme } = useTheme()

  // Prevent toggle theme on page load during the Home section animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setEnableClick(true)
    }, 1800)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <button
      className="text-amber-500 dark:text-sky-200 text-4xl"
      onClick={() => {
        if (enableClick) setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      <Image
        className="hidden dark:block"
        src={sunIcon}
        alt="Mode clair"
        width={32}
        height={32}
      />
      <Image
        className="relative top-[-2px] dark:hidden"
        src={moonIcon}
        alt="Mode sombre"
        width={32}
        height={32}
      />
    </button>
  )
}
