import { skills } from '../data/portfolio'
import { iconMap } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Toolkit"
          title={
            <>
              Skills & <span className="gradient-text">stack</span>
            </>
          }
          description="The tools I reach for every day, and the ones I keep getting better at."
        />

        <div className="skills__grid">
          {skills.map((group, index) => {
            const Icon = iconMap[group.icon] ?? iconMap.sparkles
            return (
              <Reveal key={group.category} className="skill-card" delay={index * 90}>
                <div className="skill-card__head">
                  <span className="skill-card__icon">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3>{group.category}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>

                <ul className="skill-card__list">
                  {group.items.map((item, i) => (
                    <li key={item.name}>
                      <div className="skill-card__label">
                        <span>{item.name}</span>
                        <span className="skill-card__value">{item.level}%</span>
                      </div>
                      <div
                        className="skill-bar"
                        role="progressbar"
                        aria-label={item.name}
                        aria-valuenow={item.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span
                          className="skill-bar__fill"
                          style={{ '--level': `${item.level}%`, '--bar-delay': `${i * 90}ms` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="skills__note" delay={120}>
          <span className="skills__note-icon">✦</span>
          <p>
            Also comfortable with <strong>Jest &amp; React Testing Library</strong>,{' '}
            <strong>Framer Motion</strong>, <strong>Supabase</strong>,{' '}
            <strong>GitHub Actions</strong> and <strong>accessibility auditing</strong>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
