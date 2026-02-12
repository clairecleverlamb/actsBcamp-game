import { useRef, useEffect } from 'react'
import './GamePirate.css'

const defaultCommands = [
  'HOUSE CHURCH of 3 (hands up making a house)',
  'PRAYER HUDDLE of 4 (closing eyes)',
  'Dining Table of 5 (Eating)',
  'MISSION TEAM of 6 (walking in a circle)',
  '… add more as needed',
]

export default function GamePirate() {
  const commandsRef = useRef(null)

  useEffect(() => {
    if (commandsRef.current) {
      commandsRef.current.innerHTML = defaultCommands
        .map((c) => `<li>${c}</li>`)
        .join('')
    }
  }, [])

  return (
    <div className="section">
      <p className="section-label">Game 2</p>
      <h2 className="section-title">Pirate Game — Acts Version</h2>
      <div className="card card-pirate">
        <p>
          We're about to play a fast group game. Everyone starts by moving around the room
          when I say <strong>"Scatter."</strong>
        </p>
        <p>
          When I call out a command, I will say a number and an action. The number tells you
          how many people must be in a group.
        </p>
        <p>You must quickly find that exact number of people and do the action together.</p>
        <p>
          Anyone who is not in a complete group will be eliminated and must step to the side.
        </p>
        <p>
          If you are standing alone, or still moving after group forming, you are out.
        </p>
        <p>We will repeat this until only a few people remain. Those people are the winners!</p>
        <div className="commands-area">
          <h4>Commands <span className="edit-hint">— tap to edit</span></h4>
          <ul ref={commandsRef} className="commands-list" contentEditable suppressContentEditableWarning />
        </div>
      </div>
    </div>
  )
}
