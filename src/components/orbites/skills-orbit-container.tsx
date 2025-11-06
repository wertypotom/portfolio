import React from 'react'
import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import { SkillOrbitIcon } from './skill-orbit-icon'

interface SkillCategory {
  name: string
  icon: LucideIcon
  color: string
  technologies: string[]
}

interface SkillsOrbitContainerProps {
  skillCategories: SkillCategory[]
  onSkillSelect: (skillName: string) => void
}

const ROTATION_DURATION = 60

const BREAKPOINT_CONFIGS = {
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
          className={`absolute z-10 left-1/2 top-1/2 ${config.className}`}
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
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                angle={angle}
                radius={config.radius}
                index={index}
                iconSize={config.iconSize}
                buttonSize={config.buttonSize}
                labelSize={config.labelSize}
                labelPosition={config.labelPosition}
                onSelect={onSkillSelect}
              />
            )
          })}
        </motion.div>
      ))}
    </>
  )
}
