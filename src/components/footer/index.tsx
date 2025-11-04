import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ]

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-4'>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex justify-center space-x-6 mb-6'
        >
          {socialLinks.map((social, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={social.href}
                className='w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors'
              >
                <social.icon size={20} />
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <p className='text-center text-gray-400'>
          &copy; 2024 copyright all right reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
