import { profile } from '../data/portfolio'
import { ArrowUpRightIcon, CheckIcon, MailIcon, PinIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              A developer with a <span className="gradient-text">designer&apos;s eye</span>
            </>
          }
          description="Part engineer, part designer — I like living where the two meet."
        />

        <div className="about__grid">
          <Reveal className="about__media">
            <div className="about__image">
              <img
                src="/images/profile-2.jfif"
                alt={`${profile.name} at work`}
                width="1536"
                height="2048"
                loading="lazy"
              />
            </div>
            <div className="about__badge">
              <span className="about__badge-number">5+</span>
              <span>
                years of
                <br />
                experience
              </span>
            </div>
            <div className="about__tape" aria-hidden="true">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="about__tape-ring" />
              ))}
            </div>
          </Reveal>

          <div className="about__content">
            <Reveal delay={80}>
              <p className="about__lede">
                I build digital products that are fast, accessible and genuinely nice to use.
              </p>
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="about__paragraph">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={140}>
              <ul className="about__highlights">
                {profile.highlights.map((item) => (
                  <li key={item}>
                    <span className="about__check">
                      <CheckIcon size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="about__meta">
                <div>
                  <PinIcon size={18} />
                  <span>{profile.location}</span>
                </div>
                <div>
                  <MailIcon size={18} />
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>

              <a className="btn btn--ghost" href="#contact">
                Work with me <ArrowUpRightIcon size={18} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
