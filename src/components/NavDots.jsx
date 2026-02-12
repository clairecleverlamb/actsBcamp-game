import './NavDots.css'

const sections = [
  { id: 'game1', href: '#game1' },
  { id: 'game2', href: '#game2' },
  { id: 'game3', href: '#game3' },
  { id: 'biathlon', href: '#biathlon' },
  { id: 'winners', href: '#winners' },
  { id: 'thanks', href: '#thanks' },
]

export default function NavDots({ activeSection }) {
  return (
    <nav className="nav-dots">
      {sections.map(({ id, href }) => (
        <a
          key={id}
          href={href}
          className={`nav-dot ${activeSection === id ? 'active' : ''}`}
          aria-label={`Go to ${id}`}
        />
      ))}
    </nav>
  )
}
