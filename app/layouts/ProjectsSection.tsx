'use client'

import SectionTitle from '../components/SectionTitle'

import perudoPresentation from 'public/assets/images/perudo-presentation.png'
import perudoPresentationFS from 'public/assets/images/perudo-presentation-fullscreen.png'
import hrnetPresentation from 'public/assets/images/hrnet-presentation.png'
import hrnetPresentationFS from 'public/assets/images/hrnet-presentation-fullscreen.png'
import argentBankPresentation from 'public/assets/images/argent-bank-presentation.png'
import argentBankPresentationFS from 'public/assets/images/argent-bank-presentation-fullscreen.png'
import sportSeePresentation from 'public/assets/images/sport-see-presentation.png'
import sportSeePresentationFS from 'public/assets/images/sport-see-presentation-fullscreen.png'
import kasaPresentation from 'public/assets/images/kasa-presentation.png'
import kasaPresentationFS from 'public/assets/images/kasa-presentation-fullscreen.png'
import billedPresentation from 'public/assets/images/billed-presentation.png'
import billedPresentationFS from 'public/assets/images/billed-presentation-fullscreen.png'
import petitsPlatsPresentation from 'public/assets/images/petits-plats-presentation.png'
import petitsPlatsPresentationFS from 'public/assets/images/petits-plats-presentation-fullscreen.png'
import fisheyePresentation from 'public/assets/images/fisheye-presentation.png'
import fisheyePresentationFS from 'public/assets/images/fisheye-presentation-fullscreen.png'
import gameOnPresentation from 'public/assets/images/game-on-presentation.png'
import gameOnPresentationFS from 'public/assets/images/game-on-presentation-fullscreen.png'
import ohmyfoodPresentation from 'public/assets/images/ohmyfood-presentation.png'
import ohmyfoodPresentationFS from 'public/assets/images/ohmyfood-presentation-fullscreen.png'
import bookiPresentation from 'public/assets/images/booki-presentation.png'
import bookiPresentationFS from 'public/assets/images/booki-presentation-fullscreen.png'
import ProjectCard from './ProjectCard'
import useInView from '@/hooks/useInView'
import { useContext, useEffect, useRef } from 'react'
import { ScrollPositionContext } from '../providers/Providers'

type Props = {
  sectionId: number
}

export default function ProjectsSection({ sectionId }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const { inRestrictedView } = useInView<HTMLElement>({
    observedRef: sectionRef,
    options: { rootMargin: '-50% 0% -50% 0%' },
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
      id="projects"
      className="my-[112px] flex w-full flex-col"
    >
      <SectionTitle title="Projets" sectionId={sectionId} />
      <div className="mt-10 flex w-full flex-col gap-8 sm:mt-12 sm:gap-12 md:mt-16">
        <ProjectCard
          bigImgSrc={perudoPresentation.src}
          smallImgSrc={perudoPresentationFS.src}
          title={'Perudo Game App'}
          skills={['js', 'react', 'redux', 'sass', 'figma']}
          summary={
            'Application qui permet de jouer au jeu de dé **Perudo** et de défier des amis ou des **IA capables de bluffer**.'
          }
          githubSrc={'https://github.com/KGabard/perudo-game-app'}
          liveSrc={'https://kgabard.github.io/perudo-game-app/'}
          sectionId={sectionId}
          style={{ animationDelay: '300ms' }}
        />
        <ProjectCard
          bigImgSrc={hrnetPresentation.src}
          smallImgSrc={hrnetPresentationFS.src}
          title={'HRnet'}
          skills={['ts', 'react', 'sass', 'figma']}
          summary={
            "Application interne de **gestion de base de données** d'employés. Elle intègre un **package npm personnalisé** pour l'affichage des données sous forme d'une table."
          }
          githubSrc={'https://github.com/KGabard/OC_P14_HRnet'}
          liveSrc={'https://kgabard.github.io/OC_P14_HRnet/'}
          sectionId={sectionId}
          reverse={true}
        />
        <ProjectCard
          bigImgSrc={argentBankPresentation.src}
          smallImgSrc={argentBankPresentationFS.src}
          title={'Argent Bank'}
          skills={['ts', 'react', 'redux', 'sass']}
          summary={
            'Application de **gestion de compte en banque** incluant un **système de connexion sécurisée** via un backend utilisant des tokens JWT. La gestion du state et de sa persistance et assurée par Redux Toolkit et Redux Persist.'
          }
          githubSrc={'https://github.com/KGabard/OC_P13_ArgentBank_Frontend'}
          sectionId={sectionId}
        />
        <ProjectCard
          bigImgSrc={sportSeePresentation.src}
          smallImgSrc={sportSeePresentationFS.src}
          title={'Sport See App'}
          skills={['ts', 'react', 'sass']}
          summary={
            'Application permettant aux utilisateurs de suivre leurs **entraînements sportifs** grâce à une interface intuitive et des **graphiques dynamiques** issus de la librairie **Recharts**.'
          }
          githubSrc={'https://github.com/KGabard/OC_P12_SportSee'}
          liveSrc={'https://kgabard.github.io/OC_P12_SportSee/'}
          sectionId={sectionId}
          reverse={true}
        />
        <ProjectCard
          bigImgSrc={kasaPresentation.src}
          smallImgSrc={kasaPresentationFS.src}
          title={'Kasa'}
          skills={['ts', 'react', 'sass']}
          summary={
            "Kasa est une plateforme de **location d'appartements** entre particuliers, développée avec React et React Router, et organisée en **composants réutilisables**."
          }
          githubSrc={'https://github.com/KGabard/OC_P11_Kasa'}
          liveSrc={'https://kgabard.github.io/OC_P11_Kasa/'}
          sectionId={sectionId}
        />
        <ProjectCard
          bigImgSrc={billedPresentation.src}
          smallImgSrc={billedPresentationFS.src}
          title={'Billed'}
          skills={['html', 'css', 'js', 'jest']}
          summary={
            "Projet visant à **corriger des bugs** et à mettre en place des **tests unitaires et d'intégration** pour une solution Saas destinée aux équipes de ressources humaines."
          }
          githubSrc={'https://github.com/KGabard/OC_P9_Billed_Frontend'}
          sectionId={sectionId}
          reverse={true}
        />
        <ProjectCard
          bigImgSrc={petitsPlatsPresentation.src}
          smallImgSrc={petitsPlatsPresentationFS.src}
          title={'Les Petits Plats'}
          skills={['html', 'css', 'ts', 'sass']}
          summary={
            "Site de **recettes de cuisine** incluant une recherche par mots clés et par tag. La librairie Benchmark.js a permis l'évaluation et la comparaison de **différents algorithmes de recherche** afin de déterminer le plus performant."
          }
          githubSrc={'https://github.com/KGabard/OC_P7_LesPetitsPlats'}
          liveSrc={'https://kgabard.github.io/OC_P7_LesPetitsPlats/'}
          sectionId={sectionId}
        />
        <ProjectCard
          bigImgSrc={fisheyePresentation.src}
          smallImgSrc={fisheyePresentationFS.src}
          title={'Fisheye'}
          skills={['html', 'css', 'ts', 'sass']}
          summary={
            "Site dédié aux **photographes indépendants**. Une attention particulière est portée à l'**accessibilité** via les attributs ARIA, la navigation au clavier et l'utilisation du lecteur d'écran."
          }
          githubSrc={'https://github.com/KGabard/OC_P6_fisheye'}
          liveSrc={'https://kgabard.github.io/OC_P6_fisheye/'}
          sectionId={sectionId}
          reverse={true}
        />
        <ProjectCard
          bigImgSrc={gameOnPresentation.src}
          smallImgSrc={gameOnPresentationFS.src}
          title={'Game On'}
          skills={['html', 'css', 'ts', 'sass']}
          summary={
            "Site web de présentation d'**événements liés au jeu vidéo**. Il inclut un **formulaire d'inscription** rendu fonctionnel grâce à Typescript."
          }
          githubSrc={'https://github.com/KGabard/OC_P4_GameOn'}
          liveSrc={'https://kgabard.github.io/OC_P4_GameOn/'}
          sectionId={sectionId}
        />
        <ProjectCard
          bigImgSrc={ohmyfoodPresentation.src}
          smallImgSrc={ohmyfoodPresentationFS.src}
          title={'Ohmyfood'}
          skills={['html', 'css', 'sass', 'figma']}
          summary={
            "Site web de **restauration gastronomique** avec menus personnalisables. Afin d'améliorer l'expérience utilisateur, le site est enrichi de **nombreuses animations CSS**."
          }
          githubSrc={'https://github.com/KGabard/OC_P3_ohmyfood-app/'}
          liveSrc={'https://kgabard.github.io/OC_P3_ohmyfood-app/'}
          sectionId={sectionId}
          reverse={true}
        />
        <ProjectCard
          bigImgSrc={bookiPresentation.src}
          smallImgSrc={bookiPresentationFS.src}
          title={'Booki'}
          skills={['html', 'css', 'figma']}
          summary={
            'Le projet Booki consiste à intégrer des **maquettes** en un **site web responsive**. Figma est utilisé pour schématiser le site avant intégration.'
          }
          githubSrc={'https://github.com/KGabard/OC_P2_booki'}
          liveSrc={'https://kgabard.github.io/OC_P2_booki/'}
          sectionId={sectionId}
        />
      </div>
    </section>
  )
}
