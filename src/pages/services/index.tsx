import { motion } from 'framer-motion'
import Section from '../../ui/section'
import Container from '../../ui/container'
import Card from '../../components/card'
import './styles.css'

import serviceBg from '../../assets/images/service-bg.png'

const services = [
  {
    title: 'Web Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bg: 'hsl(177, 39%, 72%)',
  },
  {
    title: 'Development',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bg: 'hsl(41, 99%, 64%)',
  },
  {
    title: 'SEO Marketing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bg: 'hsl(19, 97%, 85%)',
  },
  {
    title: 'Web Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bg: 'hsl(221, 100%, 79%)',
  },
  {
    title: 'Development',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bg: 'hsl(76, 39%, 72%)',
  },
  {
    title: 'SEO Marketing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bg: 'hsl(245, 100%, 90%)',
  },
]

export default function Services() {
  return (
    <motion.main
      className='page-services'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <article>
        <Section className='page-services__section' bgImage={serviceBg}>
          <Container>
            <h2 className='page-services__heading'>My Services</h2>
            <ul className='page-services__grid'>
              {services.map((service) => (
                <li key={service.title}>
                  <Card
                    size='md'
                    bg={service.bg}
                    className='page-services__card'
                  >
                    <h3 className='page-services__card-title'>
                      {service.title}
                    </h3>
                    <p className='page-services__card-text'>{service.text}</p>
                  </Card>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      </article>
    </motion.main>
  )
}
