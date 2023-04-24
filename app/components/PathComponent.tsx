import { parseBoldText } from '@/lib/utils'
import ocLogo from 'public/assets/logos/oc-logo.svg'
import edfLogo from 'public/assets/logos/edf-logo.svg'
import insaLogo from 'public/assets/logos/insa-logo.svg'
import Image from 'next/image'
import useApplyClassesInView from '@/hooks/useApplyClassesInView'
import { useRef } from 'react'

type Props = {
  institution: 'oc' | 'edf' | 'insa'
  dates: string
  qualification: string
  observedRef: React.RefObject<HTMLDivElement>
  pathId: number
  sectionId: number
  reversed?: boolean
}

export default function PathComponent({
  dates,
  institution,
  qualification,
  observedRef,
  pathId,
  sectionId,
  reversed = false,
}: Props) {
  let logoSrc: string | undefined
  let institutionName: string

  switch (institution) {
    case 'oc':
      logoSrc = ocLogo.src
      institutionName = 'Openclassrooms'
      break
    case 'edf':
      logoSrc = edfLogo.src
      institutionName = 'EDF'
      break
    case 'insa':
      logoSrc = insaLogo.src
      institutionName = 'INSA de Lyon'
      break
    default:
      logoSrc = undefined
      institutionName = ''
      break
  }

  const qualificationComponent = parseBoldText(qualification)

  const pathDivRef = useRef<HTMLDivElement>(null)
  const animationDelay = pathId * 300 + 500

  useApplyClassesInView<HTMLDivElement>({
    observedRef,
    targetRef: pathDivRef,
    classesToAdd: ['animate-fadeInAndUp'],
    classesToRemove: ['opacity-0'],
    sectionId,
  })

  return (
    <div
      ref={pathDivRef}
      className={`flex items-center ${
        reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div
        className={`relative hidden h-[176px] flex-1 items-center lg:flex ${
          reversed ? 'lg:justify-start' : 'lg:justify-end'
        }`}
      >
        {logoSrc && (
          <Image
            src={logoSrc}
            alt={institutionName}
            fill
            sizes="50vw"
            style={{ objectFit: 'contain' }}
          />
        )}
      </div>
      <div className="mr-3 h-4 w-4 rotate-45 rounded-sm bg-neutral-1 dark:bg-neutral-3 sm:mr-10 lg:mx-[30px] xl:mx-[96px]"></div>
      <div
        className={`flex flex-1 flex-col gap-1 ${
          reversed ? 'lg:items-end' : 'lg:items-start'
        }`}
      >
        <p className="typo-body w-fit text-neutral-1 dark:text-neutral-dark-3">
          {dates}
        </p>
        <h2 className="typo-title">{institutionName}</h2>
        <div
          className={`max-w-[390px] ${
            reversed ? 'lg:text-right' : 'lg:text-left'
          }`}
        >
          {qualificationComponent}
        </div>
      </div>
    </div>
  )
}
