import React from 'react'
import { motion } from 'framer-motion'
import type { BreakpointConfig, SkillCategory } from '../../types/skills'

interface SkillOrbitIconProps {
  skill: SkillCategory
  angle: number
  index: number
  config: BreakpointConfig[keyof BreakpointConfig]
  onSelect: (skill: SkillCategory) => void
}

const ROTATION_DURATION = 60

export const SkillOrbitIcon: React.FC<SkillOrbitIconProps> = ({
  skill,
  config,
  angle,
  index,
  onSelect,
}) => {
  const x = Math.cos(angle) * config.radius
  const y = Math.sin(angle) * config.radius

  const labelSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
  }

  return (
    <motion.div
      key={skill.name}
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
        <motion.div
          className='absolute -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap border pointer-events-none select-none'
          style={{
            top: config.labelPosition.top,
            left: config.labelPosition.left,
          }}
        >
          <motion.span
            className={`${
              labelSizeClasses[config.labelSize]
            } font-medium text-gray-900`}
          >
            {skill.name}
          </motion.span>
        </motion.div>
        <motion.button
          onClick={() => onSelect(skill)}
          className={`${skill.color} rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:shadow-2xl transition-shadow`}
          style={{
            width: `${config.buttonSize}px`,
            height: `${config.buttonSize}px`,
          }}
          aria-label={`View ${name} skills`}
        >
          <skill.icon className='text-white' size={config.iconSize} />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
