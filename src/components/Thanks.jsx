import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import './Thanks.css'

export default function Thanks() {
  const sectionRef = useRef(null)
  const firedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !firedRef.current) {
          firedRef.current = true
          const end = Date.now() + 3000
          const colors = ['#4f46e5', '#818cf8', '#fef08a', '#facc15', '#f97316', '#fff']
          const frame = () => {
            confetti({
              particleCount: 4,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors,
            })
            confetti({
              particleCount: 4,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors,
            })
            if (Date.now() < end) requestAnimationFrame(frame)
          }
          frame()
        }
      },
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="section thanks-section" ref={sectionRef}>
      <div className="thanks-content">
        <h2 className="thanks-title">Thanks for Playing!</h2>
        <p className="thanks-text">Let's dive into the book of Acts NOW</p>
      </div>
    </div>
  )
}
