import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import './CelebrationModal.css'

function fireConfetti() {
  const duration = 5000
  const end = Date.now() + duration
  const colors = ['#4f46e5', '#818cf8', '#fef08a', '#facc15', '#f97316', '#fb923c', '#e0e7ff', '#fff']

  const frame = () => {
    confetti({
      particleCount: 12,
      angle: 60,
      spread: 70,
      origin: { x: 0 },
      colors,
    })
    confetti({
      particleCount: 12,
      angle: 120,
      spread: 70,
      origin: { x: 1 },
      colors,
    })
    confetti({
      particleCount: 8,
      angle: 90,
      spread: 100,
      origin: { x: 0.5, y: 0 },
      colors,
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  }
  frame()

  setTimeout(() => {
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { x: 0.5, y: 0.5 },
      colors,
    })
  }, 100)

  setTimeout(() => {
    confetti({
      particleCount: 150,
      angle: 90,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors,
    })
  }, 500)
}

export default function CelebrationModal({ isOpen, teamName, onClose }) {
  const audioRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      fireConfetti()
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
      <audio ref={audioRef} src="/CELEBRATION.m4a" />
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
