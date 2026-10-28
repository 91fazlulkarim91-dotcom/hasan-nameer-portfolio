import { profile } from '../data/portfolio'
import useTypewriter from '../hooks/useTypewriter'
import { ArrowUpRightIcon, DownloadIcon, iconMap } from './Icons'
import Reveal from './Reveal'

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section className="hero" id="home">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />

      <div className="container hero__inner">
        <Reveal className="hero__content">
          <p className="availability">
            <span className="availability__dot" />
            {profile.availability}
          </p>

          <h1 className="hero__title">
            Hey, I&apos;m <span className="gradient-text">{profile.firstName}</span>
            <br />
            {profile.lastName}
            <span className="hero__period">.</span>
          </h1>

          <p className="hero__role" aria-label={profile.role}>
            <span className="hero__role-prefix">&lt;</span>
            <span className="hero__typed">{typed}</span>
            <span className="caret" aria-hidden="true" />
            <span className="hero__role-prefix">/&gt;</span>
          </p>

          <p className="hero__lead">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View my projects <ArrowUpRightIcon size={18} />
            </a>
            <a className="btn btn--ghost" href={profile.resumeUrl} download>
              <DownloadIcon size={18} /> Download CV
            </a>
          </div>

          <div className="hero__socials">
            <span>Find me on</span>
            <div className="hero__socials-links">
              {profile.socials.map((social) => {
                const Icon = iconMap[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          <dl className="hero__stats">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="hero__visual" delay={150}>
          <div className="portrait">
            <div className="portrait__ring" aria-hidden="true" />
            <div className="portrait__frame">
              <img
                src="/images/profile-1.jfif"
                alt={`Portrait of ${profile.name}`}
                width="1536"
                height="2048"
                fetchPriority="high"
              />
              <div className="portrait__overlay" aria-hidden="true" />
            </div>

            <div className="float-chip float-chip--one">
              <span className="float-chip__icon">⚛</span>
              <div>
                <strong>React</strong>
                <small>Frontend</small>
              </div>
            </div>

            <div className="float-chip float-chip--two">
              <span className="float-chip__icon">⌘</span>
              <div>
                <strong>Node.js</strong>
                <small>Backend</small>
              </div>
            </div>

            <div className="float-card">
              <span className="float-card__number">5+</span>
              <span className="float-card__text">
                years of
                <br />
                building for the web
              </span>
            </div>

            <div className="portrait__status">
              <span className="availability__dot" />
              Open to work
            </div>
          </div>
        </Reveal>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
        <span className="hero__scroll-line" aria-hidden="true" />
        Scroll to explore
      </a>
    </section>
  )
}
