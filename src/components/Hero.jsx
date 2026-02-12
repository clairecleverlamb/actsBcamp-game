import './Hero.css'

export default function Hero() {
  return (
    <header className="hero">
      <p className="hero-subtitle">Early Church · Gather · Scatter · Rejoice</p>
      <h1 className="hero-title">
        Acts Bible Camp
        <br />
        <span className="hero-title-accent">Ice Breaker Games!</span>
      </h1>
      <p className="scroll-hint">Scroll down to begin ↓</p>
      <div className="hero-ornaments" aria-hidden="true">
        <span className="ornament o1">✦</span>
        <span className="ornament o2">★</span>
        <span className="ornament o3">✦</span>
      </div>
    </header>
  )
}
