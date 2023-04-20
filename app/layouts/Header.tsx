import Navbar from '../components/Navbar'
import LogoFullSVG from '../components/svgs/LogoFullSVG'
import ToggleThemeBtn from '../components/ToggleThemeBtn'
import BurgerMenu from '../components/BurgerMenu'
import LogoShortSVG from '../components/svgs/LogoShortSVG'

export default function Header() {
  return (
    <header className="flex w-full justify-center bg-white dark:bg-neutral-dark-1">
      <div className="flex h-[var(--header-height)] w-full max-w-[var(--content-max-width)] items-center justify-between px-[var(--margin-mobile)] sm:px-[var(--margin-desktop)]">
        <LogoFullSVG className="hidden h-[55px] fill-black dark:fill-white sm:block" />
        <LogoShortSVG className="block h-[55px] fill-black dark:fill-white sm:hidden" />
        <div className="flex items-center gap-6">
          <Navbar />
          <BurgerMenu />
          <ToggleThemeBtn />
        </div>
      </div>
    </header>
  )
}
