import { motion } from 'framer-motion'
import Section from '../../ui/section'
import Container from '../../ui/container'
import Button from '../../ui/button'
import Slider from '../../components/slider'
import Card from '../../components/card'
import CTA from '../../components/cta'
import './styles.css'

import heroImg from '../../assets/images/hero-banner.png'
import aboutImg from '../../assets/images/about-banner.png'
import skillImg from '../../assets/images/skill-banner.png'

export default function Home() {
  return (
    <motion.main
      className='page-home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <article>
        <Section className='page-home__hero'>
          <Container className='page-home__hero-container'>
            <div className='page-home__hero-content'>
              <p className='page-home__hero-subtitle'>👋, My name is Annie</p>
              <h1 className='page-home__hero-headline'>I'm a Developer</h1>
              <p className='page-home__hero-text'>
                Based in Los Angeles, California.
              </p>
              <Button>Let's Start</Button>
            </div>

            <figure className='page-home__hero-banner'>
              <img src={heroImg} alt='Annie hero' />
            </figure>
          </Container>
        </Section>

        <Section className='page-home__clients'>
          <Container>
            <Slider>
              {[1, 2, 3, 4, 5].map((n) => (
                <li key={n} className='page-home__client-item'>
                  <img
                    src={`/src/assets/images/client-${n}.svg`}
                    alt='client'
                  />
                </li>
              ))}
            </Slider>
          </Container>
        </Section>

        <Section className='page-home__about'>
          <Container className='page-home__about-container'>
            <figure className='page-home__about-banner'>
              <img src={aboutImg} alt='Annie about' />
            </figure>

            <div className='page-home__about-content'>
              <h2 className='page-home__title-lg'>
                I'm a Freelancer Front-end Developer with over 3 years of
                experience.
              </h2>
              <p className='page-home__section-text'>
                I'm a Freelancer Front-end Developer with over 3 years of
                experience. I'm from San Francisco. I code and create web
                elements for amazing people around the world. I like work with
                new people. New people new experiences.
              </p>
              <ul className='page-home__about-stats'>
                <li>
                  <p className='page-home__stat-text'>
                    <strong className='page-home__stat-number'>285+</strong>{' '}
                    Project Completed
                  </p>
                </li>
                <li>
                  <p className='page-home__stat-text'>
                    <strong className='page-home__stat-number'>190+</strong>{' '}
                    Happy Clients
                  </p>
                </li>
              </ul>
              <div className='page-home__about-actions'>
                <a href='/contact' className='page-home__primary-link'>
                  Contact Me
                </a>
                <a href='/portfolio' className='page-home__secondary-link'>
                  Portfolio
                </a>
              </div>
            </div>
          </Container>
        </Section>

        <Section className='page-home__skills'>
          <Container className='page-home__skills-container'>
            <div className='page-home__skills-content'>
              <h2 className='page-home__section-title'>My Skills</h2>
              <ul className='page-home__skills-list'>
                {[
                  { title: 'HTML', bg: 'hsl(177, 39%, 72%)' },
                  { title: 'CSS', bg: 'hsl(41, 99%, 64%)' },
                  { title: 'React JS', bg: 'hsl(19, 97%, 85%)' },
                  { title: 'Angular', bg: 'hsl(221, 100%, 79%)' },
                  { title: 'iOS App', bg: 'hsl(76, 39%, 72%)' },
                  { title: 'App Dev', bg: 'hsl(245, 100%, 90%)' },
                ].map((item) => (
                  <li key={item.title}>
                    <Card size='sm' bg={item.bg}>
                      <h3 className='page-home__skill-title'>{item.title}</h3>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>

            <figure className='page-home__skills-banner'>
              <img src={skillImg} alt='Annie skills' />
            </figure>
          </Container>
        </Section>

        <CTA />

        <Section className='page-home__testimonials'>
          <Container>
            <h2 className='page-home__section-title page-home__section-title--center'>
              Testimonial
            </h2>
            <ul className='page-home__testi-grid'>
              {[1, 2, 3, 4].map((n) => (
                <li key={n}>
                  <Card size='lg' className='page-home__testi-card'>
                    <figure className='page-home__testi-avatar'>
                      <img
                        src={`/src/assets/images/testi-${n}.jpg`}
                        alt='Client'
                      />
                    </figure>
                    <blockquote className='page-home__testi-quote'>
                      Dolor lorem is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </blockquote>
                    <p className='page-home__client-name'>Jennifer Lutheran</p>
                    <p className='page-home__client-title'>CEO at pxdraft</p>
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
