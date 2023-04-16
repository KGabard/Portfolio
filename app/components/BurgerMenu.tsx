'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleBtn = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="block xl:hidden">
      <button
        onClick={handleToggleBtn}
        className={`relative h-8 w-8 cursor-pointer text-3xl xl:hidden ${
          isOpen ? 'toggle-btn' : ''
        } `}
      >
        <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-black transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-2.5 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-2.5 after:rounded after:bg-black after:transition-all after:duration-500 after:content-[''] dark:bg-white dark:before:bg-white dark:after:bg-white"></div>
      </button>
      <section
        id="mobile-menu"
        className={`z-[100] animate-open-menu absolute left-0 top-[var(--header-height)] w-full origin-top flex-col justify-center bg-black text-5xl ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        <nav
          onClick={handleToggleBtn}
          className="typo-title flex flex-col items-center bg-neutral-bg text-black dark:bg-neutral-dark-bg dark:text-white "
          aria-label="mobile"
        >
          <Link
            href="#home"
            className="relative w-full py-12 text-center transition-colors duration-[250ms] ease-in after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-1/2 after:-translate-x-1/2 after:bg-neutral-2 dark:after:bg-neutral-dark-2 after:content-[''] hover:bg-highlight-1 hover:text-white dark:hover:bg-highlight-dark-1 dark:hover:text-black after:rounded after:translate-y-0.5 after:z-[110]"
          >
            Accueil
          </Link>
          <Link
            href="#about"
            className="relative w-full py-12 text-center transition-colors duration-[250ms] ease-in after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-1/2 after:-translate-x-1/2 after:bg-neutral-2 dark:after:bg-neutral-dark-2 after:content-[''] hover:bg-highlight-1 hover:text-white dark:hover:bg-highlight-dark-1 dark:hover:text-black after:rounded after:translate-y-0.5 after:z-[110]"
          >
            A propos
          </Link>
          <Link
            href="#skills"
            className="relative w-full py-12 text-center transition-colors duration-[250ms] ease-in after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-1/2 after:-translate-x-1/2 after:bg-neutral-2 dark:after:bg-neutral-dark-2 after:content-[''] hover:bg-highlight-1 hover:text-white dark:hover:bg-highlight-dark-1 dark:hover:text-black after:rounded after:translate-y-0.5 after:z-[110]"
          >
            Compétences
          </Link>
          <Link
            href="#path"
            className="relative w-full py-12 text-center transition-colors duration-[250ms] ease-in after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-1/2 after:-translate-x-1/2 after:bg-neutral-2 dark:after:bg-neutral-dark-2 after:content-[''] hover:bg-highlight-1 hover:text-white dark:hover:bg-highlight-dark-1 dark:hover:text-black after:rounded after:translate-y-0.5 after:z-[110]"
          >
            Cursus
          </Link>
          <Link
            href="#projects"
            className="relative w-full py-12 text-center transition-colors duration-[250ms] ease-in after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-1/2 after:-translate-x-1/2 after:bg-neutral-2 dark:after:bg-neutral-dark-2 after:content-[''] hover:bg-highlight-1 hover:text-white dark:hover:bg-highlight-dark-1 dark:hover:text-black after:rounded after:translate-y-0.5 after:z-[110]"
          >
            Projets
          </Link>
          <Link
            href="#contact"
            className="relative w-full py-12 text-center transition-colors duration-[250ms] ease-in hover:bg-highlight-1 hover:text-white dark:hover:bg-highlight-dark-1 dark:hover:text-black"
          >
            Contact
          </Link>
        </nav>
      </section>
    </div>
  )
}
