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
      className={`ease-in-out transition-colors duration-[250ms] dark:hover:text-neutral-dark-1 hover:text-black typo-label flex w-fit gap-1.5 rounded-lg bg-highlight-1 py-4 pr-8 text-white hover:bg-highlight-2 dark:bg-highlight-dark-1 dark:hover:bg-highlight-dark-2 ${
        icon ? 'pl-[26px]' : 'pl-8'
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
