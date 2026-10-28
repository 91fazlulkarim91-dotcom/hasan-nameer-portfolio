import { useEffect, useState } from 'react'

/**
 * Types and deletes through a list of words. Falls back to the first word
 * for users who prefer reduced motion.
 */
export default function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 40, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(!reduced)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const word = words[index % words.length]

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      },
      deleting ? deleteSpeed : typeSpeed,
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, words, enabled, typeSpeed, deleteSpeed, pause])

  return enabled ? text : words[0]
}
