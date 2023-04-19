import reactIcon from 'public/assets/icons/react-icon.png'
import htmlIcon from 'public/assets/icons/html-icon.png'
import cssIcon from 'public/assets/icons/css-icon.png'
import tsIcon from 'public/assets/icons/ts-icon.png'
import jsIcon from 'public/assets/icons/js-icon.png'
import reduxIcon from 'public/assets/icons/redux-icon.png'
import nextIcon from 'public/assets/icons/next-icon.png'
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
        label: 'React',
      }
    case 'html':
      return {
        iconSrc: htmlIcon.src,
        label: 'HTML',
      }
    case 'css':
      return {
        iconSrc: cssIcon.src,
        label: 'CSS',
      }
    case 'ts':
      return {
        iconSrc: tsIcon.src,
        label: 'Typescript',
      }
    case 'js':
      return {
        iconSrc: jsIcon.src,
        label: 'Javascript',
      }
    case 'redux':
      return {
        iconSrc: reduxIcon.src,
        label: 'Redux',
      }
    case 'next':
      return {
        iconSrc: nextIcon.src,
        label: 'Next',
      }
    case 'tailwind':
      return {
        iconSrc: tailwindIcon.src,
        label: 'Tailwind',
      }
    case 'sass':
      return {
        iconSrc: sassIcon.src,
        label: 'SASS',
      }
    case 'figma':
      return {
        iconSrc: figmaIcon.src,
        label: 'Figma',
      }
    case 'jest':
      return {
        iconSrc: jestIcon.src,
        label: 'Jest',
      }
    default:
      return {
        iconSrc: undefined,
        label: undefined,
      }
  }
}
