import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const CTA = () => {
  return (
    <section className='bg-orange-50 py-16 px-4 border-t-2 border-orange-200'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col md:flex-row items-center justify-between gap-6'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Interested in working with me?
          </h2>
          <Link
            to='/contact'
            className='bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 hover:scale-105 transition-all font-semibold shadow-lg'
          >
            Contact Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
