type Props = {
  title: string
}

export default function SectionTitle({ title }: Props) {
  return (
    <div className="relative pt-5 sm:pt-11">
      <h2 className="typo-title relative text-black after:absolute after:-bottom-3.5 after:left-0 after:h-[6px] after:w-[132px] after:rounded-sm after:bg-highlight-1 after:content-[''] dark:text-white dark:after:bg-highlight-dark-1 sm:after:-bottom-4 sm:after:h-[8px] sm:after:w-[192px]">
        {title}
      </h2>
      <p
        className="typo-header-big absolute -left-2 -bottom-8 -z-10 whitespace-nowrap text-highlight-1 dark:text-highlight-dark-1 sm:-left-7 sm:-bottom-[84px]"
        aria-hidden
      >
        {title}
      </p>
    </div>
  )
}
