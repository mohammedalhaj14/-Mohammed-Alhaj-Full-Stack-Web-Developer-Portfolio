import { useLang } from '../i18n.jsx'
import { Section } from './ui.jsx'

export default function Services() {
  const { t } = useLang()
  const s = t.services
  return (
    <Section id="services" title={s.title} lead={s.lead}>
      <ol className="svc">
        {s.items.map((it) => (
          <li key={it.name}>
            <h3>{it.name}</h3>
            <p>{it.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
