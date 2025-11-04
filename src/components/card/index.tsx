import { type ReactNode } from 'react'
import './styles.css'
import { motion } from 'framer-motion'

type Props = {
  size?: 'sm' | 'md' | 'lg'
  bg?: string
  children: ReactNode
  className?: string
}

export default function Card({ size = 'md', bg, className, children }: Props) {
  const combined = ['app-card', `app-card--${size}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <motion.div
      className={combined}
      style={bg ? { backgroundColor: bg } : undefined}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
