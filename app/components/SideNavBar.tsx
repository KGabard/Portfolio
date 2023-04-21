import Link from 'next/link'
import GithubSVG from './svgs/GithubSVG'
import LinkedinSVG from './svgs/LinkedinSVG'
import NpmSVG from './svgs/NpmSVG'

export default function SideNavBar() {
  return (
    <nav role="navigation" aria-label="Side navbar" className="fixed left-1/2 top-[100vh] hidden w-full max-w-[var(--content-max-width)] -translate-x-1/2 -translate-y-full bg-highlight-1 sm:block">
      <div className="absolute bottom-0 right-0 flex flex-col items-center gap-4 pr-6">
        <a
          href="#home"
          className="h-4 w-4 cursor-pointer rounded-sm bg-neutral-1 opacity-50 transition-all duration-150 ease-in hover:rotate-45 hover:bg-highlight-1 hover:opacity-100 dark:bg-neutral-dark-3 dark:hover:bg-highlight-dark-1"
        ></a>
        <a
          href="#about"
          className="h-4 w-4 cursor-pointer rounded-sm bg-neutral-1 opacity-50 transition-all duration-150 ease-in hover:rotate-45 hover:bg-highlight-1 hover:opacity-100 dark:bg-neutral-dark-3 dark:hover:bg-highlight-dark-1"
        ></a>
        <a
          href="#skills"
          className="h-4 w-4 cursor-pointer rounded-sm bg-neutral-1 opacity-50 transition-all duration-150 ease-in hover:rotate-45 hover:bg-highlight-1 hover:opacity-100 dark:bg-neutral-dark-3 dark:hover:bg-highlight-dark-1"
        ></a>
        <a
          href="#path"
          className="h-4 w-4 cursor-pointer rounded-sm bg-neutral-1 opacity-50 transition-all duration-150 ease-in hover:rotate-45 hover:bg-highlight-1 hover:opacity-100 dark:bg-neutral-dark-3 dark:hover:bg-highlight-dark-1"
        ></a>
        <a
          href="#projects"
          className="h-4 w-4 cursor-pointer rounded-sm bg-neutral-1 opacity-50 transition-all duration-150 ease-in hover:rotate-45 hover:bg-highlight-1 hover:opacity-100 dark:bg-neutral-dark-3 dark:hover:bg-highlight-dark-1"
        ></a>
        <a
          href="#contact"
          className="h-4 w-4 cursor-pointer rounded-sm bg-neutral-1 opacity-50 transition-all duration-150 ease-in hover:rotate-45 hover:bg-highlight-1 hover:opacity-100 dark:bg-neutral-dark-3 dark:hover:bg-highlight-dark-1"
        ></a>
        <div className="h-[64px] w-0.5 bg-neutral-2 text-neutral-1 opacity-50 dark:bg-neutral-dark-3"></div>
      </div>
    </nav>
  )
}
