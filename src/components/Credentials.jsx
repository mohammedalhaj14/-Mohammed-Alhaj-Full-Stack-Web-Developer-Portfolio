import { useLang } from '../i18n.jsx'
import { eduYears, certYears } from '../data.js'
import { Section } from './ui.jsx'

function List({ title, items, years }) {
  return (
    <div className="cred">
      <h3>{title}</h3>
      <ul>
        {items.map(([name, place], i) => (
          <li key={name}>
            <span><b>{name}</b><small>{place}</small></span>
            <bdi className="cred-year">{years[i]}</bdi>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Credentials() {
  const { t } = useLang()
  const c = t.credentials
  return (
    <Section id="credentials" title={c.title}>
      <div className="cred-grid">
        <List title={c.education} items={c.eduItems} years={eduYears} />
        <List title={c.certificates} items={c.certItems} years={certYears} />
      </div>
    </Section>
  )
}
