import { useLang } from '../i18n.jsx'
import { jobRanges } from '../data.js'
import { Section } from './ui.jsx'

export default function Experience() {
  const { t } = useLang()
  const e = t.experience
  return (
    <Section id="experience" title={e.title} lead={e.lead}>
      <ol className="jobs">
        {e.jobs.map((j, i) => (
          <li className="job" key={j.company}>
            <div className="job-meta">
              <p className="job-date"><bdi>{jobRanges[i]}</bdi></p>
              <p>{j.place}</p>
            </div>
            <div>
              <h3>{j.role}</h3>
              <p className="job-company">{j.company}</p>
              <p>{j.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
