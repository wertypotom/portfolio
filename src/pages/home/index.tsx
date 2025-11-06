import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Database,
  TestTube,
  Cloud,
  Wrench,
  Palette,
  Brain,
  Cpu,
  X,
  Search,
} from 'lucide-react'
import { SkillsOrbitContainer } from '../../components/orbites'
import { useSkillAnalysis } from '../../hooks/useSkillAnalysis'
import { SkillSearchModal } from '../../components/skill-search-modal'
import { HeroSection } from './hero'
import { CTA } from './cta'
import { Recommendations } from './recommendations'

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

const Home: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [skillSearch, setSkillSearch] = useState('')
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  const { analyzeSkill, isLoading, result, error, cancelRequest } =
    useSkillAnalysis()

  const handleSearch = async () => {
    if (!skillSearch.trim()) return
    setIsSearchModalOpen(true)
    await analyzeSkill(skillSearch)
  }

  const handleCloseModal = () => {
    cancelRequest()
    setIsSearchModalOpen(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      {/* Skills Section */}
      <section
        id='skills-section'
        className='py-10 sm:py-16 md:py-20 px-4 bg-orange-50/40 overflow-hidden'
      >
        <div className='container mx-auto'>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='w-8/10 h-1 bg-orange-500 mx-auto mb-8'
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl mb-5 sm:text-4xl font-bold text-center text-gray-900 -sm:mb-8 -md:mb-10'
          >
            My Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-gray-700 mb-4 leading-relaxed text-center max-w-4xl mx-auto'
          >
            My frontend expertise is complemented by a genuine curiosity for the
            complete web ecosystem. I love understanding how{' '}
            <span className='font-semibold text-orange-600'>
              backend APIs, databases,{' '}
            </span>{' '}
            and <span className='font-semibold text-orange-600'>DevOps</span>{' '}
            practices come together—because building great interfaces means
            knowing what powers them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='flex justify-center mt-10'
          >
            <div className='relative w-full max-w-md'>
              <input
                type='text'
                placeholder='Looking for specific skill I used ?'
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                onKeyPress={handleKeyPress}
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) =>
                  (e.target.placeholder = 'Looking for specific skill I used ?')
                }
                className='w-full px-6 py-3 pr-12 text-center bg-transparent border-2 border-orange-500 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors'
              />
              <button
                onClick={handleSearch}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600 transition-colors'
                aria-label='Search skill'
              >
                <Search size={20} />
              </button>
            </div>
          </motion.div>

          <div className='relative w-full max-w-6xl mx-auto flex justify-center items-center h-[500px] sm:h-[650px] md:h-[850px] lg:h-[950px]'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-54 sm:h-54 md:w-70 md:h-70 lg:w-100 lg:h-100 bg-orange-300/40 rounded-full'
            />

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

      <AnimatePresence>
        {isSearchModalOpen && (
          <SkillSearchModal
            isOpen={isSearchModalOpen}
            onClose={handleCloseModal}
            searchQuery={skillSearch}
            isLoading={isLoading}
            result={result}
            error={error}
          />
        )}
      </AnimatePresence>
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
      <CTA />
      {/* Testimonials Section */}
      <Recommendations />
    </motion.main>
  )
}

export default Home
