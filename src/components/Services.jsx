import { Server, Database, Code2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

const services = [
  {
    icon: Server,
    title: 'BACKEND DEVELOPMENT',
    text: 'Building reliable and scalable server-side applications using Java, Spring Boot, Laravel and modern backend technologies.',
  },
  {
    icon: Database,
    title: 'DATABASE MANAGEMENT',
    text: 'Designing, managing and optimizing relational databases using PostgreSQL and MySQL for efficient data storage and retrieval.',
  },
  {
    icon: Code2,
    title: 'REST API DEVELOPMENT',
    text: 'Developing secure and well-structured RESTful APIs with authentication, validation, error handling and seamless frontend integration.',
  },
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
