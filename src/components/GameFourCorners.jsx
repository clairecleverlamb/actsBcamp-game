import { useState, useEffect, useRef } from 'react'
import './GameFourCorners.css'

function formatTime(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function SunIcon() {
  return (
    <svg viewBox="0 0 80 80" className="choice-icon sun-icon">
      <defs>
        <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="22" fill="url(#sunGrad)" />
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180
        return (
          <line
            key={i}
            x1={40 + 28 * Math.cos(angle)}
            y1={40 + 28 * Math.sin(angle)}
            x2={40 + 38 * Math.cos(angle)}
            y2={40 + 38 * Math.sin(angle)}
            stroke="url(#sunGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        )
      })}
      <ellipse cx="40" cy="38" rx="8" ry="4" fill="#1e293b" />
      <rect x="34" y="32" width="12" height="3" rx="1" fill="#1e293b" />
    </svg>
  )
}

function SnowflakeIcon() {
  const rays = 6
  return (
    <svg viewBox="0 0 80 80" className="choice-icon snowflake-icon">
      <defs>
        <linearGradient id="snowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <g stroke="url(#snowGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none">
        {Array.from({ length: rays }, (_, i) => {
          const angle = (i * 360 / rays) * Math.PI / 180
          const c = Math.cos(angle)
          const s = Math.sin(angle)
          return (
            <g key={i}>
              <line x1={40} y1={40} x2={40 + 32 * c} y2={40 + 32 * s} />
              <line x1={40 + 12 * c} y1={40 + 12 * s} x2={40 + 22 * c} y2={40 + 22 * s} />
              <line x1={40 - 12 * c} y1={40 - 12 * s} x2={40 - 22 * c} y2={40 - 22 * s} />
              <line x1={40 + 10 * c - 6 * s} y1={40 + 10 * s + 6 * c} x2={40 + 18 * c - 11 * s} y2={40 + 18 * s + 11 * c} />
              <line x1={40 - 10 * c + 6 * s} y1={40 - 10 * s - 6 * c} x2={40 - 18 * c + 11 * s} y2={40 - 18 * s - 11 * c} />
            </g>
          )
        })}
      </g>
      <circle cx="40" cy="40" r="5" fill="url(#snowGrad)" opacity="0.9" />
    </svg>
  )
}

export default function GameFourCorners() {
  const [seconds, setSeconds] = useState(120)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!isRunning) return
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 0) {
          setIsRunning(false)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [isRunning])

  return (
    <div className="section">
      <p className="section-label">Game 1</p>
      <h2 className="section-title">4 Corners</h2>
      <div className="card">
        <div className="corners-question">
          <p className="question-text">Do you enjoy the Summer or Winter more?</p>
          <div className="choices-row">
            <div className="choice choice-summer">
              <SunIcon />
              <span>Summer</span>
            </div>
            <div className="choice-divider" />
            <div className="choice choice-winter">
              <SnowflakeIcon />
              <span>Winter</span>
            </div>
          </div>
        </div>
        <div className={`timer-box ${seconds <= 30 ? 'timer-warning' : ''}`}>
          <p className="section-label">Get to Know Each Other — Switch Timer</p>
          <div className="timer-display">{formatTime(seconds)}</div>
          <p className="timer-label">Time until switch to next group</p>
          <div className="timer-buttons">
            <button
              className="btn btn-primary"
              onClick={() => setIsRunning(true)}
              disabled={isRunning}
            >
              Start
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsRunning(false)}
            >
              Pause
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setIsRunning(false)
                setSeconds(120)
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
