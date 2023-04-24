import { useEffect, useState } from "react"

type Props = {
  minWidth: number
}
export default function useMediaQuery({ minWidth }: Props) {
  const [isScreenSmall, setIsScreenSmall] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`)
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsScreenSmall(!e.matches)
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange)
    setIsScreenSmall(!mediaQuery.matches)
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [minWidth])

  return { isScreenSmall }
}
