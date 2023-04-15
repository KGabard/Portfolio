import Image from 'next/image'
import logoFull from 'public/assets/logos/logo-full-black.svg'
import Navbar from '../components/Navbar'

export default function Header() {
  return (
    <header className="flex h-[88px] bg-white justify-between px-24 items-center dark:bg-neutral-dark-1">
      <Image src={logoFull} alt="Kevin Gabard" height={55} />
      <Navbar />
    </header>
  )
}
