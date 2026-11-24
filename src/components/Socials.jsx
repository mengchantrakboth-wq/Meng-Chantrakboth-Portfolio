import { Facebook, Pin } from 'lucide-react'

// Placeholder links - replace with your own profiles.
const items = [
  [Facebook, 'Facebook', 'https://www.facebook.com/meng.chantrakboth'],
  [Pin, 'Pinterest', 'https://pinterest.com/your-username'],
]

export default function Socials() {
  return (
    <ul className="socials">
      {items.map(([Icon, label, href]) => (
        <li key={label}><a href={href} aria-label={label} target="_blank" rel="noreferrer"><Icon size={18} /></a></li>
      ))}
    </ul>
  )
}
