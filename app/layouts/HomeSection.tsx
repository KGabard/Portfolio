'use client'

import useInView from '@/hooks/useInView'
import LinkButton from '../components/LinkButton'
import { useContext, useEffect, useRef, useState } from 'react'
import { ScrollPositionContext } from '../providers/Providers'

type Props = {
  sectionId: number
}

function resetScroll() {
  document.body.style.overflow = 'hidden'
  window.scrollTo({ top: 0, behavior: 'auto' })
  document.documentElement.classList.remove('scroll-smooth')
}

export default function HomeSection({ sectionId }: Props) {
  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    if (window.scrollY > 0) {
      resetScroll()
    }

    const firstRenderOverTimeout = setTimeout(() => {
      document.body.style.overflow = 'auto'
      if (!document.documentElement.classList.contains('scroll-smooth')) {
        document.documentElement.classList.add('scroll-smooth')
      }
      setIsFirstRender(false)
    }, 1800)

    return () => {
      clearTimeout(firstRenderOverTimeout)
    }
  }, [])

  const sectionRef = useRef<HTMLElement>(null)
  const { inRestrictedView } = useInView<HTMLElement>({
    observedRef: sectionRef,
    options: { rootMargin: '-50%' },
  })
  const { setActiveSection } = useContext(ScrollPositionContext)

  useEffect(() => {
    if (inRestrictedView) {
      setActiveSection(sectionId)
    }
  }, [inRestrictedView, setActiveSection, sectionId])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="section-min-height flex w-full flex-col justify-center pt-[var(--header-height)]"
    >
      <div className="my-[96px] flex w-full flex-col items-center gap-[2vh]">
        <p
          className={`typo-title-small text-center text-black [animation-delay:200ms] after:[animation-delay:200ms] dark:text-white dark:after:[animation-delay:200ms] ${
            isFirstRender ? 'textWritingAnimation' : ''
          }`}
        >
          <strong className="animate-textAppear text-highlight-1 [animation-delay:200ms] dark:text-highlight-dark-1">
            Bonjour !
          </strong>{' '}
          &nbsp;Je m&apos;appelle
        </p>
        <div className="relative w-full">
          <h1
            className={`typo-title-big mx-auto w-fit text-center text-black [animation-delay:400ms] after:[animation-delay:400ms] dark:text-white dark:after:[animation-delay:400ms] ${
              isFirstRender ? 'textWritingAnimation' : ''
            }`}
          >
            Kevin Gabard
          </h1>
          <div className="absolute -left-[var(--margin-mobile)] -right-[var(--margin-mobile)] top-1/2 -z-10 flex max-w-[100vw] -translate-y-[40%] justify-center overflow-hidden sm:-left-[var(--margin-desktop)] sm:-right-[var(--margin-desktop)]">
            <p className="animate-fadeIn [animation-delay:1800ms]" aria-hidden>
              <span className="typo-header-big whitespace-nowrap text-highlight-1 dark:text-highlight-dark-1">
                Kevin Gabard
              </span>
            </p>
          </div>
        </div>
        <h2
          className={` typo-title text-center text-black [animation-delay:600ms] after:[animation-delay:600ms] dark:text-white dark:after:[animation-delay:600ms] ${
            isFirstRender ? 'textWritingAnimation' : ''
          }`}
        >
          Développeur{' '}
          <strong className="animate-textAppear text-highlight-1 [animation-delay:600ms] dark:text-highlight-dark-1">
            Frontend
          </strong>
        </h2>
        <p
          className={`typo-body text-center text-neutral-1 [animation-delay:800ms] after:[animation-delay:800ms] dark:text-neutral-3 dark:after:[animation-delay:800ms] ${
            isFirstRender ? 'textWritingAnimation' : ''
          }`}
        >
          Créativité et technique pour des sites web esthétiques et performants.
        </p>
        <div className="mt-[4vh] animate-fadeIn overflow-hidden [animation-delay:2150ms]">
          <div className="animate-slideIn [animation-delay:2150ms]">
            <LinkButton label="Projets" href={'#projects'} />
          </div>
        </div>
      </div>
    </section>
  )
}
