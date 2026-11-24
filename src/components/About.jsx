
import { Check, Download } from 'lucide-react'
import Reveal from './Reveal'
import Magnetic from './Magnetic'
import Avatar from './Avatar'

const points = [
  'Backend development with Laravel and Spring Boot',
  'RESTful API development and database integration',
  'Java, PHP, JavaScript, and SQL',
  'Git, GitHub, Docker, and collaborative development'
]

export default function About() {
  return (
    <section id="about" className="section container about">

      <Reveal className="about-visual">
        <Avatar side="left" />

        <div className="exp glass float-slow">
          <strong className="grad">CS</strong>
          <span>Computer Science Student</span>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <span className="badge">ABOUT ME</span>

        <h2 className="about-title">
          Passionate about building reliable software and backend systems.
        </h2>

        <p className="lead">
          I'm a Computer Science student at the Royal University of Phnom Penh
          with a strong interest in backend development and software engineering.
          My journey started with programming fundamentals and gradually
          expanded into web development, database systems, and backend architecture.

          I've worked with technologies such as PHP, Laravel, Java, Spring Boot,
          and JavaScript, building RESTful APIs and database-driven applications
          through training, coursework, and collaborative projects.

          I enjoy understanding how things work behind the scenes — from
          designing database structures and implementing business logic
          to building APIs that connect different parts of an application.
          Currently, I'm strengthening my backend engineering skills and
          exploring modern software architecture.
        </p>

        <ul className="checks">
          {points.map((p) => (
            <li key={p}>
              <span className="tick">
                <Check size={14} strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>

        {/* Put your CV at public/cv.pdf */}
        <Magnetic>
          <a href="/cv.pdf" download className="btn btn-primary">
            <Download size={16} /> DOWNLOAD CV
          </a>
        </Magnetic>

      </Reveal>
    </section>
  )
}
