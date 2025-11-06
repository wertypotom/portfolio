import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const HeroSection = () => {
  return (
    <section className='hero-section relative pt-32 pb-10 px-4 overflow-hidden bg-orange-50/40'>
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
                to="mailto:andrey.povstyanko.00@gmail.com?subject=🤘 Hi Andrey, I'd like to hire you"
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
      </div>
    </section>
  )
}
