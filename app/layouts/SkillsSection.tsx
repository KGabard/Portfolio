'use client'

import { useContext, useEffect, useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import useInView from '@/hooks/useInView'
import { ScrollPositionContext } from '../providers/Providers'
import useApplyClassesInView from '@/hooks/useApplyClassesInView'

type Props = {
  sectionId: number
}

export default function SkillsSection({ sectionId }: Props) {
  const mySkills: SkillType[] = [
    'html',
    'css',
    'ts',
    'react',
    'redux',
    'next',
    'sass',
    'tailwind',
    'figma',
    'jest',
    'apollo',
    'mui',
    'storybook',
  ]

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

  const skillsListDivRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="my-[112px] flex w-full flex-col gap-10"
    >
      <SectionTitle title="Compétences" sectionId={sectionId} />
      <div
        ref={skillsListDivRef}
        className="mx-auto flex max-w-[720px] flex-wrap justify-center gap-x-8 gap-y-6 p-5 sm:mt-8 sm:gap-x-14 sm:gap-y-10"
      >
        {mySkills.map((skill, index) => (
          <SkillCard
            key={skill}
            skill={skill}
            skillId={index}
            observedRef={skillsListDivRef}
            sectionId={sectionId}
          />
        ))}
      </div>
    </section>
  )
}
