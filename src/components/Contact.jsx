
import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import Reveal from './Reveal'
import Magnetic from './Magnetic'
import Socials from './Socials'

const fields = [
  ['name', 'Full Name', 'text'],
  ['email', 'Email Address', 'email'],
  ['subject', 'Subject', 'text']
]

const empty = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const EMAIL = 'mengchantrakboth@gmail.com'

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const change = (e) => {
    setSent(false)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault()

    const err = {}

    if (!form.name.trim()) {
      err.name = 'Please enter your name.'
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      err.email = 'Please enter a valid email address.'
    }

    if (!form.subject.trim()) {
      err.subject = 'Please enter a subject.'
    }

    if (form.message.trim().length < 10) {
      err.message = 'Message must contain at least 10 characters.'
    }

    setErrors(err)

    if (Object.keys(err).length) return

    // Frontend demo: opens the visitor's default email application.
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`

    window.location.href = mailto

    setSent(true)
    setForm(empty)
  }

  return (
    <section id="contact" className="section contact-band">
      <span className="deco deco1" />
      <span className="deco deco2" />

      <div className="container contact">

        {/* Contact information */}
        <Reveal>
          <span className="badge">GET IN TOUCH</span>

          <h2 className="contact-title">
            HAVE A PROJECT IN MIND?
            <span className="grad">
              LET'S BUILD SOMETHING GREAT TOGETHER.
            </span>
          </h2>

          <p className="lead">
            I'm always interested in connecting with developers,
            collaborating on projects, and exploring new opportunities
            to grow as a backend developer.
          </p>

          <a className="mail" href={`mailto:${EMAIL}`}>
            <Mail size={18} />
            {EMAIL}
          </a>

          <Socials />

          <div className="btn-row">
            <Magnetic>
              <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                CONTACT ME
              </a>
            </Magnetic>

            <Magnetic>
              <a href="#portfolio" className="btn btn-ghost">
                VIEW MY WORK
              </a>
            </Magnetic>
          </div>
        </Reveal>

        {/* Contact form */}
        <Reveal delay={0.15}>
          <form
            className="glass form"
            onSubmit={submit}
            noValidate
          >
            {fields.map(([name, label, type]) => (
              <label key={name}>
                {label}

                <input
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={change}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  aria-invalid={!!errors[name]}
                />

                {errors[name] && (
                  <small role="alert">{errors[name]}</small>
                )}
              </label>
            ))}

            <label>
              Message

              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={change}
                placeholder="Tell me about your project or opportunity..."
                aria-invalid={!!errors.message}
              />

              {errors.message && (
                <small role="alert">{errors.message}</small>
              )}
            </label>

            <button className="btn btn-primary" type="submit">
              <Send size={16} />
              SEND MESSAGE
            </button>

            {sent && (
              <p className="ok" role="status">
                Your email application should open with your message prepared.
              </p>
            )}
          </form>
        </Reveal>

      </div>
    </section>
  )
}
