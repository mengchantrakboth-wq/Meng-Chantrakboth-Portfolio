
import { GraduationCap, Briefcase } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

const education = [
  {
    title: 'Bachelor of Computer Science',
    place: 'Royal University of Phnom Penh (RUPP)',
    period: '2024 – Present',
    text: 'Studying computer science with a focus on programming, software development, database systems, networking, data structures, and application development.',
  },
  {
    title: 'Bachelor of Arts in Teaching English as a Second Language (TSOL)',
    place: 'Faculty of Pali, Sanskrit and Foreign Languages (PSBU)',
    period: '2024 – Present',
    text: 'Studying English language skills, communication, academic reading, and writing.',
  },
  {
    title: 'High School Diploma – Science',
    place: 'Chea Sim Santhormok High School',
    period: 'Graduated 2024',
    text: 'Completed high school education in the Science program.',
  },
]

const experience = [
  {
    title: 'Backend Developer Intern',
    place: 'ETEC Center',
    period: '2026',
    text: 'Completed practical backend development training using Laravel, RESTful APIs, database integration, and collaborative software development.',
  },
  {
    title: 'Software Development Trainee',
    place: 'ETEC Center',
    period: '2024 – 2026',
    text: 'Completed hands-on programming training covering C/C++, Java, HTML, CSS, JavaScript, React, PHP, MySQL, AJAX, and Laravel.',
  },
  {
    title: 'Backend Developer – Personal & Team Projects',
    place: 'Academic and Collaborative Projects',
    period: '2025 – Present',
    text: 'Built backend applications and RESTful APIs using Laravel and Spring Boot. Practiced database design, PostgreSQL, MySQL, Docker, Git, API validation, JPA relationships, and application architecture.',
  },
]

function Column({ icon: Icon, heading, items, delay }) {
  return (
    <Reveal delay={delay} className="resume-col">
      <h3>
        <span className="icon-box"><Icon size={22} /></span>
        {heading}
      </h3>

      <div className="timeline">
        {items.map((it) => (
          <article key={it.title + it.period} className="t-item">
            <span className="t-period">{it.period}</span>
            <h4>{it.title}</h4>
            <span className="t-place">{it.place}</span>
            <p>{it.text}</p>
          </article>
        ))}
      </div>
    </Reveal>
  )
}

export default function Resume() {
  return (
    <section id="resume" className="section container">
      <SectionHead
        eyebrow="RESUME"
        title="EDUCATION & EXPERIENCE"
        sub="My academic background, technical training, and development journey."
      />

      <div className="resume-grid">
        <Column
          icon={GraduationCap}
          heading="Education"
          items={education}
        />

        <Column
          icon={Briefcase}
          heading="Experience & Training"
          items={experience}
          delay={0.12}
        />
      </div>
    </section>
  )
}
