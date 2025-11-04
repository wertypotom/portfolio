import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Services from './pages/services'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import { AnimatePresence } from 'framer-motion'

export const AppRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </AnimatePresence>
  )
}
