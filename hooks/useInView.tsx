import { useEffect, useRef, useState } from 'react'

type Props<T extends Element> = {
  options?: IntersectionObserverInit
}

export default function useInView<T extends Element>({ options }: Props<T> = {}) {
  const [inView, setInView] = useState(false)

  const ref = useRef<T>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setInView(entry.isIntersecting)
    }, options)

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [options])

  return { ref, inView }
}