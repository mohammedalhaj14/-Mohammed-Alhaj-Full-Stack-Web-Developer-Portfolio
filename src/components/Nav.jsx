export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="nav-mark">
          <span className="nav-mark-badge">MA</span>
          Mohammed Alhaj
        </a>
        <nav className="nav-links">
          <a className="nav-link" href="#case-studies">Work</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#contact">Contact</a>
          <a
            className="btn btn-primary"
            href="https://wa.me/96176724176?text=Hi%20Mohammed%20Alhaj!"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp me
          </a>
        </nav>
      </div>
    </header>
  )
}
