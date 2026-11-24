import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['home', 'about', 'resume' , 'services', 'portfolio', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <header className="nav-wrap">
      <motion.nav className="nav glass" aria-label="Main" initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <a href="#home" className="logo">MENG <span className="grad">CHANTRAKBOTH</span></a>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
                {active === id && <motion.span layoutId="pill" className="pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                <span>{id.toUpperCase()}</span>
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  )
}
