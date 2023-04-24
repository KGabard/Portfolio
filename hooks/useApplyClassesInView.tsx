import { ScrollPositionContext } from '@/app/providers/Providers'
import { useContext, useEffect } from 'react'
import useInView from './useInView'

type Props<T extends HTMLElement> = {
  observedRef: React.RefObject<T>
  targetRef: React.RefObject<T>
  classesToAdd: string[]
  classesToRemove: string[]
  sectionId: number
  options?: IntersectionObserverInit
}

export default function useApplyClassesInView<T extends HTMLElement>({
  observedRef,
  targetRef,
  classesToAdd,
  classesToRemove,
  sectionId,
  options={ rootMargin: '0% 0% -30% 0%' },
}: Props<T>) {
  const { activeSection } = useContext(ScrollPositionContext)

  const { inRestrictedView, inScreenView } = useInView<T>({
    observedRef,
    options,
  })

  useEffect(() => {
    if (inRestrictedView) {
      classesToAdd.forEach((className) => {
        targetRef.current?.classList.add(className)
      })
      classesToRemove.forEach((className) => {
        targetRef.current?.classList.remove(className)
      })
    }

    if (!inScreenView && activeSection < sectionId) {
      classesToAdd.forEach((className) => {
        targetRef.current?.classList.remove(className)
      })
      classesToRemove.forEach((className) => {
        targetRef.current?.classList.add(className)
      })
    }
  }, [
    inRestrictedView,
    inScreenView,
    activeSection,
    sectionId,
    classesToAdd,
    classesToRemove,
    targetRef,
  ])
}
