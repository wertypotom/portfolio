import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './styles.css'
import { motion } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'ghost'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
  className?: string
}

export default function Button({
  variant = 'primary',
  className,
  children,
  ...rest
}: Props) {
  const combined = ['ui-btn', `ui-btn--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <motion.button
      className={combined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18 }}
      {...rest}
    >
      {children}
    </motion.button>
  )
}
