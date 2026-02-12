import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import GameFourCorners from './components/GameFourCorners'
import GamePirate from './components/GamePirate'
import GameBiathlon from './components/GameBiathlon'
import BiathlonCountdown from './components/BiathlonCountdown'
import WinnerAnnouncement from './components/WinnerAnnouncement'
import Thanks from './components/Thanks'
import CelebrationModal from './components/CelebrationModal'
import NavDots from './components/NavDots'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('game1')
  const [showCelebration, setShowCelebration] = useState(false)
  const [winnerName, setWinnerName] = useState('')

  const handleAnnounceWinner = (name) => {
    setWinnerName(name || 'Winners')
    setShowCelebration(true)
  }

  const handleCloseCelebration = () => {
    setShowCelebration(false)
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], .hero')
    const handleScroll = () => {
      const scrollY = window.scrollY
      let current = 'game1'
      sections.forEach((sec) => {
        const top = sec.offsetTop
        if (scrollY >= top - 150) current = sec.id || 'game1'
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="app">
        <Hero />
        <section id="game1">
          <GameFourCorners />
        </section>
        <section id="game2">
          <GamePirate />
        </section>
        <section id="game3">
          <GameBiathlon />
        </section>
        <section id="biathlon">
          <BiathlonCountdown />
        </section>
        <section id="winners">
          <WinnerAnnouncement onAnnounce={handleAnnounceWinner} />
        </section>
        <section id="thanks">
          <Thanks />
        </section>
      </div>

      <NavDots activeSection={activeSection} />

      <CelebrationModal
        isOpen={showCelebration}
        teamName={winnerName}
        onClose={handleCloseCelebration}
      />
    </>
  )
}

export default App
