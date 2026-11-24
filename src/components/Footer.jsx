
import { Mail, Facebook, Github, Linkedin } from 'lucide-react'

// Replace placeholder links with your actual profiles.
const contact = [
  [Mail, 'Email', 'mailto:your-email@example.com'],
  [Github, 'GitHub', 'https://github.com/mengchantrakboth-wq'],
  [Facebook, 'Facebook', 'https://facebook.com/your-username'],
  [Linkedin, 'LinkedIn', 'https://linkedin.com/in/your-username'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="logo">Meng Chantrakboth</p>

          <span className="tag">
            Backend Developer | Computer Science Student
          </span>

          <p className="copy">
            © {new Date().getFullYear()} Meng Chantrakboth.
            ALL RIGHTS RESERVED.
          </p>
        </div>

        <ul className="contact-list">
          {contact.map(([Icon, label, href]) => (
            <li key={label}>
              <Icon size={24} />
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
