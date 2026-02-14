import { useState } from 'react'
import './GamePirate.css'

const commands = [
  { number: 3, name: 'HOUSE CHURCH', action: 'Hands up making a house', image: '/house3.png' },
  { number: 4, name: 'PRAYER HUDDLE', action: 'Closing eyes', image: '/prayer4.png' },
  { number: 5, name: 'DINING TABLE', action: 'Eating', image: '/eating5.png' },
  { number: 7, name: 'MISSION TEAM', action: 'Staying in line & tapping shoulders', image: '/trip7.png' },
  { number: 9, name: 'PRAISE BAND', action: 'Acting playing instruments or singing', image: '/praiseband9.png' },
  { number: 11, name: 'BIBLE STUDY', action: 'Form a circle, holding books posture', image: '/biblestudy11.png' },
]

function CommandCard({ cmd }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="command-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="command-number">{cmd.number}</span>
      <div className="command-info">
        <span className="command-name">{cmd.name}</span>
        <span className="command-action">{cmd.action}</span>
      </div>
      {hovered && (
        <div className="command-preview">
          <img src={cmd.image} alt={cmd.name} />
        </div>
      )}
    </div>
  )
}

export function ClumpsIntro() {
  return (
    <div className="section clumps-section">
      <p className="section-label">Game 2</p>
      <h2 className="section-title">Clumps — Acts Version</h2>
      <img
        src="/clumps.png"
        alt="Clumps game — find the group, do the move"
        className="clumps-img"
      />
    </div>
  )
}

export function ClumpsCommands() {
  return (
    <div className="section clumps-section">
      <h3 className="commands-heading">Commands</h3>
      <p className="commands-hint">Hover over a command to see the action</p>
      <div className="commands-grid">
        {commands.map((cmd) => (
          <CommandCard key={cmd.number} cmd={cmd} />
        ))}
      </div>
    </div>
  )
}
