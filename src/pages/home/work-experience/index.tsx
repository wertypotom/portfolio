import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'

interface Experience {
  period: string
  title: string
  company: string
  type: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    period: '2023 - 2025',
    title: 'Full Stack Developer',
    company: 'BRAINEX',
    type: 'Full-time',
    location: 'Remote, Kazakhstan',
    description:
      'Client: M-Files, a Finnish tech company providing innovative information management software that utilizes metadata for efficient data organization and automation',
    achievements: [
      'Developed an internal marketing tool from scratch, using Next.js, Node.js, and TypeScript, achieving a fully functional MVP in 4 months that reduced client processing time by 600%.',
      'Optimized performance-critical modules, using JavaScript, Styled Components, and Web Performance techniques, achieving a 30% reduction in bundle size and page load times.',
      'Migrated a legacy React frontend from JavaScript to TypeScript, using ESLint and React Testing Library, reducing runtime bugs by 35% and improving code maintainability.',
      'Migrated over 100 UI components using Ant Design and Styled Components to align with a new design system, completing the transition in under 4 weeks while preserving UX and accessibility.',
      'Built and maintained 48+ end-to-end tests using Playwright, achieving 80% test coverage and improving release stability across critical user flows.',
      'Implemented dynamic localization using i18next, made the application language-agnostic, and reduced future language integration effort by 90%.',
      'Implemented WCAG-compliant accessibility, enabling full keyboard navigation, screen reader support, and raising Lighthouse score from 65 to 90+.',
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Styled Components',
      'Ant Design',
      'Playwright',
      'Jest',
    ],
  },
  {
    period: '2020 - 2022',
    title: 'Frontend Developer',
    company: 'AVERO',
    type: 'Full-time',
    location: 'Remote, Kazakhstan',
    description: 'B2B SaaS Platform for Legal and Government Clients',
    achievements: [
      'Architected centralized state management using Redux Toolkit and RTK Query, resolving 15+ data storage related bugs and improving app scalability and maintainability.',
      'Migrated 70+ UI components from an outdated Material Design system to modern MUI and Storybook, improving visual consistency, accessibility, and long-term maintainability.',
      'Optimized React app performance by introducing lazy loading and refactoring re-renders, reducing initial page load time by 40% and improving Core Web Vitals.',
      'Architected 5+ automation features in a government system using React and Node.js, cutting processing time for key tasks by 85%.',
      'Refactored security-critical React modules, resolving 5+ vulnerabilities and ensuring zero critical issues in subsequent security reviews.',
      'Mentored junior developers through weekly code reviews, improving adherence to best practices and reducing pull request defects by 25%.',
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Redux.js',
      'MUI',
      'REST APIs',
      'Jest',
      'React Testing Library',
    ],
  },
]

export const WorkExperience: React.FC = () => {
  return (
    <section
      id='work-experience'
      className='py-10 sm:py-16 md:py-20 px-4 bg-white'
    >
      <div className='container mx-auto max-w-6xl py-15'>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='w-8/10 h-1 bg-orange-500 mx-auto mb-10 -mt-16'
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6'
        >
          WORK EXPERIENCE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-4xl mx-auto'
        >
          While my professional journey may appear focused, it reflects years of{' '}
          <span className='font-semibold text-orange-600'>
            continuous exploration
          </span>{' '}
          across technologies, frameworks, and methodologies. I've consistently
          pushed beyond my immediate role to master new tools and approaches,
          building a versatile skill set that delivers exceptional value to
          every project I touch.
        </motion.p>

        <div className='space-y-8 md:space-y-12'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className='relative'
            >
              {/* Timeline connector for desktop */}
              {index !== experiences.length - 1 && (
                <div className='hidden md:block absolute left-[182px] top-20 w-0.5 lg:h-[700px] md:h-[950px] sm:h-[1050px] bg-orange-200' />
              )}

              <div className='grid md:grid-cols-[240px_1fr] gap-6 md:gap-8'>
                {/* Left side - Period */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                  className='flex items-start'
                >
                  <div className='relative'>
                    <div className='hidden md:block absolute -right-[52px] top-2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10' />
                    <p className='text-xl md:text-2xl font-semibold text-gray-400'>
                      {exp.period}
                    </p>
                  </div>
                </motion.div>

                {/* Right side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className='bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow'
                >
                  {/* Header */}
                  <div className='mb-4'>
                    <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
                      {exp.title}
                    </h3>
                    <div className='flex flex-wrap items-center gap-3 text-gray-600 mb-2'>
                      <div className='flex items-center gap-2'>
                        <Briefcase size={18} className='text-orange-500' />
                        <span className='font-semibold'>{exp.company}</span>
                      </div>
                      <span className='text-gray-400'>•</span>
                      <span>{exp.type}</span>
                    </div>
                    <div className='flex items-center gap-2 text-gray-500 text-sm'>
                      <MapPin size={16} className='text-orange-500' />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className='text-gray-600 mb-6 leading-relaxed italic'>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className='mb-6'>
                    <ul className='space-y-3'>
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.3 + idx * 0.05 }}
                          className='flex items-start gap-3 text-gray-700'
                        >
                          <span className='w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0' />
                          <span className='leading-relaxed'>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className='text-sm font-semibold text-gray-500 mb-3'>
                      Technologies Used:
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.2 + 0.4 + idx * 0.03,
                          }}
                          className='px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors'
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
