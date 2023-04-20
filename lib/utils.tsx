import reactIcon from 'public/assets/icons/react-icon.png'
import htmlIcon from 'public/assets/icons/html-icon.png'
import cssIcon from 'public/assets/icons/css-icon.png'
import tsIcon from 'public/assets/icons/ts-icon.png'
import jsIcon from 'public/assets/icons/js-icon.png'
import reduxIcon from 'public/assets/icons/redux-icon.png'
import nextIcon from 'public/assets/icons/next-icon-black.png'
import nextIconDark from 'public/assets/icons/next-icon-white.png'
import tailwindIcon from 'public/assets/icons/tailwind-icon.png'
import sassIcon from 'public/assets/icons/sass-icon.png'
import figmaIcon from 'public/assets/icons/figma-icon.png'
import jestIcon from 'public/assets/icons/jest-icon.png'

export function parseBoldText(text: string): JSX.Element {
  const regex = /(\*\*)(.*?)\1/g
  let match
  let lastIndex = 0
  const boldText = []

  while ((match = regex.exec(text))) {
    const boldStartIndex = match.index
    const boldEndIndex = boldStartIndex + match[0].length
    const plainText = text.slice(lastIndex, boldStartIndex)
    if (plainText) {
      boldText.push(plainText)
    }
    boldText.push(
      <strong key={boldStartIndex} className="typo-body-bold-color">
        {match[2]}
      </strong>
    )
    lastIndex = boldEndIndex
  }

  if (lastIndex < text.length) {
    boldText.push(text.slice(lastIndex))
  }

  return (
    <p className="typo-body text-neutral-1 dark:text-neutral-dark-3">
      {boldText}
    </p>
  )
}

export function getSkillInfos(skill: SkillType) {
  switch (skill) {
    case 'react':
      return {
        iconSrc: reactIcon.src,
        darkIconSrc: undefined,
        label: 'React JS',
      }
    case 'html':
      return {
        iconSrc: htmlIcon.src,
        darkIconSrc: undefined,
        label: 'HTML',
      }
    case 'css':
      return {
        iconSrc: cssIcon.src,
        darkIconSrc: undefined,
        label: 'CSS',
      }
    case 'ts':
      return {
        iconSrc: tsIcon.src,
        darkIconSrc: undefined,
        label: 'Typescript',
      }
    case 'js':
      return {
        iconSrc: jsIcon.src,
        darkIconSrc: undefined,
        label: 'Javascript',
      }
    case 'redux':
      return {
        iconSrc: reduxIcon.src,
        darkIconSrc: undefined,
        label: 'Redux',
      }
    case 'next':
      return {
        iconSrc: nextIcon.src,
        darkIconSrc: nextIconDark.src,
        label: 'Next JS',
      }
    case 'tailwind':
      return {
        iconSrc: tailwindIcon.src,
        darkIconSrc: undefined,
        label: 'Tailwind',
      }
    case 'sass':
      return {
        iconSrc: sassIcon.src,
        darkIconSrc: undefined,
        label: 'SASS',
      }
    case 'figma':
      return {
        iconSrc: figmaIcon.src,
        darkIconSrc: undefined,
        label: 'Figma',
      }
    case 'jest':
      return {
        iconSrc: jestIcon.src,
        darkIconSrc: undefined,
        label: 'Jest',
      }
    default:
      return {
        iconSrc: undefined,
        darkIconSrc: undefined,
        label: undefined,
      }
  }
}
