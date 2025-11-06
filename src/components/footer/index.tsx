import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github } from 'lucide-react'

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, href: '#' },
    { icon: Github, href: '#' },
  ]

  return (
    <footer className='bg-orange-50 text-gray-800 py-12 border-t-2 border-orange-200'>
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
                className='w-12 h-12 bg-white border-2 border-orange-200 rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:shadow-lg transition-all'
              >
                <social.icon size={20} />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </footer>
  )
}

export default Footer
