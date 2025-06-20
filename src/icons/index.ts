import { Moon, Sun } from 'lucide-react'

const iconMap = {
  moon: Moon,
  sun: Sun,
}

type IconName = keyof typeof iconMap

export default iconMap

export type { IconName }