import { useState } from 'react'
import './WinnerAnnouncement.css'

export default function WinnerAnnouncement({ onAnnounce }) {
  const [input, setInput] = useState('')

  const handleClick = () => {
    onAnnounce(input.trim())
  }

  return (
    <div className="section winner-section">
      <p className="section-label">Celebration</p>
      <h2 className="section-title winner-title">Announce Winners</h2>
      <div className="winner-input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter winning team name (e.g. Team Red, Corner 1)"
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        />
        <button className="btn btn-announce" onClick={handleClick}>
          🎉 Announce Winner!
        </button>
      </div>
    </div>
  )
}
