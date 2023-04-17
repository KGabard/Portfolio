import { parseBoldText } from '@/lib/utils'
import ocLogo from 'public/assets/logos/oc-logo.svg'
import edfLogo from 'public/assets/logos/edf-logo.svg'
import insaLogo from 'public/assets/logos/insa-logo.svg'
import Image from 'next/image'

type Props = {
  institution: 'oc' | 'edf' | 'insa'
  dates: string
  qualification: string
  reversed?: boolean
}

export default function PathComponent({
  dates,
  institution,
  qualification,
  reversed = false,
}: Props) {
  let logoSrc: string | undefined
  let institutionName: string
  let width: number
  let height: number

  switch (institution) {
    case 'oc':
      logoSrc = ocLogo.src
      institutionName = 'Openclassrooms'
      width = 432
      height = 72
      break
    case 'edf':
      logoSrc = edfLogo.src
      institutionName = 'EDF'
      width = 380
      height = 180
      break
    case 'insa':
      logoSrc = insaLogo.src
      institutionName = 'INSA de Lyon'
      width = 432
      height = 97
      break
    default:
      logoSrc = undefined
      institutionName = ''
      width = 0
      height = 0
      break
  }

  const qualificationComponent = parseBoldText(qualification)

  return (
    <div
      className={`flex items-center ${
        reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div
        className={`lg:flex hidden relative h-[176px] flex-1 items-center ${
          reversed ? 'lg:justify-start' : 'lg:justify-end'
        }`}
      >
        {logoSrc && (
          <Image
            src={logoSrc}
            alt={institutionName}
            width={width}
            height={height}
          />
        )}
      </div>
      <div className="xl:mx-[96px] lg:mx-[30px] sm:mr-10 mr-3 h-4 w-4 rotate-45 rounded-sm bg-neutral-1 dark:bg-neutral-3"></div>
      <div
        className={`flex flex-1 flex-col gap-1 ${
          reversed ? 'lg:items-end' : 'lg:items-start'
        }`}
      >
        <p className="typo-body w-fit text-neutral-1 dark:text-neutral-dark-3">
          {dates}
        </p>
        <h2 className="typo-title">{institutionName}</h2>
        <div className={`max-w-[390px] ${
          reversed ? 'lg:text-right' : 'lg:text-left'
        }`}>{qualificationComponent}</div>
      </div>
    </div>
  )
}
