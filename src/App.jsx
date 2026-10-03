import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as D from './data.js'
import { L } from './locale.js'

const Ctx = createContext(null)
const useL = () => useContext(Ctx)
const I = ({ c }) => <i className={c} aria-hidden="true" />

function Tilt({ as: T = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const ok = typeof matchMedia !== 'undefined' && matchMedia('(hover:hover)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches
  const move = (e) => {
    if (!ok) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`
  }
  return <T ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={() => ref.current && (ref.current.style.transform = '')} {...rest}>{children}</T>
}

function Reveal({ className = '', children }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.12 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`rv ${on ? 'on' : ''} ${className}`}>{children}</div>
}

function Download({ className = 'btn fill', children }) {
  const { lang } = useL()
  return <a className={className} href={D.CV[lang]} download="Mohammad_Al_Haj_CV.pdf"><I c="fa-solid fa-file-arrow-down" /> {children}</a>
}

function Remote() {
  const { t } = useL()
  return <span className="remote"><span className="dot" /> {t.remote}</span>
}

function Nav() {
  const { t, lang, toggle } = useL()
  const [open, setOpen] = useState(false)
  const ids = ['about', 'experience', 'projects', 'learning', 'contact']
  return (
    <nav><div className="wrap bar">
      <a href="#home" className="logo">MA<b>.</b>dev</a>
      <div id="nav-links" className={`links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        {ids.map((id) => <a key={id} href={`#${id}`}>{t.nav[id]}</a>)}
        <Download className="btn fill sm">{t.nav.cv}</Download>
      </div>
      <button className="lang" onClick={toggle} aria-label={t.switchAria}>
        <I c="fa-solid fa-language" /> <span lang={lang === 'en' ? 'ar' : 'en'}>{t.switchLabel}</span>
      </button>
      <button className="menu" aria-label="Menu" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}><I c="fa-solid fa-bars" /></button>
    </div></nav>
  )
}

function Hero() {
  const { t } = useL()
  return (
    <header className="hero" id="home"><div className="wrap">
      <div>
        <Remote />
        <h1>{t.hero.pre} <span>{t.hero.name}</span>{t.hero.post}</h1>
        <p className="lead">{t.hero.lead}</p>
        <div className="cta">
          <Download>{t.hero.cv}</Download>
          <a className="btn ghost" href="#projects"><I c="fa-solid fa-cube" /> {t.hero.view}</a>
        </div>
      </div>
      <div className="scene">
        <Tilt className="photo"><img src={`${import.meta.env.BASE_URL}mohammad.jpg`} alt={t.hero.alt} width="640" height="640" /></Tilt>
        <div className="mini" aria-hidden="true"><div className="cube">
          {D.cubeFaces.map(([ic, n], i) => <div key={n} className={`face f${i + 1}`}><I c={ic} />{n}</div>)}
        </div></div>
      </div>
    </div></header>
  )
}

function About() {
  const { t } = useL()
  return (
    <section id="about"><div className="wrap">
      <p className="label">{t.about.label}</p><h2>{t.about.h2}</h2>
      <Reveal className="about">
        <div><p>{t.about.p1}</p><p>{t.about.p2}</p></div>
        <div className="skills">{D.skills.map(([ic, n]) => <span className="chip" key={n}><I c={ic} />{n}</span>)}</div>
      </Reveal>
      <Reveal className="grid stats">
        {D.statValues.map((n, i) => <Tilt className="stat" key={n}><b dir="ltr">{n}</b>{t.stats[i]}</Tilt>)}
      </Reveal>
    </div></section>
  )
}

function Experience() {
  const { t } = useL()
  return (
    <section id="experience"><div className="wrap">
      <p className="label">{t.exp.label}</p><h2>{t.exp.h2}</h2>
      <Reveal className="timeline">
        {t.exp.jobs.map((j, i) => (
          <Tilt key={i}><span className="date"><bdi>{D.jobRanges[i]}</bdi> · {t.exp.remote}</span><h3>{j.title}</h3><p>{j.text}</p></Tilt>
        ))}
      </Reveal>
    </div></section>
  )
}

function Projects() {
  const { t } = useL()
  return (
    <section id="projects"><div className="wrap">
      <p className="label">{t.proj.label}</p><h2>{t.proj.h2}</h2>
      <Reveal className="grid proj">
        {D.projects.map((p, i) => (
          <Tilt key={i}>
            <I c={`${p.icon} ico`} /><h3>{t.proj.items[i].name}</h3><p>{t.proj.items[i].text}</p>
            {p.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            <br /><a className="go" href={p.url} target="_blank" rel="noreferrer">{t.proj.cta[p.kind]} <I c={p.cicon} /></a>
          </Tilt>
        ))}
      </Reveal>
    </div></section>
  )
}

function MoreProjects() {
  const { t } = useL()
  return (
    <section id="more"><div className="wrap">
      <p className="label">{t.more.label}</p><h2>{t.more.h2}</h2>
      <p className="sub">{t.more.sub}</p>
      <Reveal className="grid proj">
        {D.otherProjects.map((p, i) => (
          <Tilt key={i}>
            <h3>{t.more.items[i].name}</h3><p>{t.more.items[i].text}</p>
            {p.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            <br /><a className="go" href={p.url} target="_blank" rel="noreferrer">{t.more.live} <I c="fa-solid fa-arrow-up-right-from-square" /></a>
          </Tilt>
        ))}
      </Reveal>
    </div></section>
  )
}

function Learning() {
  const { t } = useL()
  return (
    <section id="learning"><div className="wrap">
      <Reveal className="grid two">
        <Tilt><p className="label">{t.edu.label}</p>
          <ul>{t.edu.items.map(([a, b], i) => <li key={i}>{a}<small>{b} · <bdi>{D.eduYears[i]}</bdi></small></li>)}</ul></Tilt>
        <Tilt><p className="label">{t.certs.label}</p>
          <ul>{t.certs.items.map(([a, b], i) => <li key={i}>{a}<small>{b} · <bdi>{D.certYears[i]}</bdi></small></li>)}</ul></Tilt>
      </Reveal>
    </div></section>
  )
}

function Contact() {
  const { t } = useL()
  const items = [
    ['fa-solid fa-envelope', t.contact.email, `mailto:${D.EMAIL}`], ['fa-brands fa-whatsapp', t.contact.whatsapp, 'https://wa.me/96176724176'],
    ['fa-solid fa-phone', <bdi>+961 76 724 176</bdi>, `tel:${D.PHONE}`], ['fa-brands fa-github', 'GitHub', D.GITHUB],
  ]
  return (
    <section id="contact" className="contact"><div className="wrap">
      <Remote />
      <h2>{t.contact.h2}</h2>
      <Reveal className="grid">
        {items.map(([ic, label, h], i) => <Tilt as="a" key={i} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><I c={ic} /><br />{label}</Tilt>)}
      </Reveal>
      <Download>{t.contact.cv}</Download>
    </div></section>
  )
}

export default function App() {
  const [lang, setLang] = useState('en')
  const [fading, setFading] = useState(false)
  const t = L[lang]
  const bg = useRef(null)

  // Keep <html lang/dir>, the tab title and the saved choice in sync.
  useLayoutEffect(() => {
    const h = document.documentElement
    h.lang = lang; h.dir = t.dir; document.title = t.title
  }, [lang, t])

  // Smooth switch: fade out, swap language while hidden, fade back in.
  const toggle = () => {
    if (fading) return
    const instant = matchMedia('(prefers-reduced-motion:reduce)').matches
    if (instant) { setLang((l) => (l === 'en' ? 'ar' : 'en')); return }
    setFading(true)
    setTimeout(() => { setLang((l) => (l === 'en' ? 'ar' : 'en')); setFading(false) }, 200)
  }

  useEffect(() => {
    if (!matchMedia('(hover:hover)').matches || matchMedia('(prefers-reduced-motion:reduce)').matches) return
    const f = (e) => { bg.current.style.transform = `translate(${(e.clientX / innerWidth - 0.5) * -16}px,${(e.clientY / innerHeight - 0.5) * -16}px) scale(1.06)` }
    addEventListener('mousemove', f)
    return () => removeEventListener('mousemove', f)
  }, [])

  return (
    <Ctx.Provider value={{ lang, t, toggle }}>
      <div id="bg" ref={bg} /><div className="floor" aria-hidden="true" />
      <div className={`page ${fading ? 'fading' : ''}`}>
        <Nav /><Hero /><About /><Experience /><Projects /><MoreProjects /><Learning /><Contact />
        <footer>© {new Date().getFullYear()} {t.footer}</footer>
      </div>
    </Ctx.Provider>
  )
}
