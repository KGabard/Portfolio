export default function Navbar() {
  return (
    <nav className="hidden gap-12 xl:flex">
      <a
        className="typo-label relative text-black after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-highlight-1 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full dark:text-neutral-dark-3 dark:after:bg-highlight-dark-1"
        href={'#home'}
      >
        Accueil
      </a>
      <a
        className="typo-label relative text-black after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-highlight-1 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full dark:text-neutral-dark-3 dark:after:bg-highlight-dark-1"
        href={'#about'}
      >
        A propos
      </a>
      <a
        className="typo-label relative text-black after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-highlight-1 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full dark:text-neutral-dark-3 dark:after:bg-highlight-dark-1"
        href={'#skills'}
      >
        Compétences
      </a>
      <a
        className="typo-label relative text-black after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-highlight-1 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full dark:text-neutral-dark-3 dark:after:bg-highlight-dark-1"
        href={'#path'}
      >
        Cursus
      </a>
      <a
        className="typo-label relative text-black after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-highlight-1 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full dark:text-neutral-dark-3 dark:after:bg-highlight-dark-1"
        href={'#projects'}
      >
        Projets
      </a>
      <a
        className="typo-label relative text-black after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-highlight-1 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full dark:text-neutral-dark-3 dark:after:bg-highlight-dark-1"
        href={'#contact'}
      >
        Contact
      </a>
    </nav>
  )
}
