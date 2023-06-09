'use client'

import Image from 'next/image'
import profilPicture from 'public/assets/images/profilPicture.png'
import frontPicture from 'public/assets/images/frontPicture.png'
import SectionTitle from '../components/SectionTitle'
import Link from 'next/link'
import useInView from '@/hooks/useInView'
import { useContext, useEffect, useRef } from 'react'
import { ScrollPositionContext } from '../providers/Providers'
import useApplyClassesInView from '@/hooks/useApplyClassesInView'
import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {
  sectionId: number
}

export default function AboutSection({ sectionId }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const { inRestrictedView } = useInView<HTMLElement>({
    observedRef: sectionRef,
    options: { rootMargin: '-50% 0% -50% 0%' },
  })
  const { setActiveSection } = useContext(ScrollPositionContext)

  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const profilPictureDivRef = useRef<HTMLDivElement>(null)
  const frontPictureDivRef = useRef<HTMLDivElement>(null)

  const { isScreenSmall } = useMediaQuery({ minWidth: 1024 })

  useApplyClassesInView({
    observedRef: paragraphRef,
    targetRef: paragraphRef,
    classesToAdd: [
      'animate-fadeInAndUp',
      `${isScreenSmall ? '[animation-delay:0ms]' : '[animation-delay:500ms]'}`,
    ],
    classesToRemove: ['opacity-0'],
    sectionId,
  })

  useApplyClassesInView({
    observedRef: profilPictureDivRef,
    targetRef: profilPictureDivRef,
    classesToAdd: ['animate-fadeInAndUp', '[animation-delay:700ms]'],
    classesToRemove: ['opacity-0'],
    sectionId,
  })

  useApplyClassesInView({
    observedRef: frontPictureDivRef,
    targetRef: frontPictureDivRef,
    classesToAdd: ['animate-fadeInAndUp', '[animation-delay:500ms]'],
    classesToRemove: ['opacity-0'],
    sectionId,
  })

  useEffect(() => {
    if (inRestrictedView) {
      setActiveSection(sectionId)
    }
  }, [inRestrictedView, setActiveSection, sectionId])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="my-[112px] flex w-full flex-col"
    >
      <SectionTitle title="A propos" sectionId={sectionId} />
      <div
        ref={frontPictureDivRef}
        className="relative mx-auto mb-4 mt-10 h-fit w-full max-w-[480px] px-4 lg:hidden"
      >
        <Image
          className="mx-auto h-fit w-full max-w-[480px] px-4 pb-5"
          src={frontPicture}
          alt="Kevin"
          width={5720}
          height={5514}
        />
      </div>
      <article className="typo-body lg:mt-14">
        <div
          ref={profilPictureDivRef}
          className="relative float-right hidden w-1/2 pl-8 lg:block"
        >
          <Image src={profilPicture} alt="Kevin" width={4730} height={6171} />
        </div>
        <p
          ref={paragraphRef}
          className="w-full text-neutral-1 dark:text-neutral-dark-3 2xl:w-1/2"
        >
          Bonjour ! Je suis Kevin, un développeur frontend basé à{' '}
          <strong className="typo-body-bold-color">Lyon</strong>.
          <br />
          <br />
          <strong className="typo-body-bold-color">Ingénieur</strong> de
          formation, j&apos;ai travaillé pendant sept ans dans le domaine de la{' '}
          <strong className="typo-body-bold-color">sûreté nucléaire</strong>.
          Cette expérience, ainsi que mes études, m&apos;ont permis de
          développer une{' '}
          <strong className="typo-body-bold-color">
            approche scientifique
          </strong>{' '}
          rigoureuse, un{' '}
          <strong className="typo-body-bold-color">esprit critique</strong>{' '}
          ainsi qu&apos;une compétence d&apos;
          <strong className="typo-body-bold-color">analyse</strong> et de{' '}
          <strong className="typo-body-bold-color">synthèse</strong> de
          l&apos;information. Ces qualités me permettent aujourd&apos;hui de
          m&apos;adapter à toute nouvelle mission et résoudre efficacement les
          éventuelles difficultés rencontrées.
          <br />
          <br />
          En parallèle de ma carrière, j&apos;ai également pratiqué la{' '}
          <strong className="typo-body-bold-color">danse latine</strong> au
          niveau <strong className="typo-body-bold-color">professionnel</strong>
          . J&apos;ai participé à des compétitions nationales et
          internationales, notamment aux{' '}
          <strong className="typo-body-bold-color">
            championnats du monde
          </strong>{' '}
          au Mexique. Cette passion m&apos;a toujours poussé à donner le
          meilleur de moi-même pour atteindre mes objectifs et a nourri ma{' '}
          <strong className="typo-body-bold-color">créativité</strong>. Ainsi
          j&apos;aime être force de proposition et ajouter une touche
          personnelle, originale et esthétique à mes projets.
          <br />
          <br />
          Je suis également{' '}
          <strong className="typo-body-bold-color">
            passionné d&apos;informatique
          </strong>{' '}
          depuis de nombreuses années et j&apos;aime réaliser des projets
          personnels et professionnels dans différents langages. En 2021
          j&apos;ai décidé de faire de cette passion{' '}
          <strong className="typo-body-bold-color">mon métier</strong> et
          c&apos;est naturellement que je me suis tourné vers le développement
          web et le domaine du frontend. J&apos;ai commencé à me former en
          autodidacte avant de suivre la{' '}
          <strong className="typo-body-bold-color">
            formation diplômante Openclassrooms
          </strong>{' '}
          qui m&apos;a permis d&apos;approfondir et consolider mes connaissances
          par la réalisation d&apos;une dizaine de projets professionnalisants.
          <br />
          <br />
          Fort de mon parcours et de mes passions, je suis convaincu de pouvoir
          vous offrir{' '}
          <strong className="typo-body-bold-color">
            un travail de qualité
          </strong>{' '}
          en tant que développeur frontend. Si vous cherchez un professionnel{' '}
          <strong className="typo-body-bold-color">
            passionné et polyvalent
          </strong>
          , je vous invite à découvrir mes projets ci-dessous et à me{' '}
          <Link
            className="relative after:absolute after:-bottom-0.5 after:-left-[3%] after:h-3 after:w-[106%] after:bg-highlight-1 after:opacity-[35%] after:content-[''] dark:after:bg-highlight-dark-1"
            href={`mailto:kev.gabard@gmail.com`}
          >
            contacter
          </Link>{' '}
          !
        </p>
      </article>
    </section>
  )
}
