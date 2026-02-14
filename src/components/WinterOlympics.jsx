import { useState, useCallback } from 'react'
import './WinterOlympics.css'

function playRevealSound() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)()

  // Rising whoosh sweep
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(300, ctx.currentTime)
  osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.35)
  gain.gain.setValueAtTime(0.3, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(ctx.currentTime)
  osc.stop(ctx.currentTime + 0.5)

  // Bright shimmer chime
  const osc2 = ctx.createOscillator()
  const gain2 = ctx.createGain()
  osc2.type = 'triangle'
  osc2.frequency.setValueAtTime(800, ctx.currentTime + 0.15)
  osc2.frequency.exponentialRampToValueAtTime(1600, ctx.currentTime + 0.4)
  gain2.gain.setValueAtTime(0, ctx.currentTime)
  gain2.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.2)
  gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.7)
  osc2.connect(gain2)
  gain2.connect(ctx.destination)
  osc2.start(ctx.currentTime + 0.15)
  osc2.stop(ctx.currentTime + 0.7)

  // Impact hit
  const osc3 = ctx.createOscillator()
  const gain3 = ctx.createGain()
  osc3.type = 'square'
  osc3.frequency.setValueAtTime(150, ctx.currentTime + 0.3)
  osc3.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.55)
  gain3.gain.setValueAtTime(0.2, ctx.currentTime + 0.3)
  gain3.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6)
  osc3.connect(gain3)
  gain3.connect(ctx.destination)
  osc3.start(ctx.currentTime + 0.3)
  osc3.stop(ctx.currentTime + 0.6)

  setTimeout(() => ctx.close(), 1000)
}

export default function WinterOlympics() {
  const [revealed, setRevealed] = useState(false)

  const handleFlip = useCallback(() => {
    setRevealed((r) => {
      if (!r) playRevealSound()
      return !r
    })
  }, [])

  return (
    <div className="section olympics-section">
      <div className={`flip-container ${revealed ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flip-card">
          <div className="flip-front">
            <p className="flip-label">Next Up</p>
            <h2 className="flip-question">What big global sport event is happening in February 2026?</h2>
            <span className="click-hint">Click to reveal</span>
          </div>
          <div className="flip-back">
            <img
              src="/winter-olympics.jpg"
              alt="Winter Olympics 2026"
              className="olympics-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
