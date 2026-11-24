import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

// Set `image` to a path/URL (e.g. '/projects/p1.jpg') to replace a placeholder.
const projects = [
  { title: 'WEBSITE PROJECT 01', category: 'Web Development', image: '', href: '#' },
  { title: 'WEBSITE PROJECT 02', category: 'Web Development', image: '', href: '#' },
  { title: 'POSTER DESIGNS', category: 'Graphic Design', image: '', href: '#' },
  { title: 'WEBSITE UI MOCKUPS', category: 'UI / UX', image: '', href: '#' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section container">
      <SectionHead eyebrow="PORTFOLIO" title="PORTFOLIO" sub="Some projects I've worked on." />
      <div className="grid-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.12}>
            <a href={p.href} className="project">
              <div className="thumb">
                {p.image ? <img src={p.image} alt={p.title} loading="lazy" /> : <span className="thumb-ph" />}
                <span className="chip">{p.category}</span>
              </div>
              <div className="project-info">
                <h3>{p.title}</h3>
                <span className="view">VIEW PROJECT <ArrowUpRight size={18} /></span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
