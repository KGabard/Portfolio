import Link from 'next/link'
import SectionTitle from '../components/SectionTitle'

export default function ContactSection() {
  return (
    <section id="contact" className="mt-[112px] mb-[200px] flex w-full flex-col gap-10">
      <SectionTitle title="Contact" />
      <p className="typo-body w-full text-neutral-1 dark:text-neutral-dark-3">
        Je suis actuellement disponible pour m&apos;investir dans de nouveaux
        projets, n&apos;hésitez pas à me contacter si vous souhaitez que nous
        travaillions ensemble.
        <br />
        <br />
        Envoyez-moi un email à{' '}
        <Link
          className="relative after:absolute after:-bottom-0.5 after:-left-[1%] after:h-3 after:w-[102%] after:bg-highlight-1 after:opacity-[35%] after:content-[''] dark:after:bg-highlight-dark-1"
          href={`mailto:kev.gabard@gmail.com`}
        >
          kev.gabard@gmail.com
        </Link>{' '}
        et parlons de votre projet !
      </p>
    </section>
  )
}
