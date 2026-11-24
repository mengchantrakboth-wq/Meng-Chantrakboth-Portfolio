import { motion } from 'framer-motion'

// Scroll-triggered fade-up. Use `delay` for staggering.
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag className={className} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </Tag>
  )
}
