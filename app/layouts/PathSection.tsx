import PathComponent from '../components/PathComponent'
import SectionTitle from '../components/SectionTitle'

export default function PathSection() {
  return (
    <section id="path" className="my-[112px] flex w-full flex-col">
      <SectionTitle title="Parcours" />
      <div className="relative mt-14 flex mx-auto lg:mx-0 lg:w-full flex-col gap-12">
        <PathComponent
          institution="oc"
          dates="2022-2023"
          qualification="Diplôme **Développeur d'application JavaScript React**"
        />
        <PathComponent
          institution="edf"
          dates="2015-2022"
          qualification="Ingénieur mécanique en **sûreté nucléaire**"
          reversed={true}
        />
        <PathComponent
          institution="insa"
          dates="2010-2015"
          qualification="Diplôme **Génie Énergétique et Environnement**"
        />
        <div className="absolute translate-x-1.5 lg:-translate-x-1/2 left-0 lg:left-1/2 top-0 -z-10 h-full w-1 bg-neutral-1 drop-shadow-sharp rounded-full dark:bg-neutral-dark-3"></div>
      </div>
    </section>
  )
}
