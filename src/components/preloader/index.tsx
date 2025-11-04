import React from 'react'
import { motion } from 'framer-motion'

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 bg-white flex items-center justify-center z-50'
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full'
      />
    </motion.div>
  )
}

export default Preloader
