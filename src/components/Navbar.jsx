import { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolio'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const offset = window.scrollY + 140
      let current = navLinks[0].href
      for (const link of navLinks) {
        const section = document.querySelector(link.href)
        if (section && section.offsetTop <= offset) current = link.href
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="brand" href="#home" aria-label="Hasan Nameer — home">
          <span className="brand__mark">HN</span>
          <span className="brand__text">
            Hasan<span>.</span>
          </span>
        </a>

        <nav className={`nav__links${open ? ' is-open' : ''}`} aria-label="Main navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? 'is-active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary nav__cta" href="#contact" onClick={() => setOpen(false)}>
            Let&apos;s talk
          </a>
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className="icon-btn nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
