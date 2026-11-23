// Static pre-rendering: renders the React app to HTML for each language and writes
// dist/index.html (English) and dist/ar/index.html (Arabic), plus robots.txt and sitemap.xml.
// No extra dependencies: it uses Vite's own SSR build and react-dom/server.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'
import { SITE_URL } from '../site.config.js'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const entry = readdirSync(ssrDir).find((f) => /^entry-server\.m?js$/.test(f))
if (!entry) throw new Error('SSR bundle not found in dist-ssr. Run `npm run build`.')
const { render } = await import(pathToFileURL(path.join(ssrDir, entry)).href)
const template = readFileSync(path.join(dist, 'index.html'), 'utf8')
for (const marker of ['<!--seo-->', '<!--app-->']) {
  if (!template.includes(marker)) throw new Error(`Missing ${marker} in dist/index.html`)
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const pages = [
  { lang: 'en', url: `${SITE_URL}/`, out: 'index.html' },
  { lang: 'ar', url: `${SITE_URL}/ar/`, out: 'ar/index.html' },
]
const AR_FONTS = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Noto+Naskh+Arabic:wght@500;700&display=swap'
const image = `${SITE_URL}/og-image.png`
const person = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Mohammad Al Haj',
  alternateName: 'محمد الحاج',
  jobTitle: 'Full-Stack Web Developer',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/mohammad.jpg`,
  email: 'mailto:mohammedalhaj14@gmail.com',
  telephone: '+96176724176',
  address: { '@type': 'PostalAddress', addressLocality: 'Tripoli', addressCountry: 'LB' },
  sameAs: ['https://github.com/mohammedalhaj14'],
  knowsAbout: ['Laravel', 'React', 'Next.js', 'Node.js', 'PHP', 'MySQL', 'REST APIs', 'E-commerce development', 'Stripe', 'AI integrations'],
  knowsLanguage: ['en', 'ar'],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Balamand' },
}

for (const { lang, url, out } of pages) {
  const { html, seo, dir } = render(lang)
  const other = lang === 'en' ? 'ar' : 'en'
  const graph = [
    person,
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: 'Mohammad Al Haj — Portfolio', inLanguage: ['en', 'ar'], publisher: { '@id': `${SITE_URL}/#person` } },
    { '@type': 'ProfilePage', '@id': `${url}#page`, url, name: seo.title, description: seo.description, inLanguage: lang, isPartOf: { '@id': `${SITE_URL}/#website` }, mainEntity: { '@id': `${SITE_URL}/#person` } },
  ]
  const tags = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="author" content="Mohammad Al Haj" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="en" href="${SITE_URL}/" />`,
    `<link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Mohammad Al Haj" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="${seo.locale}" />`,
    `<meta property="og:locale:alternate" content="${seo.localeAlt}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(seo.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`,
  ]
  if (lang === 'ar') tags.push(`<link id="ar-fonts" rel="stylesheet" href="${AR_FONTS}" />`)

  const page = template
    .replace('<html lang="en" dir="ltr">', `<html lang="${lang}" dir="${dir}">`)
    .replace('<!--seo-->', tags.join('\n    '))
    .replace('<!--app-->', html)
  const file = path.join(dist, out)
  mkdirSync(path.dirname(file), { recursive: true })
  writeFileSync(file, page)
  console.log(`prerendered ${out} (${other} alternate linked)`)
}

const day = new Date().toISOString().slice(0, 10)
const alt = (l, href) => `<xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`
const entryXml = (loc) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${day}</lastmod>\n    ${alt('en', `${SITE_URL}/`)}\n    ${alt('ar', `${SITE_URL}/ar/`)}\n    ${alt('x-default', `${SITE_URL}/`)}\n  </url>`
writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entryXml(`${SITE_URL}/`)}\n${entryXml(`${SITE_URL}/ar/`)}\n</urlset>\n`)
writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
console.log('wrote sitemap.xml and robots.txt')
