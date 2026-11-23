import { useLang } from '../i18n.jsx'
import { skillGroups } from '../data.js'
import { Section } from './ui.jsx'

export default function About() {
  const { t } = useLang()
  return (
    <Section id="about" title={t.about.title} lead={t.about.lead}>
      <div className="about-grid">
        <div className="prose">
          {t.about.p.map((p) => <p key={p}>{p}</p>)}
        </div>
        <dl className="skills" aria-label={t.about.skillsLabel}>
          {Object.entries(skillGroups).map(([key, items]) => (
            <div key={key}>
              <dt>{t.about.groups[key]}</dt>
              <dd><ul className="inline">{items.map((s) => <li key={s}>{s}</li>)}</ul></dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
