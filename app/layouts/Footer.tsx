import LogoFullSVG from '../components/svgs/LogoFullSVG'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="my-[112px] flex w-full flex-col gap-12 px-[var(--margin-mobile)] sm:px-[var(--margin-desktop)]"
    >
      <div className="h-2 w-full rounded-sm bg-neutral-3 dark:bg-neutral-dark-2 "></div>
      <div className='flex flex-col gap-2 items-start'>
        <LogoFullSVG className="h-[55px] fill-black dark:fill-white" />
        <p className="typo-body text-neutral-1 dark:text-neutral-dark-3">
          © 2023 - Design et intégration par Kevin Gabard
        </p>
      </div>
    </footer>
  )
}
