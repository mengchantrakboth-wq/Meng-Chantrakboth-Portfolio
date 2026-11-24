import { Check, Download } from 'lucide-react'
import Reveal from './Reveal'
import Magnetic from './Magnetic'
import Avatar from './Avatar'

const points = [
  'Backend development with Laravel and Spring Boot',
  'RESTful API development and database integration',
  'Java, PHP, JavaScript, and SQL',
  'Git, GitHub, Docker, and collaborative development',
]

export default function About() {
  return (
    <section
      id="about"
      className="section container grid items-center gap-12 min-[961px]:grid-cols-[0.9fr_1.1fr] min-[961px]:gap-16"
    >
      {/* Visual */}
      <Reveal className="relative grid min-h-[350px] place-items-center pb-0 pl-6 pr-[18px] pt-6 min-[761px]:min-h-[400px] min-[761px]:pr-0 min-[961px]:min-h-0">
        <Avatar side="left" />

        <div className="glass float-slow absolute bottom-[6%] right-[2%] grid px-5 py-3.5 max-[400px]:bottom-[2%] max-[400px]:right-0">
          <strong className="grad font-[family-name:var(--font-heading)] text-[2rem] leading-none">
            CS
          </strong>
          <span className="font-[family-name:var(--font-body)] text-xs text-[color:var(--muted)]">
            Computer Science Student
          </span>
        </div>
      </Reveal>

      {/* Content */}
      <Reveal delay={0.15}>
        <span className="badge">ABOUT ME</span>

        <h2 className="mt-[18px] font-[family-name:var(--font-heading)] text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.2] tracking-[-0.035em] max-[760px]:text-[clamp(1.8rem,7vw,2.4rem)]">
          Passionate about building reliable software and backend systems.
        </h2>

        <div className="mb-6 mt-3.5 max-w-[520px] space-y-4 font-[family-name:var(--font-body)] text-base leading-[1.85] text-[color:var(--muted)] max-[760px]:text-[0.94rem]">
          <p>
            I'm a Computer Science student at the Royal University of Phnom
            Penh with a strong interest in backend development and software
            engineering. My journey started with programming fundamentals and
            gradually expanded into web development, database systems, and
            backend architecture.
          </p>
          <p>
            I've worked with technologies such as PHP, Laravel, Java, Spring
            Boot, and JavaScript, building RESTful APIs and database-driven
            applications through training, coursework, and collaborative
            projects.
          </p>
          <p>
            I enjoy understanding how things work behind the scenes — from
            designing database structures and implementing business logic to
            building APIs that connect different parts of an application.
            Currently, I'm strengthening my backend engineering skills and
            exploring modern software architecture.
          </p>
        </div>

        <ul className="mb-[30px] grid gap-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-center gap-3 font-[family-name:var(--font-body)] text-[0.92rem]"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-black text-white">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              {p}
            </li>
          ))}
        </ul>

        {/* Put your CV at public/cv.pdf */}
        <Magnetic>
          <a href="/cv.pdf" download className="btn btn-primary">
            <Download size={16} aria-hidden="true" /> DOWNLOAD CV
          </a>
        </Magnetic>
      </Reveal>
    </section>
  )
}