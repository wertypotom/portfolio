import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, MessageCircleMore } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link to='/' className='text-2xl font-semibold text-gray-800 -ml-6'>
          <img src='/assets/images/logo-me.png' alt='Andrey' className='h-9' />
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-8'>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-lg font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-orange-500'
                  : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId='activeNav'
                  className='absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500'
                />
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="mailto:andrey.povstyanko.00@gmail.com?subject=🤘 Hi Andrey, I'd like to hire you"
          className='hidden md:flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors'
          target='_blank'
        >
          <MessageCircleMore size={20} className='text-white' />
          Hire me
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='md:hidden text-gray-800'
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-white border-t'
          >
            <nav className='container mx-auto px-4 py-4 flex flex-col space-y-4'>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === item.path
                      ? 'text-orange-500'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
