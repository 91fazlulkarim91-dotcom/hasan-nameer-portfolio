import { projects, profile } from '../data/portfolio'
import { ArrowUpRightIcon, GithubIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Preview({ index, title }) {
  return (
    <div className={`preview preview--${index}`} aria-hidden="true">
      <div className="preview__chrome">
        <span />
        <span />
        <span />
        <div className="preview__url">{title.toLowerCase().replace(/\s+/g, '')}.app</div>
      </div>

      <div className="preview__screen">
        {index === 0 && (
          <>
            <div className="preview__side">
              <span className="preview__logo" />
              <span className="preview__line" />
              <span className="preview__line preview__line--short" />
              <span className="preview__line" />
              <span className="preview__line preview__line--short" />
            </div>
            <div className="preview__main">
              <div className="preview__row">
                <span className="preview__stat" />
                <span className="preview__stat" />
                <span className="preview__stat" />
              </div>
              <div className="preview__chart">
                {[44, 68, 52, 84, 62, 94, 74].map((height, i) => (
                  <span key={i} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </>
        )}

        {index === 1 && (
          <div className="preview__shop">
            <div className="preview__shopbar">
              <span />
              <span />
              <span />
            </div>
            <div className="preview__products">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div className="preview__product" key={i}>
                  <span className="preview__products-img" />
                  <span className="preview__products-line" />
                  <span className="preview__products-price" />
                </div>
              ))}
            </div>
          </div>
        )}

        {index === 2 && (
          <div className="preview__chat">
            <div className="preview__chat-side">
              {[0, 1, 2, 3].map((i) => (
                <span className="preview__chat-user" key={i}>
                  <i />
                  <em />
                </span>
              ))}
            </div>
            <div className="preview__chat-main">
              <span className="preview__bubble preview__bubble--in" />
              <span className="preview__bubble preview__bubble--out" />
              <span className="preview__bubble preview__bubble--in preview__bubble--sm" />
              <span className="preview__input" />
            </div>
          </div>
        )}

        {index === 3 && (
          <div className="preview__system">
            <div className="preview__swatches">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="preview__components">
              <span className="preview__btn" />
              <span className="preview__pill" />
              <span className="preview__toggle" />
              <span className="preview__avatar" />
            </div>
            <div className="preview__blocks">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const handleMove = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    card.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <section className="section work" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Projects I&apos;m <span className="gradient-text">proud of</span>
            </>
          }
          description="A few things I've designed, built and shipped. More on GitHub."
        />

        <div className="projects">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              className="project"
              delay={(index % 2) * 90}
              as="article"
            >
              <div className="project__card" onMouseMove={handleMove}>
                <div className="project__preview">
                  <Preview index={index} title={project.title} />
                </div>

                <div className="project__body">
                  <div className="project__meta">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="project__title">
                    {project.title}
                    <ArrowUpRightIcon size={20} />
                  </h3>
                  <p className="project__description">{project.description}</p>

                  <ul className="project__tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <div className="project__links">
                    <a href={project.links.live} aria-label={`View ${project.title} live`}>
                      <ArrowUpRightIcon size={16} /> Live demo
                    </a>
                    <a href={project.links.code} aria-label={`View ${project.title} source code`}>
                      <GithubIcon size={16} /> Source
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="work__more" delay={100}>
          <p>Want to see the rest?</p>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon size={18} /> Browse GitHub
          </a>
        </Reveal>
      </div>
    </section>
  )
}
