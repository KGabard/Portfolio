import AboutSection from './layouts/AboutSection'
import HomeSection from './layouts/HomeSection'
import { Inter } from 'next/font/google'
import SkillsSection from './layouts/SkillsSection'
import PathSection from './layouts/PathSection'
import ProjectsSection from './layouts/ProjectsSection'
import ContactSection from './layouts/ContactSection'
import SocialsBar from './components/SocialsBar'
import SideNavBar from './components/SideNavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-[var(--content-max-width)] flex-col items-center px-[var(--margin-mobile)] sm:px-[var(--margin-desktop)]">
      <HomeSection sectionId={0} />
      <AboutSection sectionId={1} />
      <SkillsSection sectionId={2} />
      <PathSection sectionId={3} />
      <ProjectsSection sectionId={4} />
      <ContactSection sectionId={5} />
      <SocialsBar />
      <SideNavBar />
    </main>
  )
}
