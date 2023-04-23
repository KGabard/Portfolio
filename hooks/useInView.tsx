import { useEffect, useRef, useState } from 'react'

type Props = {
  options?: IntersectionObserverInit
}

export default function useInView({ options }: Props = {}) {
  const [inView, setInView] = useState(false)

  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setInView(entry.isIntersecting)
    }, options)

    if (ref.current) observer.observe(ref.current)
  }, [options])

  return { ref, inView }
}
