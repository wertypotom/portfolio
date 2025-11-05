import React from 'react'
import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface SkillOrbitIconProps {
  name: string
  icon: LucideIcon
  color: string
  angle: number
  radius: number
  index: number
  iconSize: number
  buttonSize: number
  labelSize: 'xs' | 'sm' | 'base'
  labelPosition: { top: string; left: string }
  onSelect: (name: string) => void
}

const ROTATION_DURATION = 60

export const SkillOrbitIcon: React.FC<SkillOrbitIconProps> = ({
  name,
  icon: Icon,
  color,
  angle,
  radius,
  index,
  iconSize,
  buttonSize,
  labelSize,
  labelPosition,
  onSelect,
}) => {
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  const labelSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
  }

  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className='absolute'
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <motion.div
        className='relative -translate-x-1/2 -translate-y-1/2'
        animate={{ rotate: -360 }}
        transition={{
          duration: ROTATION_DURATION,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div
          className='absolute -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap border'
          style={{
            top: labelPosition.top,
            left: labelPosition.left,
          }}
        >
          <span
            className={`${labelSizeClasses[labelSize]} font-medium text-gray-900`}
          >
            {name}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={() => onSelect(name)}
          className={`${color} rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:shadow-2xl transition-shadow`}
          style={{
            width: `${buttonSize}px`,
            height: `${buttonSize}px`,
          }}
          aria-label={`View ${name} skills`}
        >
          <Icon className='text-white' size={iconSize} />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
