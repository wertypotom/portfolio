import Container from '../../ui/container'
import './styles.css'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='app-footer'>
      <Container className='app-footer__container'>
        <ul className='app-footer__social'>
          <li>
            <a href='#'>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaPinterest />
            </a>
          </li>
        </ul>
        <p className='app-footer__copy'>© 2022 copyright all right reserved</p>
      </Container>
    </footer>
  )
}
