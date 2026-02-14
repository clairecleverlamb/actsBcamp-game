import './SharePrompts.css'

const questions = [
  { num: 1, text: 'If you could spend a day in someone else\'s life, whose life would you choose? Why?', color: '#6366f1' },
  { num: 2, text: 'If you were setting off to Mars with one item, what would it be?', color: '#f97316' },
  { num: 3, text: 'If aliens came to Earth, what ONE food would you give them to impress them haha?', color: '#10b981' },
]

export default function SharePrompts() {
  return (
    <div className="section share-section">
      <h2 className="share-heading">Share with Your Group!</h2>
      <div className="share-top-badge">Name / Campus / Major</div>
      <div className="share-questions">
        {questions.map((q) => (
          <div className="share-q-card" key={q.num} style={{ '--q-color': q.color }}>
            <span className="share-q-num">{q.num}</span>
            <p className="share-q-text">{q.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
