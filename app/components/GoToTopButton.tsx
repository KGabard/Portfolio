'use client'

import useScrollLimitCheck from '@/hooks/useScrollLimitCheck'
import ArrowSVG from './svgs/ArrowSVG'
import { useEffect, useState } from 'react'

export default function GoToTopButton() {
  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFirstRender(false)
    }, 1700)

    return () => clearTimeout(timeout)
  }, [])

  const { isScrollBelowLimit: shoulAppear } = useScrollLimitCheck({
    limitPercent: 90,
  })

  return (
    <aside
      className={`overflow-hidden fixed bottom-[var(--margin-mobile)] translate-x-10 right-[var(--margin-mobile)] z-50 flex [animation-delay:300ms] ${
        shoulAppear
          ? 'animate-fadeInAndUp'
          : 'animate-fadeOutAndDown opacity-0'
      }`}
    >
      <a
        className={`rounded-xl border-2 border-neutral-1 bg-white/50 p-1.5 opacity-60 dark:border-0 dark:bg-neutral-1 sm:hidden ${isFirstRender ? 'translate-x-full' : ''}`}
        href="#home"
      >
        <ArrowSVG className="h-9 w-9 text-black dark:text-white" />
      </a>
    </aside>
  )
}
