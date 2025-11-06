import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface SkillSearchModalProps {
  isLoading: boolean
  onClose: () => void
  searchQuery: string
  result: string
  error: string
}

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)

      return () => clearTimeout(timeout)
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText('')
        setCurrentIndex(0)
      }, 2000)

      return () => clearTimeout(resetTimeout)
    }
  }, [currentIndex, text])

  useEffect(() => {
    setDisplayedText('')
    setCurrentIndex(0)
  }, [text])

  return (
    <div className='text-xl text-gray-700 text-center'>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className='inline-block w-0.5 h-6 bg-gray-700 ml-1'
      />
    </div>
  )
}

export const SkillSearchModal: React.FC<SkillSearchModalProps> = ({
  onClose,
  searchQuery,
  isLoading,
  result,
  error,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className='bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-2xl font-bold text-gray-900'>
            Skill Analysis: {searchQuery}
          </h3>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700 transition-colors'
          >
            <X size={24} />
          </button>
        </div>

        {isLoading && (
          <div className='flex flex-col items-center justify-center py-8'>
            <TypewriterText text='Wait, I am trying to recall how I used this skill 🤔' />
          </div>
        )}

        {error && (
          <div className='bg-red-50 border border-red-200 rounded-lg p-4 mb-4'>
            <p className='text-red-700'>Oops, something went wrong 💥</p>
          </div>
        )}

        {result && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='prose prose-orange max-w-none'
          >
            <div className='bg-orange-50 border border-orange-200 rounded-lg p-6'>
              <p className='text-gray-800 whitespace-pre-wrap'>{result}</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
