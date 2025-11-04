import React from 'react'
import { motion } from 'framer-motion'
import {
  Smartphone,
  Laptop,
  TrendingUp,
  Shapes,
  Code,
  Globe,
} from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Web Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: 'bg-teal-300',
    },
    {
      icon: Laptop,
      title: 'Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: 'bg-yellow-300',
    },
    {
      icon: TrendingUp,
      title: 'SEO Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: 'bg-orange-200',
    },
    {
      icon: Shapes,
      title: 'Web Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: 'bg-blue-300',
    },
    {
      icon: Code,
      title: 'Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: 'bg-green-300',
    },
    {
      icon: Globe,
      title: 'SEO Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: 'bg-purple-200',
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
      <section className='py-20 px-4 min-h-screen bg-gradient-to-br from-orange-50 to-white'>
        <div className='container mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-5xl font-bold text-center text-gray-900 mb-16'
          >
            My Services
          </motion.h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className={`${service.color} p-8 rounded-2xl shadow-xl`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className='mb-6'
                >
                  <service.icon size={48} className='text-gray-800' />
                </motion.div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  {service.title}
                </h3>
                <p className='text-gray-700'>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Services
