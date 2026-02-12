import './Hero.css'

export default function Hero() {
  return (
    <header className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/icebreaker_compressed.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-subtitle">Early Church · Gather · Scatter · Rejoice</p>
        <h1 className="hero-title">
          Acts Bible Camp
          <br />
          <span className="hero-title-accent">Ice Breaker Games!</span>
        </h1>
      </div>
      <p className="scroll-hint">Scroll down to begin ↓</p>
    </header>
  )
}
