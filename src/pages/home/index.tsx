import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Home: React.FC = () => {
  const clients = [
    '/assets/images/client-1.svg',
    '/assets/images/client-2.svg',
    '/assets/images/client-3.svg',
    '/assets/images/client-4.svg',
    '/assets/images/client-5.svg',
  ]

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
      <section className='relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-orange-50 to-white'>
        <div className='absolute top-0 left-10 w-96 h-96 bg-orange-200 rounded-full opacity-30 blur-3xl -rotate-45' />

        <div className='container mx-auto'>
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
                className='text-gray-700 font-semibold tracking-wider mb-4'
              >
                👋, My name is Annie
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'
              >
                I'm a Developer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className='text-xl text-gray-600 mb-8'
              >
                Based in Los Angeles, California.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to='/contact'
                  className='inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all hover:scale-105'
                >
                  Let's Start
                  <ArrowRight className='ml-2' size={20} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'
            >
              <img
                src='/assets/images/hero-banner.png'
                alt='Annie'
                className='w-full max-w-lg mx-auto drop-shadow-2xl'
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className='bg-gray-900 py-8'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='flex overflow-x-auto space-x-12 justify-center items-center'
          >
            {clients.map((client, index) => (
              <motion.img
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                src={client}
                alt='Client'
                className='h-10 opacity-70 hover:opacity-100 transition-opacity'
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-20 px-4'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src='/assets/images/about-banner.png'
                alt='About Annie'
                className='w-full rounded-lg'
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                I'm a Freelancer Front-end Developer with over 3 years of
                experience.
              </h2>
              <p className='text-gray-600 mb-6'>
                I'm a Freelancer Front-end Developer with over 3 years of
                experience. I'm from San Francisco. I code and create web
                elements for amazing people around the world. I like work with
                new people. New people new Experiences.
              </p>

              <div className='flex space-x-8 mb-8'>
                <div>
                  <p className='text-3xl font-bold text-orange-500'>285+</p>
                  <p className='text-gray-600'>Project Completed</p>
                </div>
                <div>
                  <p className='text-3xl font-bold text-orange-500'>190+</p>
                  <p className='text-gray-600'>Happy Clients</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-4'>
                <Link
                  to='/contact'
                  className='bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors'
                >
                  Contact Me
                </Link>
                <Link
                  to='/portfolio'
                  className='bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition-colors'
                >
                  Portfolio
                </Link>
              </div>
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
