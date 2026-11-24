import { useEffect, useMemo } from 'react'
import { motion, useMotionValue, useSpring, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const rnd = (a, b) => a + Math.random() * (b - a)
const bubbles = [
  { s: 180, l: '6%', t: '18%' }, { s: 90, l: '82%', t: '12%' }, { s: 130, l: '74%', t: '58%' },
  { s: 70, l: '12%', t: '72%' }, { s: 110, l: '45%', t: '88%' },
]

export default function AnimatedBackground() {
  const reduce = useReducedMotion()
  const mx = useSpring(useMotionValue(-500), { stiffness: 80, damping: 20 })
  const my = useSpring(useMotionValue(-500), { stiffness: 80, damping: 20 })
  const { scrollYProgress } = useScroll()
  // Scrolling slides the wallpaper and deepens the gray wash, so sections blend into each other.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const wash = useTransform(scrollYProgress, [0, 0.5, 1], [0.45, 0.9, 0.45])

  const particles = useMemo(() => Array.from({ length: 24 }, (_, i) => ({
    left: `${rnd(0, 100)}%`, top: `${rnd(0, 100)}%`, size: rnd(3, 6), alt: i % 2 === 0,
    dx: `${rnd(-70, 70)}px`, dy: `${rnd(-110, 110)}px`, dur: `${rnd(12, 24)}s`, delay: `${rnd(-24, 0)}s`,
  })), [])

  useEffect(() => {
    if (reduce || !window.matchMedia('(hover: hover)').matches) return
    const move = (e) => { mx.set(e.clientX - 250); my.set(e.clientY - 250) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [reduce, mx, my])

  return (
    <div className="bg" aria-hidden="true">
      <motion.div className="bg-grad" style={{ y }} />
      <motion.div className="bg-wash" style={{ opacity: wash }} />
      <div className="bg-grid" />
      <span className="orb orb1" /><span className="orb orb2" /><span className="orb orb3" />
      {bubbles.map((b, i) => (
        <span key={i} className="bubble" style={{ width: b.s, height: b.s, left: b.l, top: b.t, animationDelay: `${-i * 3}s` }} />
      ))}
      <span className="shape shape-sq" /><span className="shape shape-ring" />
      {!reduce && particles.map((p, i) => (
        <span key={i} className={`particle ${p.alt ? 'alt' : ''}`} style={{ left: p.left, top: p.top, width: p.size, height: p.size, '--dx': p.dx, '--dy': p.dy, animationDuration: p.dur, animationDelay: p.delay }} />
      ))}
      {!reduce && <motion.div className="mouse-glow" style={{ x: mx, y: my }} />}
    </div>
  )
}
