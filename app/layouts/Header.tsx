import Navbar from '../components/Navbar'
import LogoFull from '../components/LogoFull'
import ToggleThemeBtn from '../components/ToggleThemeBtn'
import BurgerMenu from '../components/BurgerMenu'

export default function Header() {
  return (
    <header className="flex w-full justify-center bg-white dark:bg-neutral-dark-1">
      <div className="flex h-[var(--header-height)] w-full max-w-[var(--content-max-width)] items-center justify-between px-[var(--margin-desktop)]">
        <LogoFull className="h-[55px] fill-black dark:fill-white" />
        <div className="flex items-center gap-6">
          <Navbar />
          <BurgerMenu />
          <ToggleThemeBtn />
        </div>
      </div>
    </header>
  )
}
