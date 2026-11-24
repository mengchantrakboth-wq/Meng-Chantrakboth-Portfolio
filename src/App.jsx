import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Resume from './components/Resume'

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero /><Services /><About /><Resume/><Portfolio /><Skills /><Contact />
      </main>
      <Footer />
      
    </>
  )
}
