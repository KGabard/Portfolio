'use client'

import Navbar from '../components/Navbar'
import LogoFullSVG from '../components/svgs/LogoFullSVG'
import ToggleThemeBtn from '../components/ToggleThemeBtn'
import BurgerMenu from '../components/BurgerMenu'
import LogoShortSVG from '../components/svgs/LogoShortSVG'
import { useEffect, useState } from 'react'
import useScrollLimitCheck from '@/hooks/useScrollLimitCheck'

export default function Header() {
  const { isScrollBelowLimit: shouldRetract } = useScrollLimitCheck({ limitPercent: 75 })

  return (
    <header
      className={`fixed z-[100] flex w-full justify-center bg-white transition-transform duration-[450ms] ease-in-out dark:bg-neutral-dark-1 ${
        shouldRetract ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex h-[var(--header-height)] w-full max-w-[var(--content-max-width)] items-center justify-between px-[var(--margin-mobile)] sm:px-[var(--margin-desktop)]">
        <LogoFullSVG className="hidden h-[55px] fill-black dark:fill-white sm:block" />
        <LogoShortSVG className="block h-[55px] fill-black dark:fill-white sm:hidden" />
        <div className="flex items-center gap-6">
          <Navbar />
          <BurgerMenu />
          <ToggleThemeBtn />
        </div>
      </div>
    </header>
  )
}
