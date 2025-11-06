import type { LucideIcon } from 'lucide-react'

export interface SkillCategory {
  name: string
  icon: LucideIcon
  color: string
  technologies: string[]
}

type BreakpointTypes = 'mobile' | 'tablet' | 'desktop' | 'large'
type BreakpointOptions = {
  className: string
  radius: number
  iconSize: number
  buttonSize: number
  labelSize: 'xs' | 'sm' | 'base'
  labelPosition: { top: string; left: string }
}

export type BreakpointConfig = Record<BreakpointTypes, BreakpointOptions>
