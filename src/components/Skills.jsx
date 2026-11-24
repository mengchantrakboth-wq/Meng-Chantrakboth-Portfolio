
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Server,
  Layers,
  Database,
  GitBranch,
  Coffee,
  Leaf,
  Container,
  Terminal,
  FileCode2,
  Globe,
  Workflow,
  Table2,
} from 'lucide-react'

import Reveal from './Reveal'
import SectionHead from './SectionHead'

const skillGroups = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces.',
    icon: Palette,
    skills: [
      { icon: Code2, name: 'HTML5' },
      { icon: Palette, name: 'CSS3' },
      { icon: Braces, name: 'JavaScript' },
      { icon: Atom, name: 'React' },
      { icon: Layers, name: 'Tailwind CSS' },
      { icon: Globe, name: 'Bootstrap' },
      { icon: Workflow, name: 'Ajax' },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Developing server-side applications and REST APIs.',
    icon: Server,
    featured: true,
    skills: [
      { icon: FileCode2, name: 'PHP' },
      { icon: Layers, name: 'Laravel' },
      { icon: Coffee, name: 'Java' },
      { icon: Leaf, name: 'Spring Boot' },
      { icon: Terminal, name: 'C / C++' },
      { icon: Server, name: 'REST API' },
    ],
  },
  {
    title: 'Database & Tools',
    description: 'Managing data, version control, and development environments.',
    icon: Database,
    skills: [
      { icon: Database, name: 'MySQL' },
      { icon: Database, name: 'PostgreSQL' },
      { icon: GitBranch, name: 'Git' },
      { icon: GitBranch, name: 'GitHub' },
      { icon: Container, name: 'Docker' },
      { icon: Table2, name: 'Database Design' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHead eyebrow="WHAT I WORK WITH" title="TECHNICAL SKILLS" />

      <div className="skills-intro">
        <p>
          Technologies and tools I have studied, practiced, and used
          throughout my software development journey.
        </p>
      </div>

      <div className="skills-groups">
        {skillGroups.map((group, i) => {
          const GroupIcon = group.icon

          return (
            <Reveal key={group.title} delay={i * 0.12}>
              <article
                className={`glass skill-group ${
                  group.featured ? 'skill-group-featured' : ''
                }`}
              >
                <div className="skill-group-header">
                  <div className="skill-group-icon">
                    <GroupIcon size={22} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>

                  <span className="skill-count">
                    {String(group.skills.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="skill-items">
                  {group.skills.map(({ icon: Icon, name }) => (
                    <div className="skill-item" key={name}>
                      <Icon size={19} strokeWidth={1.7} />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
