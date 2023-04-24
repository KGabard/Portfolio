import useInView from '@/hooks/useInView'
import { useContext, useEffect, useRef } from 'react'
import { ScrollPositionContext } from '../providers/Providers'
import useApplyClassesInView from '@/hooks/useApplyClassesInView'

type Props = {
  title: string
  sectionId: number
}

export default function SectionTitle({ title, sectionId }: Props) {
  const { activeSection } = useContext(ScrollPositionContext)
  const titleDivRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useApplyClassesInView<HTMLDivElement>({
    observedRef: titleDivRef,
    targetRef: underlineRef,
    classesToAdd: ['animate-growX', '[animation-delay:400ms]'],
    classesToRemove: ['opacity-0'],
    sectionId,
  })

  useApplyClassesInView<HTMLDivElement>({
    observedRef: titleDivRef,
    targetRef: titleRef,
    classesToAdd: ['textWritingAnimation'],
    classesToRemove: ['opacity-0'],
    sectionId,
  })

  useApplyClassesInView<HTMLDivElement>({
    observedRef: titleDivRef,
    targetRef: backgroundRef,
    classesToAdd: ['animate-fadeIn', '[animation-delay:700ms]'],
    classesToRemove: ['opacity-0'],
    sectionId,
  })

  return (
    <div ref={titleDivRef} className="relative pt-5 sm:pt-11">
      <h2
        ref={titleRef}
        className={`typo-title relative w-fit text-black dark:text-white`}
      >
        {title}
      </h2>
      <div
        ref={underlineRef}
        className="absolute -bottom-3.5 left-0 h-[6px] w-[132px] rounded-sm bg-highlight-1 content-['']  dark:bg-highlight-dark-1 sm:-bottom-4 sm:h-[8px] sm:w-[192px]"
      ></div>
      <div ref={backgroundRef}>
        <p
          className="typo-header-big absolute -bottom-8 -left-2 -z-10 whitespace-nowrap text-highlight-1 dark:text-highlight-dark-1 sm:-bottom-[84px] sm:-left-7"
          aria-hidden
        >
          {title}
        </p>
      </div>
    </div>
  )
}
