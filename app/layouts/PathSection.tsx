'use client'

import useInView from '@/hooks/useInView'
import PathComponent from '../components/PathComponent'
import SectionTitle from '../components/SectionTitle'
import { useContext, useEffect, useRef } from 'react'
import { ScrollPositionContext } from '../providers/Providers'
import TriangleSVG from '../components/svgs/TriangleSVG'

type Props = {
  sectionId: number
}

export default function PathSection({ sectionId }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const { inRestrictedView } = useInView<HTMLElement>({
    observedRef: sectionRef,
    options: { rootMargin: '-50% 0% -50% 0%' },
  })
  const { setActiveSection } = useContext(ScrollPositionContext)

  useEffect(() => {
    if (inRestrictedView) {
      setActiveSection(sectionId)
    }
  }, [inRestrictedView, setActiveSection, sectionId])

  const pathListDivRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={sectionRef}
      id="path"
      className="my-[112px] flex w-full flex-col"
    >
      <SectionTitle title="Parcours" sectionId={sectionId} />
      <div
        ref={pathListDivRef}
        className="relative mx-auto mt-14 flex flex-col gap-12 lg:mx-0 lg:w-full"
      >
        <PathComponent
          institution="oc"
          dates="2022-2023"
          qualification="Diplôme **Développeur d'application JavaScript React**"
          observedRef={pathListDivRef}
          pathId={0}
          sectionId={sectionId}
        />
        <PathComponent
          institution="edf"
          dates="2015-2022"
          qualification="Ingénieur mécanique en **sûreté nucléaire**"
          reversed={true}
          observedRef={pathListDivRef}
          pathId={1}
          sectionId={sectionId}
        />
        <PathComponent
          institution="insa"
          dates="2010-2015"
          qualification="Diplôme **Génie Énergétique et Environnement**"
          observedRef={pathListDivRef}
          pathId={2}
          sectionId={sectionId}
        />
        <div className="absolute left-0 top-0 -z-10 h-full w-1 translate-x-1.5 rounded-full bg-neutral-1 drop-shadow-sharp dark:bg-neutral-dark-3 lg:left-1/2 lg:-translate-x-1/2"></div>
        <TriangleSVG className="absolute -top-0.5 left-2 h-5 w-5 -translate-x-1/2 text-neutral-1 dark:text-neutral-dark-3 lg:left-1/2 " />
      </div>
    </section>
  )
}
