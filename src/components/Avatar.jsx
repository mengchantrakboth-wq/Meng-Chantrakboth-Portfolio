// Profile image with an overlapping silver frame. Pass `src` to use your photo.
// side: "right" (hero) or "left" (about) sets which way the frame is offset.
export default function Avatar({ src='profile1.png', alt = 'Meng Chantakboth', side = 'right' }) {
  return (
    <div className={`frame frame--${side}`}>
      <div className="frame-img">{src ? <img src={src} alt={alt} loading="lazy" /> : <span>LK</span>}</div>
    </div>
  )
}
