import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface PdfModalProps {
  isOpen: boolean
  children: React.ReactNode
}

export const Modal: React.FC<PdfModalProps> = ({ isOpen, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return <AnimatePresence>{children}</AnimatePresence>
}
