import perudoPresentation from 'pbulic/assets/images/perudo-presentation.png'
import hrnetPresentation from 'pbulic/assets/images/perudo-presentation.png'

type Props = {
  project: ProjectType
  skills: SkillType[]
  summary: string
  githubSrc: string
  liveSrc?: string
  reverse?: boolean
}

export default function ProjectCard({
  project,
  skills,
  summary,
  githubSrc,
  liveSrc,
  reverse = false,
}: Props) {
  let imageSrc: string | undefined
  let projectName: string

  switch (project) {
    case 'perudo':



  return (
    <div>ProjectCard</div>
  )
}