export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div>
          <p className="section-label" style={{ color: '#9FB6D9' }}>Get in touch</p>
          <h2>Have a project in mind? Let's talk about it.</h2>
          <p className="contact-copy">
            The fastest way to reach me is WhatsApp — I usually reply the same day.
            Email works too if you'd rather write it all out first.
          </p>
          <a
            className="btn btn-on-dark"
            href="https://wa.me/96176724176?text=Hi%20Mohammed%20Alhaj,%20I'm%20interested%20in%20working%20with%20you."
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>

        <div className="contact-list">
          <div className="contact-item">
            <span className="contact-item-label">Email</span>
            <a href="mailto:mohammedalhaj14@gmail.com">mohammedalhaj14@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-item-label">Phone</span>
            <a href="tel:+96176724176">+961 76 724 176</a>
          </div>
          <div className="contact-item">
            <span className="contact-item-label">GitHub</span>
            <a href="https://github.com/mohammedalhaj14" target="_blank" rel="noreferrer">
              github.com/mohammedalhaj14
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-item-label">WhatsApp</span>
            <a href="https://wa.me/96176724176" target="_blank" rel="noreferrer">
              +961 76 724 176
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
