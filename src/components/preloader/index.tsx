import { motion, AnimatePresence } from 'framer-motion'
import './styles.css'

type Props = {
  show: boolean
}
export default function Preloader({ show }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className='app-preloader'
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className='app-preloader__circle'
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
