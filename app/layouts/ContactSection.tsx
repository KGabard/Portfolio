'use client'

import Link from 'next/link'
import SectionTitle from '../components/SectionTitle'
import useInView from '@/hooks/useInView'
import { useContext, useEffect, useRef } from 'react'
import { ScrollPositionContext } from '../providers/Providers'
import useApplyClassesInView from '@/hooks/useApplyClassesInView'

type Props = {
  sectionId: number
}

export default function ContactSection({ sectionId }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const { inRestrictedView } = useInView<HTMLElement>({
    observedRef: sectionRef,
    options: { rootMargin: '-50%' },
  })
  const { setActiveSection } = useContext(ScrollPositionContext)

  useEffect(() => {
    if (inRestrictedView) {
      setActiveSection(sectionId)
    }
  }, [inRestrictedView, setActiveSection, sectionId])

  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useApplyClassesInView<HTMLElement>({
    observedRef: sectionRef,
    targetRef: paragraphRef,
    classesToAdd: ['animate-fadeInAndUp', '[animation-delay:500ms]'],
    classesToRemove: ['opacity-0'],
    sectionId,
  })

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="mb-[200px] mt-[112px] flex w-full flex-col gap-10"
    >
      <SectionTitle title="Contact" sectionId={sectionId} />
      <p
        ref={paragraphRef}
        className="typo-body w-full text-neutral-1 dark:text-neutral-dark-3"
      >
        Je suis actuellement disponible pour m&apos;investir dans de nouveaux
        projets, n&apos;hésitez pas à me contacter si vous souhaitez que nous
        travaillions ensemble.
        <br />
        <br />
        Envoyez-moi un email à{' '}
        <Link
          className="relative after:absolute after:-bottom-0.5 after:-left-[1%] after:h-3 after:w-[102%] after:bg-highlight-1 after:opacity-[35%] after:content-[''] dark:after:bg-highlight-dark-1"
          href={`mailto:kev.gabard@gmail.com`}
        >
          kev.gabard@gmail.com
        </Link>{' '}
        et parlons de votre projet !
      </p>
    </section>
  )
}
