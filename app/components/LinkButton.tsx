import Link from 'next/link'
import ExternalLinkSVG from './svgs/ExternalLinkSVG'
import GithubSVG from './svgs/GithubSVG'

type Props = {
  label: string
  href: string
  icon?: 'external' | 'github'
}

export default function LinkButton({ label, href, icon }: Props) {
  return (
    <Link
      href={href}
      className={`typo-label flex justify-center w-[112px] py-3 px-0 sm:w-fit gap-1.5 rounded-lg bg-highlight-1 sm:py-4 sm:pr-8 text-white transition-colors duration-[250ms] ease-in-out hover:bg-highlight-2 hover:text-black dark:bg-highlight-dark-1 dark:hover:bg-highlight-dark-2 dark:hover:text-neutral-dark-1 ${
        icon ? 'sm:pl-[26px]' : 'sm:pl-8'
      }`}
    >
      {icon === 'external' && (
        <ExternalLinkSVG className="h-6 w-6 sm:h-7 sm:w-7" />
      )}
      {icon === 'github' && <GithubSVG className="h-6 w-6 sm:h-7 sm:w-7" />}
      {label}
    </Link>
  )
}
