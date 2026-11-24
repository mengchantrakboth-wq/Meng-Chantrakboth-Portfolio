import Reveal from './Reveal'

export default function SectionHead({ eyebrow, title, sub }) {
  return (
    <Reveal className="sec-head">
      <span className="badge">{eyebrow}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  )
}
