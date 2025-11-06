import React from 'react'
import { motion } from 'framer-motion'
import { SkillOrbitIcon } from './skill-orbit-icon'
import type { BreakpointConfig, SkillCategory } from '../../types/skills'

interface SkillsOrbitContainerProps {
  skillCategories: SkillCategory[]
  onSkillSelect: (skillName: SkillCategory) => void
}

const ROTATION_DURATION = 60

const BREAKPOINT_CONFIGS: BreakpointConfig = {
  mobile: {
    className: 'sm:hidden',
    radius: 180,
    iconSize: 24,
    buttonSize: 56,
    labelSize: 'xs' as const,
    labelPosition: { top: '-1.5rem', left: '1.75rem' },
  },
  tablet: {
    className: 'hidden sm:block md:hidden',
    radius: 220,
    iconSize: 32,
    buttonSize: 80,
    labelSize: 'sm' as const,
    labelPosition: { top: '-1.25rem', left: '2.5rem' },
  },
  desktop: {
    className: 'hidden md:block lg:hidden',
    radius: 260,
    iconSize: 36,
    buttonSize: 96,
    labelSize: 'sm' as const,
    labelPosition: { top: '-0.75rem', left: '3rem' },
  },
  large: {
    className: 'hidden lg:block',
    radius: 320,
    iconSize: 40,
    buttonSize: 112,
    labelSize: 'base' as const,
    labelPosition: { top: '-0.75rem', left: '3.5rem' },
  },
}

export const SkillsOrbitContainer: React.FC<SkillsOrbitContainerProps> = ({
  skillCategories,
  onSkillSelect,
}) => {
  return (
    <>
      {Object.entries(BREAKPOINT_CONFIGS).map(([breakpoint, config]) => (
        <motion.div
          key={breakpoint}
          className={`absolute z-30 left-1/2 top-1/2 ${config.className}`}
          animate={{ rotate: 360 }}
          transition={{
            duration: ROTATION_DURATION,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {skillCategories.map((skill, index) => {
            const angle = (index / skillCategories.length) * 2 * Math.PI

            return (
              <SkillOrbitIcon
                skill={skill}
                angle={angle}
                config={config}
                index={index}
                onSelect={onSkillSelect}
              />
            )
          })}
        </motion.div>
      ))}
    </>
  )
}
