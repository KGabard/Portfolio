import { useEffect, useState } from 'react'

type Props<T extends HTMLElement> = {
  observedRef: React.RefObject<T>
  options?: IntersectionObserverInit
}

export default function useInView<T extends HTMLElement>({
  observedRef,
  options,
}: Props<T>) {
  const [inRestrictedView, setInRestrictedView] = useState(false)
  const [inScreenView, setInScreenView] = useState(false)

  useEffect(() => {
    const restrictedObserver = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setInRestrictedView(entry.isIntersecting)
    }, options)

    const screenObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setInScreenView(entry.isIntersecting)
      },
      { rootMargin: '0%', threshold: 0 }
    )

    if (observedRef.current) {
      restrictedObserver.observe(observedRef.current)
      screenObserver.observe(observedRef.current)
    }

    return () => {
      if (observedRef.current) {
        restrictedObserver.unobserve(observedRef.current)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        screenObserver.unobserve(observedRef.current)
      }
    }
  }, [observedRef, options])

  return { inRestrictedView, inScreenView }
}
