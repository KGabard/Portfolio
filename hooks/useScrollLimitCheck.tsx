import { useEffect, useState } from 'react'

type Props = {
  limitPercent: number
}

export default function useScrollLimitCheck({ limitPercent }: Props) {
  const [isScrollBelowLimit, setIsScrollBelowLimit] = useState(false)

  useEffect(() => {
    function checkScrollPosition() {
      const limit = (limitPercent / 100) * window.innerHeight
      if (window.scrollY > limit) {
        setIsScrollBelowLimit(true)
      } else {
        setIsScrollBelowLimit(false)
      }
    }

    window.addEventListener('scroll', checkScrollPosition)

    checkScrollPosition()

    return () => {
      window.removeEventListener('scroll', checkScrollPosition)
    }
  }, [limitPercent])

  return { isScrollBelowLimit }
}
