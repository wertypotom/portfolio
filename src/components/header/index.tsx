import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Container from '../../ui/container'
import './styles.css'

export const Header = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className='app-header'>
      <Container className='app-header__container'>
        <Link to='/' className='app-header__logo' onClick={closeMenu}>
          <img src='/src/assets/images/logo.svg' alt='Annie home' height={28} />
        </Link>

        <nav className={`app-header__nav${open ? ' is-open' : ''}`}>
          <NavLink
            to='/'
            end
            className={({ isActive }) =>
              `app-header__link${isActive ? ' is-active' : ''}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to='/services'
            className={({ isActive }) =>
              `app-header__link${isActive ? ' is-active' : ''}`
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            to='/portfolio'
            className={({ isActive }) =>
              `app-header__link${isActive ? ' is-active' : ''}`
            }
            onClick={closeMenu}
          >
            Portfolio
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              `app-header__link${isActive ? ' is-active' : ''}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>

        <Link to='/contact' className='app-header__cta'>
          Contact Now
        </Link>

        <motion.button
          className='app-header__toggle'
          aria-label='Toggle navigation'
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen((prev) => !prev)}
        >
          <FiMenu size={22} />
        </motion.button>
      </Container>
    </header>
  )
}
