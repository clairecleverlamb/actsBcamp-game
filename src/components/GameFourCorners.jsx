import { useState, useEffect, useRef } from 'react'
import './GameFourCorners.css'

function formatTime(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}


export function FourCornersQuestion() {
  return (
    <div className="section">
      <p className="section-label">Game 1</p>
      <h2 className="section-title">4 Corners</h2>
      <div className="card">
        <div className="corners-question">
          <p className="question-text">Do you enjoy the Summer or Winter more?</p>
          <div className="sw-image-wrapper">
            <img src="/summerwinter.png" alt="Summer vs Winter" className="sw-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function FourCornersQuestion2() {
  return (
    <div className="section">
      <div className="card">
        <div className="corners-question">
          <p className="question-text">On a nice day, do you prefer taking a walk or staying indoors?</p>
          <div className="choices-stack">
            <div className="choice-box choice-walk">
              <img src="/walk.jpg" alt="Taking a walk" />
            </div>
            <div className="choice-box choice-indoor">
              <img src="/indoor.png" alt="Staying indoors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function playTimesUpSound() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)()

  // Three ascending alert beeps
  const notes = [660, 880, 1100]
  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'square'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.25)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.25 + 0.2)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(ctx.currentTime + i * 0.25)
    osc.stop(ctx.currentTime + i * 0.25 + 0.2)
  })

  // Final long buzzer
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'sawtooth'
  osc.frequency.value = 440
  gain.gain.setValueAtTime(0.25, ctx.currentTime + 0.8)
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.8)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(ctx.currentTime + 0.8)
  osc.stop(ctx.currentTime + 1.8)

  setTimeout(() => ctx.close(), 2500)
}

export function FourCornersTimer() {
  const [seconds, setSeconds] = useState(120)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!isRunning) return
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setIsRunning(false)
          playTimesUpSound()
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [isRunning])

  return (
    <div className="section">
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
  )
}
