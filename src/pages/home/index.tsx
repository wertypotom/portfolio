import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Code2,
  Database,
  TestTube,
  Cloud,
  Wrench,
  Palette,
  Brain,
  Cpu,
  X,
  ArrowDown,
} from 'lucide-react'
import { SkillsOrbitContainer } from '../../components/orbites'

const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    color: 'bg-blue-500',
    technologies: ['JavaScript', 'TypeScript', 'SQL', 'NoSQL', 'HTML5', 'CSS3'],
  },
  {
    name: 'Frontend',
    icon: Palette,
    color: 'bg-purple-500',
    technologies: [
      'React',
      'Next.js',
      'Redux',
      'Overmind',
      'MobX',
      'Zustand',
      'Effector',
      'Styled Components',
      'MUI',
      'Ant Design',
      'Tailwind',
      'Sass',
      'TanStack Query',
    ],
  },
  {
    name: 'Backend',
    icon: Cpu,
    color: 'bg-green-500',
    technologies: ['Node.js', 'Express'],
  },
  {
    name: 'Databases',
    icon: Database,
    color: 'bg-orange-500',
    technologies: ['MySQL', 'PostgreSQL'],
  },
  {
    name: 'Testing',
    icon: TestTube,
    color: 'bg-pink-500',
    technologies: ['Jest', 'React Testing Library', 'Cypress', 'Playwright'],
  },
  {
    name: 'DevOps & Cloud',
    icon: Cloud,
    color: 'bg-cyan-500',
    technologies: [
      'Vite',
      'Webpack',
      'Docker',
      'CI/CD',
      'ESLint',
      'AWS (EC2, S3, CloudFront, VPC, Load Balancer, IAM, Monitoring)',
    ],
  },
  {
    name: 'Tools & Design',
    icon: Wrench,
    color: 'bg-yellow-500',
    technologies: ['Git', 'GitHub', 'GitLab', 'Figma'],
  },
  {
    name: 'AI',
    icon: Brain,
    color: 'bg-indigo-500',
    technologies: ['ChatGPT', 'Claude', 'GitHub Copilot'],
  },
]

const testimonials = [
  {
    image: '/assets/images/testi-1.jpg',
    name: 'Jennifer Lutheran',
    title: 'CEO at pxdraft',
    text: "Dolor lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    image: '/assets/images/testi-2.jpg',
    name: 'Michael Roberts',
    title: 'CTO at TechCorp',
    text: "Dolor lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    image: '/assets/images/testi-3.jpg',
    name: 'Sarah Johnson',
    title: 'Designer at Creative Co',
    text: "Dolor lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
]

const Home: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [skillSearch, setSkillSearch] = useState('')

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills-section')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className='hero-section relative pt-32 pb-20 px-4 overflow-hidden bg-orange-50/40'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='absolute top-[-10%] right-[-15%] w-[50%] h-[60%] bg-orange-300/40 -rotate-45 rounded-[20%]'
          style={{
            transformOrigin: 'center',
          }}
        />

        <div className='container mx-auto relative z-10'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className='text-orange-600 font-semibold tracking-wider mb-4 text-lg'
              >
                👋 Hi, I'm Andrey Povstyanko
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight'
              >
                Senior Web Developer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className='text-xl text-gray-700 mb-4 leading-relaxed'
              >
                5+ years building performant, intuitive web applications with{' '}
                <span className='font-semibold text-orange-600'>
                  React, Next.js & TypeScript
                </span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className='text-lg text-gray-600 mb-8'
              >
                📍 Milwaukee, WI • Open to relocation across the US
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className='flex flex-wrap gap-4'
              >
                <Link
                  to='/contact'
                  className='inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all hover:scale-105 shadow-lg'
                >
                  Let's Work Together
                  <ArrowRight className='ml-2' size={20} />
                </Link>
                <a
                  href='/assets/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center bg-white text-gray-800 px-8 py-3 rounded-full border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-all hover:scale-105'
                >
                  View Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative flex justify-center'
            >
              <img
                src='/assets/images/banner-me.png'
                alt='Andrey Povstyanko'
                className='w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl mx-auto drop-shadow-2xl object-contain'
              />
            </motion.div>
          </div>

          {/* My Skills Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className='flex justify-center mt-16'
          >
            <button
              onClick={scrollToSkills}
              className='inline-flex flex-col items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors group'
            >
              <span className='text-lg font-semibold'>My Skills</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ArrowDown
                  size={24}
                  className='group-hover:scale-110 transition-transform'
                />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id='skills-section'
        className='py-10 sm:py-16 md:py-20 px-4 bg-orange-50/40 overflow-hidden'
      >
        <div className='container mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl sm:text-4xl font-bold text-center text-gray-900 -mb-6 -sm:mb-8 -md:mb-10'
          >
            My Skills
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='flex justify-center mt-10'
          >
            <input
              type='text'
              placeholder='Looking for specific skill ?'
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) =>
                (e.target.placeholder = 'Looking for specific skill ?')
              }
              className='w-full max-w-md px-6 py-3 text-center bg-transparent border-2 border-orange-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors'
            />
          </motion.div>

          <div className='relative w-full max-w-6xl mx-auto flex justify-center items-center h-[500px] sm:h-[650px] md:h-[850px] lg:h-[950px]'>
            {/* Center Image - Much Bigger */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            >
              <img
                src='/assets/images/skills-banner.png'
                alt='Andrey Povstyanko'
                className='w-72 h-72 sm:w-96 sm:h-96 md:w-lg md:h-128 lg:w-160 lg:h-160 object-cover'
              />
            </motion.div>

            <SkillsOrbitContainer
              skillCategories={skillCategories}
              onSkillSelect={setSelectedSkill}
            />
          </div>
        </div>
      </section>
      {/* Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className='bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative max-h-[80vh] overflow-y-auto'
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors'
                aria-label='Close modal'
              >
                <X size={24} />
              </button>

              {skillCategories.find((s) => s.name === selectedSkill) && (
                <>
                  <div className='flex items-center gap-4 mb-6'>
                    {React.createElement(
                      skillCategories.find((s) => s.name === selectedSkill)!
                        .icon,
                      {
                        className: `${skillCategories
                          .find((s) => s.name === selectedSkill)!
                          .color.replace('bg-', 'text-')}`,
                        size: 40,
                      }
                    )}
                    <h3 className='text-2xl font-bold text-gray-900'>
                      {selectedSkill}
                    </h3>
                  </div>

                  <ul className='space-y-3'>
                    {skillCategories
                      .find((s) => s.name === selectedSkill)!
                      .technologies.map((tech, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className='text-gray-700 flex items-start gap-3'
                        >
                          <span className='w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0'></span>
                          <span>{tech}</span>
                        </motion.li>
                      ))}
                  </ul>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className='bg-gray-900 py-16 px-4'>
        <div className='container mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col md:flex-row items-center justify-between gap-6'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-white'>
              Interested working with me?
            </h2>
            <Link
              to='/contact'
              className='bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold'
            >
              Contact Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 px-4'>
        <div className='container mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl font-bold text-center text-gray-900 mb-12'
          >
            Testimonial
          </motion.h2>

          <div className='grid md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className='bg-white p-8 rounded-2xl shadow-xl relative'
              >
                <div className='flex items-center mb-4'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-16 h-16 rounded-full object-cover mr-4'
                  />
                  <div>
                    <p className='font-semibold text-gray-900'>
                      {testimonial.name}
                    </p>
                    <p className='text-sm text-gray-500'>{testimonial.title}</p>
                  </div>
                </div>
                <p className='text-gray-600 italic'>{testimonial.text}</p>
                <div className='absolute bottom-4 right-4 text-6xl text-orange-200 opacity-50'>
                  "
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Home
