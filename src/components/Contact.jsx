import { useLang } from '../i18n.jsx'
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP, GITHUB } from '../data.js'
import { DownloadCV } from './ui.jsx'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <h2 id="contact-title">{c.title}</h2>
          <p className="contact-lead">{c.lead}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={`mailto:${EMAIL}`}>{c.emailCta}</a>
            <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noreferrer">{c.waCta}</a>
          </div>
        </div>
        <ul className="channels">
          <li><span>{c.labels.email}</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li><span>{c.labels.whatsapp}</span><a href={WHATSAPP} target="_blank" rel="noreferrer">{c.whatsappValue}</a></li>
          <li><span>{c.labels.phone}</span><a href={`tel:${PHONE_TEL}`}><bdi dir="ltr">{PHONE_DISPLAY}</bdi></a></li>
          <li><span>{c.labels.github}</span><a href={GITHUB} target="_blank" rel="noreferrer">github.com/mohammedalhaj14</a></li>
          <li><span>{c.labels.cv}</span><DownloadCV className="plain">{c.cvValue}</DownloadCV></li>
        </ul>
      </div>
    </section>
  )
}
