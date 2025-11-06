import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
import Preloader from './components/preloader'
import { MusicPlayer } from './components/music-player'

const App: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode='wait'>
      {loading ? (
        <Preloader key='preloader' />
      ) : (
        <motion.div
          key='app'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='min-h-screen bg-white'
        >
          <Header />
          <MusicPlayer />
          <AnimatedRoutes />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const AnimatedRoutes: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        {/* <Route path='/portfolio' element={<Portfolio />} /> */}
      </Routes>
    </AnimatePresence>
  )
}

export default App
