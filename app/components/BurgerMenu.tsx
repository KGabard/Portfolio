'use client'

import { useState } from 'react'

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleBtn = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="block xl:hidden">
      <div
        onClick={handleToggleBtn}
        className={`relative h-8 w-8 cursor-pointer text-3xl xl:hidden ${
          isOpen ? 'toggle-btn' : ''
        } `}
      >
        <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-black transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-y-2.5 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:translate-y-2.5 after:rounded after:bg-black after:transition-all after:duration-500 after:content-[''] dark:bg-white dark:before:bg-white dark:after:bg-white"></div>
      </div>
      <section
        id="mobile-menu"
        className={`absolute left-0 top-[var(--header-height)] z-[100] w-full origin-top animate-openMenu flex-col justify-center bg-black text-5xl ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        <nav
          onClick={handleToggleBtn}
          className="typo-title flex max-h-[calc(100vh-var(--header-height))] flex-col items-center overflow-y-scroll bg-neutral-bg text-black dark:bg-neutral-dark-bg dark:text-white"
          aria-label="mobile"
        >
          <a
            href="#home"
            className="relative w-full py-12 text-center transition-colors duration-[250ms] ease-in after:absolute after:bottom-0 after:left-1/2 after:z-[110] after:h-1 after:w-1/2 after:-translate-x-1/2 after:translate-y-0.5 after:rounded after:bg-neutral-2 after:content-[''] hover:bg-highlight-1 hover:text-white dark:after:bg-neutral-dark-2 dark:hover:bg-highlight-dark-1 dark:hover:text-black"
          >
            Accueil
          </a>
          <a
            href="#about"
            className="relative w-full py-12 text-center transition-colors duration-[250ms] ease-in after:absolute after:bottom-0 after:left-1/2 after:z-[110] after:h-1 after:w-1/2 after:-translate-x-1/2 after:translate-y-0.5 after:rounded after:bg-neutral-2 after:content-[''] hover:bg-highlight-1 hover:text-white dark:after:bg-neutral-dark-2 dark:hover:bg-highlight-dark-1 dark:hover:text-black"
          >
            A propos
          </a>
          <a
            href="#skills"
            className="relative w-full py-12 text-center transition-colors duration-[250ms] ease-in after:absolute after:bottom-0 after:left-1/2 after:z-[110] after:h-1 after:w-1/2 after:-translate-x-1/2 after:translate-y-0.5 after:rounded after:bg-neutral-2 after:content-[''] hover:bg-highlight-1 hover:text-white dark:after:bg-neutral-dark-2 dark:hover:bg-highlight-dark-1 dark:hover:text-black"
          >
            Compétences
          </a>
          <a
            href="#path"
            className="relative w-full py-12 text-center transition-colors duration-[250ms] ease-in after:absolute after:bottom-0 after:left-1/2 after:z-[110] after:h-1 after:w-1/2 after:-translate-x-1/2 after:translate-y-0.5 after:rounded after:bg-neutral-2 after:content-[''] hover:bg-highlight-1 hover:text-white dark:after:bg-neutral-dark-2 dark:hover:bg-highlight-dark-1 dark:hover:text-black"
          >
            Parcours
          </a>
          <a
            href="#projects"
            className="relative w-full py-12 text-center transition-colors duration-[250ms] ease-in after:absolute after:bottom-0 after:left-1/2 after:z-[110] after:h-1 after:w-1/2 after:-translate-x-1/2 after:translate-y-0.5 after:rounded after:bg-neutral-2 after:content-[''] hover:bg-highlight-1 hover:text-white dark:after:bg-neutral-dark-2 dark:hover:bg-highlight-dark-1 dark:hover:text-black"
          >
            Projets
          </a>
          <a
            href="#contact"
            className="relative w-full py-12 text-center transition-colors duration-[250ms] ease-in hover:bg-highlight-1 hover:text-white dark:hover:bg-highlight-dark-1 dark:hover:text-black"
          >
            Contact
          </a>
        </nav>
      </section>
    </div>
  )
}
