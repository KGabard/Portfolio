import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex gap-12">
      <Link
        className="typo-label relative text-black after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-highlight-1 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full dark:text-neutral-dark-3 dark:after:bg-highlight-dark-1"
        href={'#home'}
      >
        Acceuil
      </Link>
      <Link
        className="typo-label relative text-black after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-highlight-1 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full dark:text-neutral-dark-3 dark:after:bg-highlight-dark-1"
        href={'#about'}
      >
        A propos
      </Link>
      <Link
        className="typo-label relative text-black after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-highlight-1 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full dark:text-neutral-dark-3 dark:after:bg-highlight-dark-1"
        href={'#skills'}
      >
        Compétences
      </Link>
      <Link
        className="typo-label relative text-black after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-highlight-1 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full dark:text-neutral-dark-3 dark:after:bg-highlight-dark-1"
        href={'#path'}
      >
        Cursus
      </Link>
      <Link
        className="typo-label relative text-black after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-highlight-1 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full dark:text-neutral-dark-3 dark:after:bg-highlight-dark-1"
        href={'#projects'}
      >
        Projets
      </Link>
      <Link
        className="typo-label relative text-black after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-highlight-1 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:w-full dark:text-neutral-dark-3 dark:after:bg-highlight-dark-1"
        href={'#contact'}
      >
        Contact
      </Link>
    </nav>
  )
}
