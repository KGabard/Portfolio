import AboutSection from './layouts/AboutSection'
import HomeSection from './layouts/HomeSection'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-[var(--content-max-width)] flex-col items-center px-[var(--margin-mobile)] md:px-[var(--margin-desktop)]">
      <HomeSection />
      <AboutSection />
    </main>
  )
}
