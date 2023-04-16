'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import moonIcon from 'public/assets/icons/moon-icon.svg'
import sunIcon from 'public/assets/icons/sun-icon.svg'

export default function ToggleThemeBtn() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      className="text-amber-500 dark:text-sky-200 text-4xl"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'dark' || !mounted ? (
        <Image src={sunIcon} alt="Mode clair" width={32} height={32} />
      ) : (
        <Image
          className="relative top-[-2px]"
          src={moonIcon}
          alt="Mode sombre"
          width={32}
          height={32}
        />
      )}
    </button>
  )
}
