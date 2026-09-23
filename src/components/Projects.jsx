import { otherProjects, techStack } from '../data/projects'

export default function Projects() {
  return (
    <>
      <section id="projects" className="other-projects">
        <div className="container">
          <p className="section-label">Also built</p>
          <h2 className="section-heading">Smaller builds — landing pages, storefront templates and tools.</h2>
          <p className="section-sub">
            Practice work and freelance-style briefs, each shipped and live.
          </p>

          <div className="projects-grid">
            {otherProjects.map((project) => (
              <div className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.stack.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="tech-strip">
        <div className="container tech-strip-inner">
          <span className="tech-strip-label">Core technologies</span>
          {techStack.map((t) => (
            <span className="tech-chip" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </>
  )
}
