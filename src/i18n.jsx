import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { L } from './locale.js'
import { SITE_URL } from '../site.config.js'

const Ctx = createContext(null)
export const useLang = () => useContext(Ctx)

// useLayoutEffect warns during server rendering, so fall back to useEffect there.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const AR_FONTS = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Noto+Naskh+Arabic:wght@500;700&display=swap'
function loadArabicFonts() {
  if (document.getElementById('ar-fonts')) return
  const link = document.createElement('link')
  link.id = 'ar-fonts'; link.rel = 'stylesheet'; link.href = AR_FONTS
  document.head.appendChild(link)
}

export function LangProvider({ initialLang = 'en', children }) {
  const [lang, setLang] = useState(initialLang)
  const [fading, setFading] = useState(false)
  const t = L[lang]

  // Keep <html lang/dir>, title, description and canonical in sync with the active language.
  useIsoLayoutEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir = t.dir
    document.title = t.seo.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.seo.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}${lang === 'ar' ? '/ar/' : '/'}`)
    if (lang === 'ar') loadArabicFonts()
  }, [lang, t])

  // Smooth switch: fade out, swap language while hidden, fade back in. Instant when motion is reduced.
  const toggle = useCallback(() => {
    if (fading) return
    const next = lang === 'en' ? 'ar' : 'en'
    const apply = () => {
      setLang(next)
      window.history.replaceState(null, '', (next === 'ar' ? '/ar/' : '/') + window.location.hash)
      setFading(false)
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return apply()
    setFading(true)
    window.setTimeout(apply, 170)
  }, [fading, lang])

  return <Ctx.Provider value={{ lang, t, toggle, fading }}>{children}</Ctx.Provider>
}
