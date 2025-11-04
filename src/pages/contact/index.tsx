import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+01 123 654 8096',
      href: 'tel:+011236548096',
      color: 'bg-teal-300',
    },
    {
      icon: Mail,
      title: 'Mail',
      value: 'info@domainname.com',
      href: 'mailto:info@domainname.com',
      color: 'bg-yellow-300',
    },
    {
      icon: MapPin,
      title: 'Visit My Studio',
      value: 'Warnwe Park Streetperrine, FL 33157 New York City',
      href: '#',
      color: 'bg-orange-200',
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
          <div className='grid md:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Get in touch
              </h2>
              <p className='text-gray-600 mb-8'>
                Our friendly team would love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-gray-700 font-medium mb-2'>
                      First name
                    </label>
                    <input
                      type='text'
                      placeholder='Name *'
                      required
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all'
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className='block text-gray-700 font-medium mb-2'>
                      Your Email
                    </label>
                    <input
                      type='email'
                      placeholder='Email *'
                      required
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all'
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-gray-700 font-medium mb-2'>
                    Subject
                  </label>
                  <input
                    type='text'
                    placeholder='Subject *'
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all'
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className='block text-gray-700 font-medium mb-2'>
                    Your message
                  </label>
                  <textarea
                    placeholder='Your message *'
                    required
                    rows={6}
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none'
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type='submit'
                  className='bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold'
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='space-y-6'
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className='flex items-start space-x-4'
                >
                  <div
                    className={`${info.color} p-4 rounded-2xl flex-shrink-0`}
                  >
                    <info.icon size={32} className='text-gray-800' />
                  </div>
                  <div>
                    <p className='text-lg font-semibold text-gray-900 mb-1'>
                      {info.title}
                    </p>
                    <a
                      href={info.href}
                      className='text-gray-600 hover:text-orange-500 transition-colors'
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Contact
