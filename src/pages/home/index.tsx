import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Home: React.FC = () => {
  const skills = [
    { name: 'HTML', color: 'bg-teal-300', icon: '🌐' },
    { name: 'CSS', color: 'bg-yellow-300', icon: '🎨' },
    { name: 'React JS', color: 'bg-orange-200', icon: '⚛️' },
    { name: 'Angular', color: 'bg-blue-300', icon: '🅰️' },
    { name: 'iOS App', color: 'bg-green-300', icon: '🍎' },
    { name: 'App Dev', color: 'bg-purple-200', icon: '📱' },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-20 px-4 bg-gray-50'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <h2 className='text-4xl font-bold text-gray-900 mb-8'>
                My Skills
              </h2>
              <div className='grid grid-cols-2 gap-4'>
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className={`${skill.color} p-6 rounded-2xl shadow-lg`}
                  >
                    <div className='text-4xl mb-3'>{skill.icon}</div>
                    <h3 className='text-xl font-semibold text-gray-800'>
                      {skill.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src='/assets/images/skill-banner.png'
                alt='Skills'
                className='w-full'
              />
            </motion.div>
          </div>
        </div>
      </section>

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
