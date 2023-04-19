import { getSkillInfos } from '@/lib/utils'
import Image from 'next/image'

type Props = {
  skill: SkillType
}

export default function SkillTag({ skill }: Props) {
  const { iconSrc, label } = getSkillInfos(skill)

  return (
    <div className="flex gap-1 items-center">
      {iconSrc && (
        <Image
          className="h-[28px] w-[28px] sm:h-8 sm:w-8"
          src={iconSrc}
          alt={label}
          width={32}
          height={32}
          aria-hidden
        />
      )}
      <span className="typo-label-bold uppercase text-neutral-1 dark:text-neutral-dark-3 ">
        {label}
      </span>
    </div>
  )
}
