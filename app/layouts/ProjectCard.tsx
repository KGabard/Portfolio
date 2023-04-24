import { parseBoldText } from '@/lib/utils'
import Image from 'next/image'
import LinkButton from '../components/LinkButton'
import SkillTag from '../components/SkillTag'
import { useRef } from 'react'
import useApplyClassesInView from '@/hooks/useApplyClassesInView'

type Props = {
  bigImgSrc: string
  smallImgSrc: string
  title: string
  skills: SkillType[]
  summary: string
  githubSrc: string
  sectionId: number
  liveSrc?: string
  reverse?: boolean
}

export default function ProjectCard({
  bigImgSrc,
  smallImgSrc,
  title,
  skills,
  summary,
  githubSrc,
  sectionId,
  liveSrc,
  reverse = false,
}: Props) {
  const summaryComponent = parseBoldText(summary)

  const cardDivRef = useRef<HTMLDivElement>(null)

  useApplyClassesInView<HTMLDivElement>({
    observedRef: cardDivRef,
    targetRef: cardDivRef,
    classesToAdd: [`${reverse ? 'animate-fadeInAndLeft' : 'animate-fadeInAndRight'}`],
    classesToRemove: ['opacity-0'],
    sectionId,
  })

  return (
    <div
      ref={cardDivRef}
      className={`mx-auto flex h-fit w-full min-w-[288px] max-w-[90%] flex-col items-center gap-4 rounded-3xl bg-white p-8 drop-shadow-big dark:bg-neutral-dark-1 sm:max-w-[100%] md:max-w-[680px] xl:h-[480px] xl:min-w-[1024px] xl:max-w-[1150px] xl:gap-8 ${
        reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'
      }`}
    >
      <div className="relative aspect-[14/9] w-full xl:w-[57%]">
        <Image
          className="hidden sm:block"
          src={bigImgSrc}
          alt={title}
          fill
          sizes="80vw, (min-width: 640px) 70vw, (min-width: 1280px) 50vw"
          style={{ objectFit: 'contain' }}
        />
        <Image
          className="rounded-md sm:hidden"
          src={smallImgSrc}
          alt={title}
          fill
          sizes="80vw, (min-width: 640px) 70vw, (min-width: 1280px) 50vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="flex h-full w-full flex-col xl:flex-1">
        <h2
          className={`typo-title-small relative pb-3 text-black after:absolute after:-bottom-0 after:left-0 after:h-1.5 after:w-[128px] after:rounded-sm after:bg-highlight-1 after:content-[''] dark:text-white dark:after:bg-highlight-dark-1 ${
            reverse ? 'xl:text-end xl:after:left-auto xl:after:right-0' : ''
          }`}
        >
          {title}
        </h2>
        <div
          className={`mt-7 flex flex-wrap gap-4 ${
            reverse ? 'xl:justify-end' : ''
          }`}
        >
          {skills.map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
        </div>
        <div
          className={`mt-6 w-full scrollbar scrollbar-track-white scrollbar-thumb-neutral-3 scrollbar-thumb-rounded-md scrollbar-w-1 dark:scrollbar-track-neutral-dark-1  dark:scrollbar-thumb-neutral-dark-2 xl:overflow-y-hidden xl:hover:overflow-y-auto ${
            reverse ? 'xl:text-end' : ''
          }`}
        >
          {summaryComponent}
        </div>
        <div
          className={`mt-8 flex flex-1 items-end gap-4 ${
            reverse ? 'xl:justify-end' : ''
          }`}
        >
          {liveSrc && (
            <LinkButton
              label="Live"
              href={liveSrc}
              external={true}
              icon="external"
              levitate={true}
            />
          )}
          <LinkButton
            label="Code"
            href={githubSrc}
            external={true}
            icon="github"
            levitate={true}
          />
        </div>
      </div>
    </div>
  )
}
