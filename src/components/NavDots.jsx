import './NavDots.css'

const sections = [
  { id: 'game1-q', href: '#game1-q' },
  { id: 'game1-q2', href: '#game1-q2' },
  { id: 'game1-timer', href: '#game1-timer' },
  { id: 'game2-intro', href: '#game2-intro' },
  { id: 'game2-commands', href: '#game2-commands' },
  { id: 'olympics', href: '#olympics' },
  { id: 'game3-intro', href: '#game3-intro' },
  { id: 'game3-acts', href: '#game3-acts' },
  { id: 'game3-rules', href: '#game3-rules' },
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
