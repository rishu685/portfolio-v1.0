import Nav        from './components/Nav'
import Hero       from './components/Hero'
import Ticker     from './components/Ticker'
import StatsBar   from './components/StatsBar'
import Services   from './components/Services'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import FAQ        from './components/FAQ'
import CTA        from './components/CTA'
import Footer     from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg text-white font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Ticker />
      <StatsBar />
      <Services />
      <Projects />
      <Experience />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
