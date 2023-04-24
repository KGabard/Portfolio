import Image from 'next/image'
import { getSkillInfos } from '@/lib/utils'
import useApplyClassesInView from '@/hooks/useApplyClassesInView'
import { useRef } from 'react'

type Props = {
  skill: SkillType
  skillId: number
  observedRef: React.RefObject<HTMLDivElement>
  sectionId: number
}

export default function SkillCard({
  skill,
  skillId,
  observedRef,
  sectionId,
}: Props) {
  const { iconSrc, darkIconSrc, label } = getSkillInfos(skill)

  const skillDivRef = useRef<HTMLDivElement>(null)
  const animationDelay = skillId * 100 + 500

  console.log('Card ID:', skillId, 'delay:', animationDelay)

  useApplyClassesInView<HTMLDivElement>({
    observedRef,
    targetRef: skillDivRef,
    classesToAdd: ['animate-fadeInAndRight'],
    classesToRemove: ['opacity-0'],
    sectionId,
  })

  return (
    <div
      ref={skillDivRef}
      className="group h-[88px] w-[88px] cursor-pointer rounded-lg bg-transparent [perspective:1000px] hover:z-10 sm:h-[120px] sm:w-[120px]"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="group-hover:flipFwrd relative h-full w-full transition-all duration-500 ease-[cubic-bezier(.7,.32,.62,1.54)] [transform-style:preserve-3d]">
        <div className="absolute flex h-full w-full items-center justify-center rounded-lg bg-white drop-shadow-small [backface-visibility:hidden] dark:bg-neutral-dark-1 sm:drop-shadow-big">
          {iconSrc && (
            <Image
              className={`h-[64px] w-[64px] sm:h-[96px] sm:w-[96px] ${
                darkIconSrc ? 'dark:hidden' : ''
              }`}
              src={iconSrc}
              alt={`react`}
              width={96}
              height={96}
            />
          )}
          {darkIconSrc && (
            <Image
              className="hidden h-[64px] w-[64px] dark:block sm:h-[96px] sm:w-[96px]"
              src={darkIconSrc}
              alt={`react`}
              width={96}
              height={96}
            />
          )}
        </div>
        <div className="bg-gray-100 absolute flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white drop-shadow-small [backface-visibility:hidden] [transform:rotateY(180deg)] dark:bg-neutral-dark-1 sm:drop-shadow-big">
          {label && (
            <h2 className="typo-label text-neutral-1 dark:text-neutral-dark-3">
              {label}
            </h2>
          )}
          {label && (
            <p
              className="typo-header-small absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
              aria-hidden
            >
              {label}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
