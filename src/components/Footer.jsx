import { useLang } from '../i18n.jsx'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="site-footer">
      <div className="wrap">
        {/* The year is evaluated at build time and again in the browser; suppress the harmless mismatch around New Year. */}
        <p>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> {t.footer}</p>
      </div>
    </footer>
  )
}
