import Link from 'next/link'
import LogoFullSVG from '../components/svgs/LogoFullSVG'
import GithubSVG from '../components/svgs/GithubSVG'
import LinkedinSVG from '../components/svgs/LinkedinSVG'
import NpmSVG from '../components/svgs/NpmSVG'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="my-[112px] flex w-full max-w-[var(--content-max-width)]  flex-col gap-12 px-[var(--margin-mobile)] sm:px-[var(--margin-desktop)]"
    >
      <div className="h-2 w-full rounded-sm bg-neutral-3 dark:bg-neutral-dark-2 "></div>
      <div className="flex flex-col items-start gap-2">
        <LogoFullSVG className="h-[55px] fill-black dark:fill-white" />
        <p className="typo-body text-neutral-1 dark:text-neutral-dark-3">
          © 2023 - Design et intégration par Kevin Gabard
        </p>
        <div className="flex gap-2.5 mt-1 sm:hidden">
          <Link href={'https://github.com/KGabard'} target="_blank">
            <GithubSVG className="h-9 w-9 cursor-pointer text-neutral-1 opacity-50 transition-all duration-150 ease-in hover:opacity-100 dark:text-neutral-dark-3 dark:hover:text-white" />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/kevin-gabard/'}
            target="_blank"
          >
            <LinkedinSVG className="h-9 w-9 cursor-pointer text-neutral-1 opacity-50 transition-all duration-150 ease-in hover:opacity-100 dark:text-neutral-dark-3 dark:hover:text-white" />
          </Link>
          <Link href={'https://www.npmjs.com/~kgabard'} target="_blank">
            <NpmSVG className="h-9 w-9 cursor-pointer text-neutral-1 opacity-50 transition-all duration-150 ease-in hover:opacity-100 dark:text-neutral-dark-3 dark:hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
