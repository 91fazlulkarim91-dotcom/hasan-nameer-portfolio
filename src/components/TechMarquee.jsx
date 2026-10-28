import { techMarquee } from '../data/portfolio'

export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((tech, index) => (
          <span className="marquee__item" key={`${tech}-${index}`}>
            {tech}
            <span className="marquee__star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
