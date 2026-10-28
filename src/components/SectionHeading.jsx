import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <span className="eyebrow">
        <span className="eyebrow__dot" />
        {eyebrow}
      </span>
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__text">{description}</p>}
    </Reveal>
  )
}
