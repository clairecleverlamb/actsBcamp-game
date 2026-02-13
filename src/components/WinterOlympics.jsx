import { useState } from 'react'
import './WinterOlympics.css'

export default function WinterOlympics() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="section olympics-section">
      <div className={`flip-container ${revealed ? 'flipped' : ''}`} onClick={() => setRevealed((r) => !r)}>
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
