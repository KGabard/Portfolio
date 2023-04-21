import Link from 'next/link'
import GithubSVG from './svgs/GithubSVG'
import LinkedinSVG from './svgs/LinkedinSVG'
import NpmSVG from './svgs/NpmSVG'

export default function SocialsBar() {
  return (
    <aside className="fixed left-1/2 top-[100vh] hidden w-full max-w-[var(--content-max-width)] -translate-x-1/2 -translate-y-full bg-highlight-1 sm:block">
      <div className="absolute bottom-0 left-0 flex flex-col items-center gap-3 pl-6">
        <Link href={'https://github.com/KGabard'} target="_blank">
          <GithubSVG className="h-9 w-9 cursor-pointer text-neutral-1 opacity-50 transition-all duration-150 ease-in hover:opacity-100 dark:text-neutral-dark-3" />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/kevin-gabard/'}
          target="_blank"
        >
          <LinkedinSVG className="h-9 w-9 cursor-pointer text-neutral-1 opacity-50 transition-all duration-150 ease-in hover:opacity-100 dark:text-neutral-dark-3" />
        </Link>
        <Link href={'https://www.npmjs.com/~kgabard'} target="_blank">
          <NpmSVG className="h-9 w-9 cursor-pointer text-neutral-1 opacity-50 transition-all duration-150 ease-in hover:opacity-100 dark:text-neutral-dark-3" />
        </Link>
        <div className="h-[64px] w-0.5 bg-neutral-2 text-neutral-1 opacity-50 dark:bg-neutral-dark-3"></div>
      </div>
    </aside>
  )
}
