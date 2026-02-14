import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import './CelebrationModal.css'

function fireConfetti(canvas) {
  const myConfetti = confetti.create(canvas, { resize: true, useWorker: true })
  const duration = 6000
  const end = Date.now() + duration
  const colors = ['#4f46e5', '#818cf8', '#fef08a', '#facc15', '#f97316', '#fb923c', '#e0e7ff', '#fff']

  // Continuous side cannons
  const frame = () => {
    // Left cannon
    myConfetti({
      particleCount: 6,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors,
      ticks: 200,
      gravity: 0.8,
      scalar: 1.2,
    })
    // Right cannon
    myConfetti({
      particleCount: 6,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors,
      ticks: 200,
      gravity: 0.8,
      scalar: 1.2,
    })
    // Top rain
    myConfetti({
      particleCount: 4,
      angle: 90,
      spread: 120,
      origin: { x: 0.5, y: -0.1 },
      colors,
      ticks: 300,
      gravity: 1.2,
      scalar: 1.1,
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  }
  frame()

  // Big initial burst from center
  myConfetti({
    particleCount: 250,
    spread: 180,
    origin: { x: 0.5, y: 0.45 },
    colors,
    ticks: 250,
    gravity: 0.7,
    scalar: 1.4,
  })

  // Delayed side bursts
  setTimeout(() => {
    myConfetti({ particleCount: 120, angle: 60, spread: 80, origin: { x: 0, y: 0.5 }, colors, scalar: 1.3 })
    myConfetti({ particleCount: 120, angle: 120, spread: 80, origin: { x: 1, y: 0.5 }, colors, scalar: 1.3 })
  }, 400)

  setTimeout(() => {
    myConfetti({ particleCount: 180, spread: 160, origin: { x: 0.5, y: 0.4 }, colors, scalar: 1.5 })
  }, 800)
}

export default function CelebrationModal({ isOpen, teamName, onClose }) {
  const audioRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      fireConfetti(canvasRef.current)
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play().catch(() => {})
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="celebration-overlay" onClick={() => { onClose() }}>
      <canvas ref={canvasRef} className="confetti-canvas" />
      <audio ref={audioRef} src="/CELEBRATION_precise_17s.m4a" />
      <div className="celebration-content" onClick={(e) => e.stopPropagation()}>
        <div className="celebration-trophy">🏆</div>
        <h2 className="celebration-title">Congratulations!</h2>
        <p className="celebration-team-name">{teamName}</p>
        <p className="celebration-wins">WINS!</p>
        <button className="btn btn-close-celebration" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
