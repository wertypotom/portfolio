import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Portfolio: React.FC = () => {
  const projects = [
    {
      image: '/assets/images/portfolio-1.jpg',
      category: 'Web Design',
      title: 'Website Design for Marketing Agency Startup',
      description:
        'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores',
    },
    {
      image: '/assets/images/portfolio-2.jpg',
      category: 'Web Design',
      title: 'Website Design for Marketing Agency Startup',
      description:
        'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores',
    },
    {
      image: '/assets/images/portfolio-3.jpg',
      category: 'Web Design',
      title: 'Website Design for Marketing Agency Startup',
      description:
        'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores',
    },
    {
      image: '/assets/images/portfolio-4.jpg',
      category: 'Web Design',
      title: 'Website Design for Marketing Agency Startup',
      description:
        'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores',
    },
  ]

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='pt-24'
    >
      <section className='py-20 px-4'>
        <div className='container mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-5xl font-bold text-center text-gray-900 mb-16'
          >
            Latest Projects
          </motion.h2>

          <div className='grid md:grid-cols-2 gap-12'>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className='bg-white rounded-2xl shadow-xl overflow-hidden group'
              >
                <div className='relative overflow-hidden'>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={project.title}
                    className='w-full h-64 object-cover'
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className='bg-white text-gray-900 p-4 rounded-full'
                    >
                      <ArrowRight size={24} />
                    </motion.button>
                  </motion.div>
                </div>

                <div className='p-8'>
                  <span className='inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4'>
                    {project.category}
                  </span>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 mb-6'>{project.description}</p>
                  <button className='bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors'>
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Portfolio
