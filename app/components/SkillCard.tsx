import Image from 'next/image'
import reactIcon from 'public/assets/icons/react-icon.png'
import htmlIcon from 'public/assets/icons/html-icon.png'
import cssIcon from 'public/assets/icons/css-icon.png'
import tsIcon from 'public/assets/icons/ts-icon.png'
import reduxIcon from 'public/assets/icons/redux-icon.png'
import nextIcon from 'public/assets/icons/next-icon.png'
import tailwindIcon from 'public/assets/icons/tailwind-icon.png'
import sassIcon from 'public/assets/icons/sass-icon.png'
import figmaIcon from 'public/assets/icons/figma-icon.png'
import jestIcon from 'public/assets/icons/jest-icon.png'

type Props = {
  skill: SkillType
}

export default function SkillCard({ skill }: Props) {
  let iconSrc: string | undefined
  let label: string

  switch (skill) {
    case 'html':
      iconSrc = htmlIcon.src
      label = 'HTML'
      break
    case 'css':
      iconSrc = cssIcon.src
      label = 'CSS'
      break
    case 'ts':
      iconSrc = tsIcon.src
      label = 'Typescript'
      break
    case 'react':
      iconSrc = reactIcon.src
      label = 'React'
      break
    case 'redux':
      iconSrc = reduxIcon.src
      label = 'Redux'
      break
    case 'next':
      iconSrc = nextIcon.src
      label = 'NextJs'
      break
    case 'tailwind':
      iconSrc = tailwindIcon.src
      label = 'Tailwind'
      break
    case 'sass':
      iconSrc = sassIcon.src
      label = 'SASS'
      break
    case 'figma':
      iconSrc = figmaIcon.src
      label = 'Figma'
      break
    case 'jest':
      iconSrc = jestIcon.src
      label = 'Jest'
      break
    default:
      iconSrc = undefined
      label = 'skill'
      break
  }

  return (
    <div className="group h-[88px] w-[88px] cursor-pointer rounded-lg bg-transparent [perspective:1000px] sm:h-[120px] sm:w-[120px]">
      <div className="relative h-full w-full duration-500 ease-[cubic-bezier(.7,.32,.62,1.54)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute flex h-full w-full items-center justify-center rounded-lg bg-white drop-shadow-small sm:drop-shadow-big [backface-visibility:hidden] dark:bg-neutral-dark-1">
          {iconSrc && (
            <Image
              className="h-[64px] w-[64px] sm:h-[96px] sm:w-[96px]"
              src={iconSrc}
              alt={`react`}
              width={96}
              height={96}
            />
          )}
        </div>
        <div className="bg-gray-100 absolute flex h-full  w-full items-center justify-center overflow-hidden rounded-lg bg-white drop-shadow-small sm:drop-shadow-big [backface-visibility:hidden] [transform:rotateY(180deg)] dark:bg-neutral-dark-1">
          <h2 className="typo-label text-neutral-1 dark:text-neutral-dark-3">
            {label}
          </h2>
          <p className='typo-header-small -z-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' aria-hidden>{label}</p>
        </div>
      </div>
    </div>
  )
}
