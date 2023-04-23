'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

type ScrollPositionContextProps = {
  activeSection: number
  setActiveSection: Dispatch<SetStateAction<number>>
}

export const ScrollPositionContext = createContext<ScrollPositionContextProps>({
  activeSection: 0,
  setActiveSection: (): number => 0,
})

export default function Providers({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <ThemeProvider attribute="class">
      <ScrollPositionContext.Provider
        value={{ activeSection, setActiveSection }}
      >
        {children}
      </ScrollPositionContext.Provider>
    </ThemeProvider>
  )
}
