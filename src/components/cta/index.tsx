import Container from '../../ui/container'
import { Link } from 'react-router-dom'
import './styles.css'

export default function CTA() {
  return (
    <section className='app-cta'>
      <Container className='app-cta__container'>
        <h2 className='app-cta__title'>Interested working with me?</h2>
        <Link to='/contact' className='app-cta__button'>
          Contact Now
        </Link>
      </Container>
    </section>
  )
}
