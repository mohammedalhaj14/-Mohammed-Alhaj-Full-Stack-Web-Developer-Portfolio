import { useLang } from '../i18n.jsx'
import { statValues } from '../data.js'
import { Icon, DownloadCV } from './ui.jsx'

export default function Hero() {
  const { t } = useLang()
  return (
    <>
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div>
            <p className="avail"><i aria-hidden="true" />{t.hero.available}</p>
            <h1 id="hero-title">{t.hero.title}</h1>
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">{t.hero.explore}<Icon name="arrow" flip /></a>
              <a className="btn btn-ghost" href="#contact">{t.hero.work}</a>
              <DownloadCV>{t.hero.cv}</DownloadCV>
            </div>
          </div>
          <div className="portrait">
            <img src={`${import.meta.env.BASE_URL}mohammad.jpg`} alt={t.hero.alt} width="640" height="640" decoding="async" />
          </div>
        </div>
      </section>
      <section className="stats" aria-label={t.stats.label}>
        <div className="wrap">
          <ul>
            {statValues.map((v, i) => (
              <li key={v}><b dir="ltr">{v}</b><span>{t.stats.items[i]}</span></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
