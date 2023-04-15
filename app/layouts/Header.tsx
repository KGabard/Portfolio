'use client'

import Image from 'next/image'
import logoFullBlack from 'public/assets/logos/logo-full-black.svg'
import logoFullWhite from 'public/assets/logos/logo-full-white.svg'
import Navbar from '../components/Navbar'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="flex h-[88px] items-center justify-between bg-white px-24 dark:bg-neutral-dark-1">
      <Image
        className="relative top-[3px]"
        src={theme === 'light' || !mounted ? logoFullBlack : logoFullWhite}
        alt="Kevin Gabard"
        height={55}
      />
      <div className="flex items-center gap-4">
        <Navbar />
        <button
          className="text-amber-500 dark:text-sky-200 text-4xl"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' || !mounted ? (
            <Image
              src="/assets/icons/moon-icon.svg"
              alt="Mode sombre"
              width={32}
              height={32}
            />
          ) : (
            <Image
              src="/assets/icons/sun-icon.svg"
              alt="Mode clair"
              width={32}
              height={32}
            />
          )}
        </button>
      </div>
    </header>
  )
}
