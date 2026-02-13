import './SharePrompts.css'

export default function SharePrompts() {
  return (
    <div className="section share-section">
      <h2 className="share-heading">Share with Your Group!</h2>
      <div className="share-card">
        <p className="share-basics-line">Name / Campus / Major</p>
        <div className="share-divider" />
        <div className="share-questions">
          <p className="share-line">❄️ Winter people — are you calm and cozy? Why?</p>
          <p className="share-line">☀️ Summer people — are you adventurous? Why?</p>
          <p className="share-line">🚶 Outdoor people — are you energetic? Why?</p>
          <p className="share-line">🏠 Indoor people — are you reflective? Why?</p>
        </div>
      </div>
    </div>
  )
}
