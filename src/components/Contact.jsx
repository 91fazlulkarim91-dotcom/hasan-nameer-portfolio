import { useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import { ArrowUpRightIcon, CheckIcon, CopyIcon, MailIcon, PinIcon, iconMap } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const timerRef = useRef(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      // Clipboard can be unavailable (e.g. http context) — fall back silently.
    }
    setCopied(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    setSent(true)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="gradient-text">great together</span>
            </>
          }
          description="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
        />

        <div className="contact__grid">
          <Reveal className="contact__info">
            <p className="contact__lede">
              Whether you have a question, an idea, or an opportunity — I'll do my best to get
              back to you within 24 hours.
            </p>

            <button type="button" className="contact-card" onClick={copyEmail}>
              <span className="contact-card__icon">
                <MailIcon size={22} />
              </span>
              <span className="contact-card__content">
                <strong>Email me at</strong>
                <span>{profile.email}</span>
              </span>
              <span className="contact-card__action" aria-live="polite">
                {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
                {copied ? 'Copied' : 'Copy'}
              </span>
            </button>

            <div className="contact-card contact-card--static">
              <span className="contact-card__icon">
                <PinIcon size={22} />
              </span>
              <span className="contact-card__content">
                <strong>Location</strong>
                <span>{profile.location}</span>
              </span>
            </div>

            <div className="contact__socials">
              <span>Socials</span>
              <div className="contact__socials-links">
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
          </Reveal>

          <Reveal className="contact__form-wrap" delay={120}>
            <form className="contact__form" onSubmit={handleSubmit} noValidate={false}>
              <div className="field-row">
                <label className="field">
                  <span>Your name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                  />
                </label>
                <label className="field">
                  <span>Your email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project — goals, timeline, budget…"
                  value={form.message}
                  onChange={handleChange}
                />
              </label>

              <button type="submit" className="btn btn--primary contact__submit">
                Send message <ArrowUpRightIcon size={18} />
              </button>

              <p className={`contact__note${sent ? ' is-sent' : ''}`} aria-live="polite">
                {sent ? (
                  <>
                    <CheckIcon size={16} /> Opening your email app with the message pre-filled…
                  </>
                ) : (
                  'Sending opens your email app with everything pre-filled.'
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
