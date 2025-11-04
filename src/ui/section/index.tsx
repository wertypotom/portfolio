import { type ReactNode } from 'react'
import './styles.css'
import { motion } from 'framer-motion'

type Props = {
  id?: string
  className?: string
  bgImage?: string
  children: ReactNode
}

export default function Section({ id, className, bgImage, children }: Props) {
  const combinedClass = ['ui-section', className].filter(Boolean).join(' ')

  return (
    <section
      id={id}
      className={combinedClass}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      <motion.div
        className='ui-section__inner'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
