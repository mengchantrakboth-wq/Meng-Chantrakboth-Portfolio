import { Monitor, Wrench, PenTool } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

const services = [
  { icon: Monitor, title: 'WEB DEVELOPMENT', text: 'Fast, responsive websites built with modern technologies, clean code and a mobile-first approach.' },
  { icon: Wrench, title: 'WEBSITE SETUP', text: 'Complete setup including SSL, domains, cPanel and FTP, so your site launches secure and runs smoothly.' },
  { icon: PenTool, title: 'DESIGN TO CODE', text: 'UI designs and graphics converted into pixel-perfect, responsive websites.' },
]

export default function Services() {
  return (
    <section id="services" className="section container">
      <SectionHead eyebrow="SERVICES" title="WHAT I DO" sub="Turning creative ideas into digital experiences." />
      <div className="grid-3">
        {services.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.12}>
            <article className="card lift">
              <span className="icon-box"><Icon size={26} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
