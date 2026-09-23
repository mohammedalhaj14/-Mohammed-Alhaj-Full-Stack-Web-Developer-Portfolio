export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} Mohammed Alhaj. All rights reserved.</span>
        <div className="footer-links">
          <a href="https://github.com/mohammedalhaj14" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:mohammedalhaj14@gmail.com">Email</a>
          <a href="https://wa.me/96176724176" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
