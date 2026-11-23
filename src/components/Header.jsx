import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { Icon, DownloadCV } from './ui.jsx'

const ids = ['about', 'projects', 'experience', 'services', 'credentials', 'contact']

export default function Header() {
  const { t, toggle } = useLang()
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="brand" href="#top">{t.name}<span>.</span></a>
        <nav aria-label={t.nav.label}>
          <ul id="nav-links" className={`nav-links${open ? ' open' : ''}`}>
            {ids.map((id) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{t.nav[id]}</a></li>
            ))}
            <li><DownloadCV className="nav-cv">{t.nav.cv}</DownloadCV></li>
          </ul>
        </nav>
        <button className="lang-btn" type="button" onClick={toggle} aria-label={t.switch.aria} lang={t.switch.lang}>
          {t.switch.label}
        </button>
        <button className="menu-btn" type="button" aria-expanded={open} aria-controls="nav-links"
          aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
