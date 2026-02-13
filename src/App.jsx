import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import { FourCornersQuestion, FourCornersQuestion2, FourCornersTimer } from './components/GameFourCorners'
import { ClumpsIntro, ClumpsCommands } from './components/GamePirate'
import { BiathlonIntro, BiathlonClean, BiathlonActsVersion, BiathlonRules } from './components/GameBiathlon'
import WinterOlympics from './components/WinterOlympics'
import WinnerAnnouncement from './components/WinnerAnnouncement'
import Thanks from './components/Thanks'
import CelebrationModal from './components/CelebrationModal'
import NavDots from './components/NavDots'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('game1-q')
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
    const sections = document.querySelectorAll('section[id]')
    const handleScroll = () => {
      const scrollY = window.scrollY
      let current = 'game1-q'
      sections.forEach((sec) => {
        const top = sec.offsetTop
        if (scrollY >= top - 150) current = sec.id
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

        {/* Game 1: 4 Corners */}
        <section id="game1-q">
          <FourCornersQuestion />
        </section>
        <section id="game1-q2">
          <FourCornersQuestion2 />
        </section>
        <section id="game1-timer">
          <FourCornersTimer />
        </section>

        {/* Game 2: Clumps */}
        <section id="game2-intro">
          <ClumpsIntro />
        </section>
        <section id="game2-commands">
          <ClumpsCommands />
        </section>

        {/* Winter Olympics Transition */}
        <section id="olympics">
          <WinterOlympics />
        </section>

        {/* Game 3: Biathlon */}
        <section id="game3-intro">
          <BiathlonIntro />
        </section>
        <section id="game3-clean">
          <BiathlonClean />
        </section>
        <section id="game3-acts">
          <BiathlonActsVersion />
        </section>
        <section id="game3-rules">
          <BiathlonRules />
        </section>

        {/* Winner */}
        <section id="winners">
          <WinnerAnnouncement onAnnounce={handleAnnounceWinner} />
        </section>

        {/* End */}
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
