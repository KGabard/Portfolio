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

export default function ProjectsSection() {
  return (
    <section id="projects" className="my-[112px] flex w-full flex-col">
      <SectionTitle title="Projets" />
      <div className="mt-10 sm:mt-12 md:mt-16 flex w-full flex-col sm:gap-12 gap-8">
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
          reverse={true}
        />
      </div>
    </section>
  )
}
