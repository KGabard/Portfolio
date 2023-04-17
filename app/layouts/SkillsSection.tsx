import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'

export default function SkillsSection() {
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

  return (
    <section
      id="skill"
      className="section-min-height my-[112px] flex w-full flex-col gap-10"
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
