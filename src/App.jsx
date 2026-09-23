import Nav from './components/Nav'
import Hero from './components/Hero'
import CoreStack from './components/CoreStack'
import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CoreStack />
        <About />
        <CaseStudies />
        <Projects />
      </main>
      <Contact />
      <Footer />
    </>
  )
}
