import { LangProvider, useLang } from './i18n.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import Credentials from './components/Credentials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function Page() {
  const { t, fading } = useLang()
  return (
    <div className={`page${fading ? ' fading' : ''}`}>
      <a className="skip" href="#main">{t.skip}</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Services />
        <Credentials />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}

export default function App({ initialLang = 'en' }) {
  return (
    <LangProvider initialLang={initialLang}>
      <Page />
    </LangProvider>
  )
}
