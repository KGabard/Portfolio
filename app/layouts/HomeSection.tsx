import LinkButton from '../components/LinkButton'
import SectionTitle from '../components/SectionTitle'

export default function HomeSection() {
  return (
    <section
      id="home"
      className="section-min-height flex w-full flex-col justify-center"
    >
      <div className="my-[96px] flex w-full flex-col items-center gap-[2vh]">
        <p className="typo-title-small text-center text-black dark:text-white">
          <strong className="text-highlight-1 dark:text-highlight-dark-1">
            Bonjour !
          </strong>{' '}
          Je m&apos;appelle
        </p>
        <div className="relative w-full">
          <h1 className="typo-title-big text-center text-black dark:text-white">
            Kevin Gabard
          </h1>
          <div className="absolute -left-[var(--margin-mobile)] -right-[var(--margin-mobile)] top-1/2 -z-10 flex max-w-[100vw] -translate-y-[40%] justify-center overflow-hidden md:-left-[var(--margin-desktop)] md:-right-[var(--margin-desktop)]">
            <p
              className="typo-header-big whitespace-nowrap text-highlight-1 dark:text-highlight-dark-1 "
              aria-hidden
            >
              Kevin Gabard
            </p>
          </div>
        </div>
        <h2 className="typo-title text-center text-black dark:text-white">
          Développeur{' '}
          <strong className="text-highlight-1 dark:text-highlight-dark-1">
            Frontend
          </strong>
        </h2>
        <p className="typo-body text-center text-neutral-1 dark:text-neutral-3">
          Créativité et technique pour des sites web esthétiques et performants.
        </p>
        <div className="mt-[4vh]">
          <LinkButton label="Projets" href={'#projects'} />
        </div>
      </div>
    </section>
  )
}
