import './GameBiathlon.css'

export default function GameBiathlon() {
  return (
    <div className="section">
      <p className="section-label">Game 3</p>
      <h2 className="section-title">Biathlon — Church Cleaning Version</h2>
      <div className="card">
        <p>Each team sends out 6 people (4 students + 2 mentors) to compete.</p>
        <p>
          <strong>Relay:</strong> 5 people relay with only the swiffer stick. The last
          person needs to put on the dry swiffer sheet to clean the wax on the track to
          finish the last round of relay.
        </p>
        <p>
          <strong>Game match:</strong> Skiing relay movement + throw the paper ball into a
          box. Hand off the swiffer stick to the next player. First team to cross the
          finishing line wins!
        </p>
      </div>
    </div>
  )
}
