'use client'

import Link from 'next/link'
import GithubSVG from './svgs/GithubSVG'
import LinkedinSVG from './svgs/LinkedinSVG'
import NpmSVG from './svgs/NpmSVG'
import { useContext } from 'react'
import { ScrollPositionContext } from '../providers/Providers'

export default function SideNavBar() {
  const { activeSection: activeSection } = useContext(ScrollPositionContext)

  return (
    <nav
      role="navigation"
      aria-label="Side navbar"
      className="fixed left-1/2 top-[100vh] hidden w-full max-w-[var(--content-max-width)] -translate-x-1/2 -translate-y-full bg-highlight-1 sm:block"
    >
      <div className="absolute bottom-0 right-0 flex flex-col items-center gap-4 pr-6">
        <a
          href="#home"
          className={`hover:activateNavSquare h-4 w-4 cursor-pointer rounded-sm bg-neutral-1 opacity-50 transition-all duration-150 ease-in ${
            activeSection === 0 ? 'activateNavSquare' : 'dark:bg-neutral-dark-3'
          }`}
        ></a>
        <a
          href="#about"
          className={`hover:activateNavSquare h-4 w-4 cursor-pointer rounded-sm bg-neutral-1 opacity-50 transition-all duration-150 ease-in ${
            activeSection === 1 ? 'activateNavSquare' : 'dark:bg-neutral-dark-3'
          }`}
        ></a>
        <a
          href="#skills"
          className={`hover:activateNavSquare h-4 w-4 cursor-pointer rounded-sm bg-neutral-1 opacity-50 transition-all duration-150 ease-in ${
            activeSection === 2 ? 'activateNavSquare' : 'dark:bg-neutral-dark-3'
          }`}
        ></a>
        <a
          href="#path"
          className={`hover:activateNavSquare h-4 w-4 cursor-pointer rounded-sm bg-neutral-1 opacity-50 transition-all duration-150 ease-in ${
            activeSection === 3 ? 'activateNavSquare' : 'dark:bg-neutral-dark-3'
          }`}
        ></a>
        <a
          href="#projects"
          className={`hover:activateNavSquare h-4 w-4 cursor-pointer rounded-sm bg-neutral-1 opacity-50 transition-all duration-150 ease-in ${
            activeSection === 4 ? 'activateNavSquare' : 'dark:bg-neutral-dark-3'
          }`}
        ></a>
        <a
          href="#contact"
          className={`hover:activateNavSquare h-4 w-4 cursor-pointer rounded-sm bg-neutral-1 opacity-50 transition-all duration-150 ease-in ${
            activeSection === 5 ? 'activateNavSquare' : 'dark:bg-neutral-dark-3'
          }`}
        ></a>
        <div className="h-[64px] w-0.5 bg-neutral-2 text-neutral-1 opacity-50 dark:bg-neutral-dark-3"></div>
      </div>
    </nav>
  )
}
