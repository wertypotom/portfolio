import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, MessageCircleMore } from 'lucide-react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const navItems = [
  { name: 'Home', path: '#hero' },
  { name: 'Skills', path: '#skills' },
  { name: 'Work experience', path: '#work-experience' },
  { name: 'Recommendations', path: '#recommendations' },
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.path.substring(1))
      const scrollPosition = window.scrollY + 100 // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <AnchorLink
          href='#hero'
          className='text-2xl font-semibold text-gray-800 -ml-6'
        >
          <img src='/assets/images/logo-me.png' alt='Andrey' className='h-9' />
        </AnchorLink>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-8'>
          {navItems.map((item) => (
            <AnchorLink
              key={item.path}
              href={item.path}
              className={`relative text-lg font-medium transition-colors duration-200 ${
                activeSection === item.path
                  ? 'text-orange-500'
                  : 'text-gray-700 hover:text-orange-400'
              }`}
            >
              {item.name}
              {activeSection === item.path && (
                <motion.div
                  layoutId='activeNav'
                  className='absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500'
                  transition={{
                    type: 'spring',
                    damping: 30,
                  }}
                />
              )}
            </AnchorLink>
          ))}
        </nav>

        <Link
          to={`mailto:andrey.povstyanko.00@gmail.com?subject=🤘 Hi Andrey, I'd like to hire you`}
          className='hidden md:flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-200 hover:scale-105'
          target='_blank'
        >
          <MessageCircleMore size={20} className='text-white' />
          Hire me
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='md:hidden text-gray-800 hover:text-orange-500 transition-colors'
          aria-label='Toggle menu'
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
            transition={{ duration: 0.3 }}
            className='md:hidden bg-white border-t shadow-lg'
          >
            <nav className='container mx-auto px-4 py-4 flex flex-col space-y-4'>
              {navItems.map((item) => (
                <AnchorLink
                  key={item.path}
                  href={item.path}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    activeSection === item.path
                      ? 'text-orange-500'
                      : 'text-gray-700 hover:text-orange-400'
                  }`}
                >
                  {item.name}
                </AnchorLink>
              ))}
              <Link
                to={`mailto:andrey.povstyanko.00@gmail.com?subject=🤘 Hi Andrey, I'd like to hire you`}
                className='flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors'
                target='_blank'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircleMore size={20} className='text-white' />
                Hire me
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
