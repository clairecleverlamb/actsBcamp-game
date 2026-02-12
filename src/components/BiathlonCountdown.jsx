import { useState, useEffect, useRef } from 'react'
import './BiathlonCountdown.css'

function formatTime(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function BiathlonCountdown() {
  const [seconds, setSeconds] = useState(600)
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
      <p className="section-label">Biathlon Match</p>
      <h2 className="section-title">Race Countdown</h2>
      <div className={`countdown-box ${seconds <= 60 ? 'countdown-warning' : ''}`}>
        <div className="countdown-display">{formatTime(seconds)}</div>
        <p className="countdown-label">10 minute match — Get ready!</p>
        <div className="timer-buttons">
          <button
            className="btn btn-primary"
            onClick={() => setIsRunning(true)}
            disabled={isRunning}
          >
            Start Race
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
              setSeconds(600)
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
