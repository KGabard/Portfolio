import LinkButton from '../components/LinkButton'

export default function HomeSection() {
  return (
    <section
      id="home"
      className="section-min-height flex w-full flex-col justify-center"
    >
      <div className="mb-[10%] mt-4 flex w-full flex-col items-center gap-[2vh]">
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
          <p
            className="typo-header-big absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-highlight-1 opacity-[15%] blur-sm dark:text-highlight-dark-1"
            aria-hidden
          >
            Kevin Gabard
          </p>
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
        <div className='mt-[4vh]'>
          <LinkButton label="Projets" href={'#projects'} />
        </div>
      </div>
    </section>
  )
}
