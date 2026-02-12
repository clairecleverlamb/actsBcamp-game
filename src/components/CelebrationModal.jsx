import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import './CelebrationModal.css'

function fireConfetti() {
  const duration = 5000
  const end = Date.now() + duration
  const colors = ['#0d9488', '#0f766e', '#fef3c7', '#fcd34d', '#5eead4', '#7dd3fc', '#ea580c', '#fff']

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
  useEffect(() => {
    if (isOpen) fireConfetti()
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="celebration-overlay" onClick={onClose}>
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
