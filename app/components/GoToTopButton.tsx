'use client'

import useScrollLimitCheck from '@/hooks/useScrollLimitCheck'
import ArrowSVG from './svgs/ArrowSVG'

export default function GoToTopButton() {
  const { isScrollBelowLimit: shoulAppear } = useScrollLimitCheck({
    limitPercent: 100,
  })

  return (
    <aside
      className={`fixed bottom-[var(--margin-mobile)] right-[var(--margin-mobile)] z-50 flex [animation-delay:300ms] ${
        shoulAppear
          ? 'animate-fadeInAndUp'
          : 'animate-fadeOutAndDown'
      }`}
    >
      <a
        className="rounded-xl border-2 border-neutral-1 bg-white/50 p-1.5 opacity-60 dark:border-0 dark:bg-neutral-1 sm:hidden"
        href="#home"
      >
        <ArrowSVG className="h-9 w-9 text-black dark:text-white" />
      </a>
    </aside>
  )
}
