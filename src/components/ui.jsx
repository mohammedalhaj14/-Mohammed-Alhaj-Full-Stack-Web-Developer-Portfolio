import { useLang } from '../i18n.jsx'
import { CV } from '../data.js'

const paths = {
  ext: <path d="M7 17 17 7M8 7h9v9" />,
  arrow: <path d="M5 12h14m0 0-5-5m5 5-5 5" />,
  download: <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
}

// Inline SVG icons (no icon font). `flip` mirrors directional icons in right-to-left layouts.
export function Icon({ name, flip = false }) {
  return (
    <svg className={`icon${flip ? ' i-flip' : ''}`} viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  )
}

export function Section({ id, title, lead, children }) {
  return (
    <section id={id} className="sec" aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <header className={`sec-head${lead ? '' : ' no-lead'}`}>
          <div>
            <h2 id={`${id}-title`}>{title}</h2>
          </div>
          {lead && <p className="sec-lead">{lead}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}

export function DownloadCV({ className = 'link', children }) {
  const { lang } = useLang()
  return (
    <a className={className} href={CV[lang]} download="Mohammad_Al_Haj_CV.pdf">
      <Icon name="download" />{children}
    </a>
  )
}
