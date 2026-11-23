import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { L } from './locale.js'

// Used only at build time by scripts/prerender.mjs.
export function render(lang) {
  return { html: renderToString(<App initialLang={lang} />), seo: L[lang].seo, dir: L[lang].dir }
}
