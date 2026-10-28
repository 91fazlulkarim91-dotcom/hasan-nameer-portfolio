import { useCallback, useEffect, useState } from 'react'
import { gallery } from '../data/portfolio'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Gallery() {
  const [active, setActive] = useState(null)

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (direction) => {
      setActive((current) => {
        if (current === null) return current
        return (current + direction + gallery.length) % gallery.length
      })
    },
    [],
  )

  useEffect(() => {
    if (active === null) return
    document.body.classList.add('no-scroll')

    const onKey = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step])

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Off the clock"
          title={
            <>
              A little <span className="gradient-text">gallery</span>
            </>
          }
          description="Frames from life outside the editor."
          align="center"
        />

        <div className="gallery__grid">
          {gallery.map((item, index) => (
            <Reveal key={item.src} className="gallery__item" delay={index * 110}>
              <button
                type="button"
                className="gallery__button"
                onClick={() => setActive(index)}
                aria-label={`Open image: ${item.alt}`}
              >
                <img src={item.src} alt={item.alt} width="1536" height="2048" loading="lazy" />
                <span className="gallery__overlay">
                  <span className="gallery__label">{item.label}</span>
                  <span className="gallery__caption">{item.caption}</span>
                  <span className="gallery__action">
                    View <span aria-hidden="true">↗</span>
                  </span>
                </span>
                <span className="gallery__index">0{index + 1}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button type="button" className="lightbox__close" onClick={close} aria-label="Close viewer">
            <CloseIcon size={22} />
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Previous image"
          >
            <ChevronLeftIcon size={26} />
          </button>

          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[active].src} alt={gallery[active].alt} />
            <figcaption>
              <span>{gallery[active].label}</span>
              {gallery[active].caption}
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Next image"
          >
            <ChevronRightIcon size={26} />
          </button>
        </div>
      )}
    </section>
  )
}
