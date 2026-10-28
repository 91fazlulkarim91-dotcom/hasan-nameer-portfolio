import { navLinks, profile } from '../data/portfolio'
import { ArrowUpRightIcon } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a className="brand brand--footer" href="#home">
            <span className="brand__mark">HN</span>
            <span className="brand__text">
              Hasan<span>.</span>
            </span>
          </a>

          <nav className="footer__nav" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="btn btn--ghost btn--sm" href={`mailto:${profile.email}`}>
            <ArrowUpRightIcon size={16} /> Say hello
          </a>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {profile.name}. Built with React + Vite.
          </p>
          <p>
            Designed & developed with <span aria-hidden="true">♥</span> — no template, just code.
          </p>
        </div>
      </div>
    </footer>
  )
}
