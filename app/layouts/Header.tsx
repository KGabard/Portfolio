import Navbar from '../components/Navbar'
import LogoFull from '../components/LogoFull'
import ToggleThemeBtn from '../components/ToggleThemeBtn'
import BurgerMenu from '../components/BurgerMenu'

export default function Header() {
  return (
    <header className="flex py-4 items-center justify-between bg-white px-24 dark:bg-neutral-dark-1">
      <LogoFull className="h-[55px] fill-black dark:fill-white" />
      <div className="flex items-center gap-6">
        <Navbar />
        <BurgerMenu />
        <ToggleThemeBtn />
      </div>
    </header>
  )
}
