import type { ReactNode } from 'react'
import './styles.css'

export default function Slider({ children }: { children: ReactNode }) {
  return <ul className='app-slider'>{children}</ul>
}
