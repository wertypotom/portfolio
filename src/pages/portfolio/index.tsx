import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Section from '../../ui/section'
import Container from '../../ui/container'
import Card from '../../components/card'
import './styles.css'

import portfolio1 from '../../assets/images/portfolio-1.jpg'
import portfolio2 from '../../assets/images/portfolio-2.jpg'
import portfolio3 from '../../assets/images/portfolio-3.jpg'
import portfolio4 from '../../assets/images/portfolio-4.jpg'

const projects = [
  {
    title: 'Website Design for Marketing Agency Startup',
    category: 'Web Design',
    description:
      'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.',
    image: portfolio1,
  },
  {
    title: 'Creative Landing Page Exploration',
    category: 'Web Design',
    description:
      'A bold visual language and fluid layout crafted to help a SaaS startup raise their next round with confidence.',
    image: portfolio2,
  },
  {
    title: 'Ecommerce Experience Redesign',
    category: 'Product Design',
    description:
      'Design system, UX strategy, and high-converting UI for a DTC brand expanding into new markets across the globe.',
    image: portfolio3,
  },
  {
    title: 'Fintech Dashboard Concept',
    category: 'UI/UX',
    description:
      'Interactive dashboard with real-time analytics and collaboration features tailored for fast-scaling fintech teams.',
    image: portfolio4,
  },
]

export default function Portfolio() {
  return (
    <motion.main
      className='page-portfolio'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <article>
        <Section className='page-portfolio__section'>
          <Container>
            <h2 className='page-portfolio__heading'>Latest Projects</h2>
            <ul className='page-portfolio__grid'>
              {projects.map((project) => (
                <motion.li
                  key={project.title}
                  className='page-portfolio__item'
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4 }}
                >
                  <Card size='lg' className='page-portfolio__card'>
                    <figure className='page-portfolio__banner'>
                      <img src={project.image} alt={project.title} />
                      <a className='page-portfolio__icon-btn' href='#'>
                        <FiArrowUpRight />
                      </a>
                    </figure>
                    <div className='page-portfolio__content'>
                      <span className='page-portfolio__chip'>
                        {project.category}
                      </span>
                      <h3 className='page-portfolio__title'>{project.title}</h3>
                      <p className='page-portfolio__text'>
                        {project.description}
                      </p>
                      <a className='page-portfolio__link' href='#'>
                        View Project
                      </a>
                    </div>
                  </Card>
                </motion.li>
              ))}
            </ul>
          </Container>
        </Section>
      </article>
    </motion.main>
  )
}
