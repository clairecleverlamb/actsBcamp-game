import './GamePirate.css'

const commands = [
  { number: 3, name: 'HOUSE CHURCH', action: 'Hands up making a house' },
  { number: 4, name: 'PRAYER HUDDLE', action: 'Closing eyes' },
  { number: 5, name: 'DINING TABLE', action: 'Eating' },
  { number: 6, name: 'MISSION TEAM', action: 'Walking in a circle' },
]

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
      <div className="commands-grid">
        {commands.map((cmd) => (
          <div key={cmd.number} className="command-card">
            <span className="command-number">{cmd.number}</span>
            <div className="command-info">
              <span className="command-name">{cmd.name}</span>
              <span className="command-action">{cmd.action}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
