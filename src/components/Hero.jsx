export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="hero-eyebrow">Full-Stack Web Developer</p>
          <h1>Mohammed Alhaj builds web applications end to end.</h1>
          <p className="hero-role">
            From database schema to the interface someone actually clicks — I design,
            build and ship full-stack products using React, Laravel and Node,
            with a habit of finishing what I start.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#case-studies">View case studies</a>
            <a
              className="btn btn-ghost"
              href="https://wa.me/96176724176?text=Hi%20Mohammed%20Alhaj,%20I'm%20interested%20in%20working%20with%20you."
              target="_blank"
              rel="noreferrer"
            >
              Start a project
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-status">
            <span className="hero-panel-dot" />
            Available for new work
          </div>
          <div className="hero-stat">
            <span className="hero-stat-label">Projects shipped</span>
            <span className="hero-stat-value">13</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-label">Core technologies</span>
            <span className="hero-stat-value">10</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-label">Based in</span>
            <span className="hero-stat-value" style={{ fontSize: '1.05rem' }}>Lebanon</span>
          </div>
        </div>
      </div>
    </section>
  )
}
