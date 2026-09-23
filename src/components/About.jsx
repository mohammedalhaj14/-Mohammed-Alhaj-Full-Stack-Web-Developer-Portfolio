const expertise = [
  {
    title: 'Frontend development',
    desc: 'Responsive, interactive interfaces built with React and modern CSS.',
  },
  {
    title: 'Backend development',
    desc: 'Server-side logic in PHP, Laravel and Node that holds up under real use.',
  },
  {
    title: 'Database design',
    desc: 'Schemas and queries structured for data that stays fast as it grows.',
  },
  {
    title: 'Full-stack integration',
    desc: 'End-to-end ownership, from data model to deployed interface.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="section-label">Overview</p>
          <h2 className="section-heading">A developer who works across the whole stack, not just one layer of it.</h2>
          <p>
            I'm a full-stack developer focused on building web applications that are
            scalable and genuinely usable — not just functional. That means spending as
            much care on session handling and database structure as on the interface
            someone sees.
          </p>
          <p>
            My toolkit spans HTML5, CSS3, JavaScript and React on the frontend, and PHP,
            Laravel, Python and Node.js on the backend, with MySQL for data. I use
            whichever combination fits the project, not whichever I know best.
          </p>
        </div>

        <div>
          {expertise.map((item) => (
            <div className="expertise-row" key={item.title}>
              <h3 className="expertise-title">{item.title}</h3>
              <p className="expertise-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
