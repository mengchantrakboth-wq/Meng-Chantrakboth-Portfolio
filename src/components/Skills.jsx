import {
  Code2, Palette, Braces, Atom, Server, Layers, Database, GitBranch,
  Coffee, Leaf, Container, Terminal, FileCode2, Globe, Workflow, Table2,
} from 'lucide-react'

import Reveal from './Reveal'
import SectionHead from './SectionHead'

const skillGroups = [
  {
    title: 'Backend Development',
    description: 'Developing server-side applications and REST APIs.',
    icon: Server,
    featured: true,
    span: 'md:col-span-2',
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
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces.',
    icon: Palette,
    span: '',
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
    title: 'Database & Tools',
    description: 'Managing data, version control, and development environments.',
    icon: Database,
    span: 'lg:col-span-3',
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

function GroupCard({ group, index }) {
  const GroupIcon = group.icon

  return (
    <article
      className={`group relative h-full overflow-hidden rounded-[var(--r)] border bg-white p-6 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8 ${
        group.featured
          ? 'border-[var(--silver)] hover:border-black'
          : 'border-[var(--alto)] hover:border-[var(--gray)]'
      }`}
    >
      {/* Watermark number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-2 select-none font-[family-name:var(--font-heading)] text-7xl font-bold leading-none text-black/[0.05] sm:text-8xl"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Header */}
      <div className="relative flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
            group.featured
              ? 'bg-black text-white'
              : 'bg-[rgba(217,217,217,0.4)] text-black'
          }`}
        >
          <GroupIcon size={22} strokeWidth={1.7} aria-hidden="true" />
        </div>

        <div className="min-w-0 pr-10">
          <p className="mb-1 font-[family-name:var(--font-heading)] text-[10px] font-semibold tracking-[0.18em] text-[color:var(--muted)]">
            {String(group.skills.length).padStart(2, '0')} TECHNOLOGIES
          </p>
          <h3 className="text-lg font-semibold tracking-[0.02em]">
            {group.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--muted)]">
            {group.description}
          </p>
        </div>
      </div>

      {/* Skill chips */}
      <ul className="relative mt-7 flex flex-wrap gap-2.5">
        {group.skills.map(({ icon: Icon, name }) => (
          <li
            key={name}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--alto)] bg-[#f5f5f5] px-4 py-2.5 font-[family-name:var(--font-heading)] text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <Icon size={16} strokeWidth={1.7} aria-hidden="true" className="shrink-0" />
            {name}
          </li>
        ))}
      </ul>

      {/* Bottom hover bar (same as your .card::after) */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-black to-[var(--gray)] transition-transform duration-500 group-hover:scale-x-100"
      />
    </article>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHead eyebrow="WHAT I WORK WITH" title="TECHNICAL SKILLS" />

      <p className="mx-auto -mt-6 mb-12 max-w-xl text-center text-[15px] leading-relaxed text-[color:var(--muted)]">
        Technologies and tools I have studied, practiced, and used throughout
        my software development journey.
      </p>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <div key={group.title} className={`${group.span} [&>*]:h-full`}>
            <Reveal delay={i * 0.12}>
              <GroupCard group={group} index={i} />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}