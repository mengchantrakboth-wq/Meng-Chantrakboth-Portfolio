
import { motion } from 'framer-motion'
import { Server, Database, Coffee, Leaf } from 'lucide-react'
import Magnetic from './Magnetic'
import Avatar from './Avatar'

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const stack = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
}

const techs = [
  [Server, 'Laravel'],
  [Coffee, 'Java'],
  [Leaf, 'Spring Boot'],
  [Database, 'PostgreSQL']
]

export default function Hero() {
  return (
    <section id="home" className="section hero container">

      <motion.div
        variants={stack}
        initial="hidden"
        animate="show"
        className="hero-text"
      >
        <motion.span variants={item} className="badge">
          <i className="dot" /> BACKEND DEVELOPER
        </motion.span>

        <motion.h1 variants={item}>
          Hi, I'm <span className="grad">Meng Chantrakboth.</span>
        </motion.h1>

        <motion.h2 variants={item}>
          Computer Science Student & Backend Developer
        </motion.h2>

        <motion.p variants={item}>
          I'm a Computer Science student at the Royal University of Phnom Penh
          with a passion for backend development and software engineering.
          I enjoy building RESTful APIs, designing databases, and developing
          reliable applications using Laravel, Java, and Spring Boot.
          Currently, I'm expanding my knowledge of backend architecture,
          database optimization, and modern software development practices.
        </motion.p>

        <motion.div variants={item} className="btn-row">
          <Magnetic>
            <a href="#contact" className="btn btn-primary">
              LET'S TALK
            </a>
          </Magnetic>

          <Magnetic>
            <a href="#portfolio" className="btn btn-ghost">
              VIEW MY WORK
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <span className="visual-glow" />

        <div className="float">
          <Avatar side="right" />
        </div>

        {techs.map(([Icon, name], i) => (
          <span
            key={name}
            className={`tech tech${i + 1}`}
            title={name}
            aria-label={name}
          >
            <Icon size={22} />
          </span>
        ))}
      </motion.div>

    </section>
  )
}
