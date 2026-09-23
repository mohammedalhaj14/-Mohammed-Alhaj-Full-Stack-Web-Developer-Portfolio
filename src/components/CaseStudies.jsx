import { caseStudies } from '../data/projects'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <div className="case-header">
          <p className="section-label">Case studies</p>
          <h2 className="section-heading">Three builds that show how I work, not just what I used.</h2>
          <p className="section-sub">
            Each of these went beyond a template: real authentication, real data models,
            and problems that needed an actual decision.
          </p>
        </div>

        {caseStudies.map((project) => (
          <article className="case-row" key={project.id}>
            <div className="case-visual">
              {project.image && (
                <img
                  className="case-visual-img"
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                />
              )}
              <div className="case-visual-footer">
                <span className="case-visual-tag">{project.tag}</span>
                <div className="case-visual-stack">
                  {project.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="case-title">{project.title}</h3>

              <div className="case-block">
                <p className="case-block-label">The problem</p>
                <p>{project.problem}</p>
              </div>

              <div className="case-block">
                <p className="case-block-label">The approach</p>
                <p>{project.approach}</p>
              </div>

              <div className="case-block">
                <p className="case-block-label">Key features</p>
                <ul className="case-features">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="case-links">
                <a className="case-link case-link-source" href={project.repo} target="_blank" rel="noreferrer">
                  View source
                </a>
                {project.demo && (
                  <a className="case-link case-link-demo" href={project.demo} target="_blank" rel="noreferrer">
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
