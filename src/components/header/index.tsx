import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, MessageCircleMore } from 'lucide-react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MagneticButton } from '../smoothui/magnetic-button';

const navItems = [
  { name: 'Home', path: '#hero' },
  { name: 'Projects', path: '#projects' },
  { name: 'Skills', path: '#skills' },
  { name: 'Work experience', path: '#work-experience' },
  { name: 'Recommendations', path: '#recommendations' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.path.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, width: '100%', borderRadius: '0px', top: 0 }}
      animate={{
        y: 0,
        marginTop: isScrolled ? 16 : 0,
        width: isScrolled ? '95%' : '100%',
        borderRadius:
          isScrolled && !(isMobile && isMobileMenuOpen) ? '9999px' : '0px',
        top: isScrolled ? 16 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        width: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        borderRadius: { duration: isMobile ? 0 : 0.5, ease: [0.4, 0, 0.2, 1] },
        top: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 ${
        isScrolled
          ? `max-w-6xl ${isMobile && isMobileMenuOpen ? 'bg-white' : 'bg-white/60'} backdrop-blur-lg shadow-xl border border-gray-200/50`
          : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}
      style={{
        transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
      }}
    >
      <div
        className={`mx-auto px-4 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
      >
        <AnchorLink
          href='#hero'
          className='text-2xl font-semibold text-gray-800'
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

        <MagneticButton
          asChild
          strength={0.3}
          radius={150}
          className='hidden md:flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-200 hover:scale-105'
        >
          <Link
            to={`mailto:andrey.povstyanko.00@gmail.com?subject=🤘 Hi Andrey, I'd like to hire you`}
            target='_blank'
          >
            <MessageCircleMore size={20} className='text-white' />
            Hire me
          </Link>
        </MagneticButton>

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
            className='md:hidden bg-white border-t border-t-gray-200/50'
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
  );
};

export default Header;
