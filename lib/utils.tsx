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

  return <p className="typo-body text-neutral-1 dark:text-neutral-dark-3">{boldText}</p>
}
