import './GameBiathlon.css'

export function BiathlonIntro() {
  return (
    <div className="section biathlon-section">
      <p className="section-label">Game 3</p>
      <h2 className="section-title">Biathlon — Church Cleaning Version</h2>
      <div className="biathlon-step">
        <div className="step-badge">What is Biathlon?</div>
        <img
          src="/biathlon.png"
          alt="Biathlon challenge — skiing and target shooting"
          className="biathlon-img"
        />
      </div>
    </div>
  )
}

export function BiathlonActsVersion() {
  return (
    <div className="section biathlon-section">
      <div className="biathlon-step">
        <div className="step-badge">Our Acts Version</div>
        <img
          src="/churchversion.png"
          alt="Church cleaning version — swiffer skiing and paper ball toss"
          className="biathlon-img"
        />
      </div>
    </div>
  )
}

export function BiathlonRules() {
  return (
    <div className="section biathlon-section">
      <h3 className="rules-heading">Rules</h3>
      <div className="biathlon-rules">
        <div className="rule-item">
          <span className="rule-number">1</span>
          <p>Each team sends out <strong>6 people</strong> (4 students + 2 mentors)</p>
        </div>
        <div className="rule-item">
          <span className="rule-number">2</span>
          <p><strong>5 people relay</strong> with only the swiffer stick. Hand off to the next player.</p>
        </div>
        <div className="rule-item">
          <span className="rule-number">3</span>
          <p>Last person puts on the <strong>dry swiffer sheet</strong> to clean the wax on the track.</p>
        </div>
        <div className="rule-item">
          <span className="rule-number">4</span>
          <p><strong>Skiing relay</strong> + throw the paper ball into the box. First team to cross the finish line wins!</p>
        </div>
      </div>
    </div>
  )
}
