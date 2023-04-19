import ExternalLinkSVG from './svgs/ExternalLinkSVG'
import GithubSVG from './svgs/GithubSVG'

type Props = {
  label: string
  href: string
  external?: boolean
  icon?: 'external' | 'github'
  lavitate?: boolean
}

export default function LinkButton({
  label,
  href,
  external,
  icon,
  lavitate = false,
}: Props) {
  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      className={`typo-label flex w-[112px] justify-center gap-1.5 rounded-lg bg-highlight-1 px-0 py-3 text-white transition-colors duration-[250ms] ease-in-out hover:bg-highlight-2 hover:text-black dark:bg-highlight-dark-1 dark:hover:bg-highlight-dark-2 dark:hover:text-neutral-dark-1 sm:w-fit sm:py-4 sm:pr-8 ${
        icon ? 'sm:pl-[26px]' : 'sm:pl-8'
      } ${lavitate ? 'hover:animate-levitate' : ''}`}
    >
      {icon === 'external' && (
        <ExternalLinkSVG className="h-6 w-6 sm:h-7 sm:w-7" />
      )}
      {icon === 'github' && <GithubSVG className="h-6 w-6 sm:h-7 sm:w-7" />}
      {label}
    </a>
  )
}
