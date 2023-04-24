'use client'

import { useContext, useEffect } from 'react'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import useInView from '@/hooks/useInView'
import { ScrollPositionContext } from '../providers/Providers'

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
  ]

  const { ref: sectionRef, inView } = useInView<HTMLElement>({
    options: { rootMargin: '-50%' },
  })
  const { setActiveSection } = useContext(ScrollPositionContext)

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionId)
    }
  }, [inView, setActiveSection, sectionId])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="my-[112px] flex w-full flex-col gap-10"
    >
      <SectionTitle title="Compétences" />
      <div className="mx-auto flex max-w-[720px] flex-wrap justify-center gap-x-8 gap-y-6 p-5 sm:mt-8 sm:gap-x-14 sm:gap-y-10">
        {mySkills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </section>
  )
}
