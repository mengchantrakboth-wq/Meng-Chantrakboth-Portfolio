import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = ['home', 'about', 'resume', 'services', 'portfolio', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const reduceMotion = useReducedMotion()

  // Transparent at top, glass after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Close menu: Escape, outside tap, or resize up to desktop
  useEffect(() => {
    if (!open) return

    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onPointer = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false)
    }

    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const glass = scrolled || open

  return (
    <header className="sticky top-0 z-[100] px-4 pt-3.5 sm:px-5">
      <motion.nav
        ref={navRef}
        aria-label="Main"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`mx-auto max-w-[1100px] rounded-[30px] border transition-all duration-300 ${
          glass
            ? 'border-[var(--line)] bg-white/75 shadow-[var(--shadow)] backdrop-blur-xl'
            : 'border-transparent bg-transparent shadow-none'
        }`}
      >
        {/* Top row */}
        <div className="flex h-[60px] items-center justify-between pl-5 pr-3 sm:pl-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--font-heading)] text-[0.95rem] font-bold tracking-[0.06em] sm:text-[1.05rem]"
          >
            MENG <span className="grad">CHANTRAKBOTH</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'location' : undefined}
                  className={`relative block px-4 py-2 font-[family-name:var(--font-heading)] text-xs font-medium tracking-[0.08em] transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-black ${
                    active === id ? 'text-black' : 'text-[color:var(--muted)]'
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 400, damping: 32 }
                      }
                      className="absolute inset-0 rounded-full bg-[var(--alto)]"
                    />
                  )}
                  <span className="relative z-10">{id.toUpperCase()}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-black transition-colors hover:bg-[var(--alto)] lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile / tablet panel */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: 'easeInOut' }}
              className="overflow-hidden lg:hidden"
            >
              <div className="px-3 pb-3 sm:px-4">
                <ul className="grid gap-1 border-t border-[var(--line)] pt-3 sm:grid-cols-2">
                  {links.map((id) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={() => setOpen(false)}
                        aria-current={active === id ? 'location' : undefined}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3.5 font-[family-name:var(--font-heading)] text-[13px] font-medium tracking-[0.08em] transition-colors ${
                          active === id
                            ? 'bg-[var(--alto)] text-black'
                            : 'text-[color:var(--muted)] hover:bg-black/5 hover:text-black'
                        }`}
                      >
                        {id.toUpperCase()}
                        {active === id && (
                          <span className="h-1.5 w-1.5 rounded-full bg-black" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 font-[family-name:var(--font-heading)] text-[13px] font-semibold tracking-[0.04em] text-white transition-colors hover:bg-[var(--gray)]"
                >
                  LET'S TALK
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}