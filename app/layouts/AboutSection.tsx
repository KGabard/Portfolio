import Image from 'next/image'
import profilPicture from 'public/assets/images/Image3.png'
import frontPicture from 'public/assets/images/Image5.png'
import SectionTitle from '../components/SectionTitle'

export default function AboutSection() {
  return (
    <section id="about" className="my-[112px] flex flex-col">
      <SectionTitle title="A propos" />
      <div className="relative mx-auto mt-10 h-fit w-full max-w-[480px] px-4 mb-4 after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-b after:from-transparent after:from-55% after:to-neutral-bg after:to-[95%] after:text-white after:content-[''] dark:after:from-70% dark:after:to-neutral-dark-bg dark:after:to-95% lg:hidden">
        <Image
          className="mx-auto h-fit w-full max-w-[480px] px-4 pb-5"
          src={frontPicture}
          alt="Kevin"
          width={5720}
          height={5514}
        />
      </div>
      <article className="typo-body lg:mt-14">
        <div className="relative float-right hidden h-fit w-1/2 pl-8 after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-b after:from-transparent after:from-60% after:to-neutral-bg after:to-[93%] after:text-white after:content-[''] dark:after:from-50% dark:after:to-neutral-dark-bg dark:after:to-95% lg:block">
          <Image src={profilPicture} alt="Kevin" width={4730} height={6171} />
        </div>
        Bonjour ! Je suis Kevin, un développeur frontend basé à{' '}
        <strong className="typo-body-bold-color">Lyon</strong>.
        <br />
        <br />
        <strong className="typo-body-bold-color">Ingénieur</strong> de
        formation, j&apos;ai travaillé pendant sept ans dans le domaine de la{' '}
        <strong className="typo-body-bold-color">sûreté nucléaire</strong>.
        Cette expérience, ainsi que mes études, m&apos;ont permis de développer
        une{' '}
        <strong className="typo-body-bold-color">approche scientifique</strong>{' '}
        rigoureuse, un{' '}
        <strong className="typo-body-bold-color">esprit critique</strong> ainsi
        qu&apos;une compétence d&apos;
        <strong className="typo-body-bold-color">analyse</strong> et de{' '}
        <strong className="typo-body-bold-color">synthèse</strong> de
        l&apos;information. Ces qualités me permettent aujourd&apos;hui de
        m&apos;adapter à toute nouvelle mission et résoudre efficacement les
        éventuelles difficultés rencontrées.
        <br />
        <br />
        En parallèle de ma carrière, j&apos;ai également pratiqué la danse
        latine au niveau professionnel. J&apos;ai participé à des compétitions
        nationales et internationales, notamment aux championnats du monde au
        Mexique. Cette passion m&apos;a toujours poussé à donner le meilleur de
        moi-même pour atteindre mes objectifs et a nourri ma créativité. Ainsi
        j&apos;aime être force de proposition et ajouter une touche personnelle,
        originale et esthétique à mes projets.
        <br />
        <br />
        Je suis également passionné d&apos;informatique depuis de nombreuses
        années et j&apos;aime réaliser des projets personnels et professionnels
        dans différents langages. En 2021 j&apos;ai décidé de faire de cette
        passion mon métier et c&apos;est naturellement que je me suis tourné
        vers le développement web et le domaine du frontend. J&apos;ai commencé
        à me former en autodidacte avant de suivre la formation diplômante
        Openclassrooms qui m&apos;a permis d&apos;approfondir et consolider mes
        connaissances par la réalisation d&apos;une dizaine de projets
        professionnalisants.
        <br />
        <br />
        Fort de mon parcours et de mes passions, je suis convaincu de pouvoir
        vous offrir un travail de qualité en tant que développeur frontend. Si
        vous cherchez un professionnel passionné et polyvalent, je vous invite à
        jeter un œil à mes projets ci-dessous et à me contacter !
      </article>
    </section>
  )
}
