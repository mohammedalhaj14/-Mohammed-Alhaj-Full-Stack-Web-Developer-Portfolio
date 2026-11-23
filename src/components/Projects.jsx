import { useLang } from '../i18n.jsx'
import { featured, otherProjects } from '../data.js'
import { Icon, Section } from './ui.jsx'

// Preview frame. Shows the real preview image when `image` is set in data.js (the image already contains
// its own browser frame); otherwise a neutral placeholder. Width/height + aspect-ratio prevent layout shifts.
function Shot({ project, name, alt }) {
  const { t } = useLang()
  const hasImage = Boolean(project.image)
  return (
    <figure className="shot-fig">
      <a className={`shot${hasImage ? ' has-img' : ''}`} href={project.url} target="_blank" rel="noreferrer"
        {...(hasImage ? {} : { 'aria-label': `${t.projects.shotAlt} ${name}` })}>
        {hasImage ? (
          <img src={project.image} alt={alt} width="1600" height="1000" loading="lazy" decoding="async" />
        ) : (
          <>
            <div className="shot-bar" dir="ltr">{project.host}</div>
            <div className="shot-body" aria-hidden="true"><span className="mono">{project.mono}</span></div>
          </>
        )}
      </a>
    </figure>
  )
}

function Stack({ items, label }) {
  return <ul className="stack" aria-label={label}>{items.map((s) => <li key={s}>{s}</li>)}</ul>
}

function DemoButton({ url }) {
  const { t } = useLang()
  return (
    <a className="btn btn-primary" href={url} target="_blank" rel="noreferrer">
      {t.projects.demo}<Icon name="ext" flip />
    </a>
  )
}

function Case({ project }) {
  const { t } = useLang()
  const p = t.projects
  const item = p.items[project.id]
  return (
    <article className="case">
      <div className="case-media">
        <Shot project={project} name={item.name} alt={item.alt} />
        <Stack items={project.stack} label={p.labels.stack} />
        <p className="case-actions"><DemoButton url={project.url} /></p>
      </div>
      <div className="case-body">
        <p className="case-type">{item.type}</p>
        <h3>{item.name}</h3>
        <dl className="case-text">
          <dt>{p.labels.problem}</dt><dd>{item.problem}</dd>
          <dt>{p.labels.built}</dt><dd>{item.built}</dd>
        </dl>
        <ul className="features" aria-label={p.labels.features}>
          {item.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>
    </article>
  )
}

function Compact({ project }) {
  const { t } = useLang()
  const item = t.projects.items[project.id]
  return (
    <article className="compact">
      <Shot project={project} name={item.name} alt={item.alt} />
      <p className="case-type">{item.type}</p>
      <h3>{item.name}</h3>
      <p>{item.text}</p>
      <Stack items={project.stack} label={t.projects.labels.stack} />
      <p className="case-actions"><DemoButton url={project.url} /></p>
    </article>
  )
}

export default function Projects() {
  const { t } = useLang()
  const p = t.projects
  const cases = featured.filter((x) => x.full)
  const compact = featured.filter((x) => !x.full)
  return (
    <Section id="projects" title={p.title} lead={p.lead}>
      <div className="cases">
        {cases.map((x) => <Case key={x.id} project={x} />)}
      </div>
      <div className="compact-grid">
        {compact.map((x) => <Compact key={x.id} project={x} />)}
      </div>

      <div className="other">
        <div className="other-head">
          <h3>{p.other.title}</h3>
          <p>{p.other.lead}</p>
        </div>
        <ul className="rows">
          {otherProjects.map((o, i) => (
            <li className="row" key={o.url}>
              <h4>{p.other.items[i].name}</h4>
              <p>{p.other.items[i].text}</p>
              <p className="row-stack" dir="ltr">{o.stack}</p>
              <a className="link" href={o.url} target="_blank" rel="noreferrer">{p.demo}<Icon name="ext" flip /></a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
