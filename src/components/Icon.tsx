import type { FC, ReactNode } from 'react'

import { cn } from "@/lib/utils"

import iconMap, { type IconName } from '@/icons'

type Size = 'small' | 'medium' | 'large' | 'xlarge'

type Icon = IconName | ( ( props: Partial< Omit< IconProps, 'icon' > > ) => ReactNode )

interface IconProps {
  icon: Icon
  size?: Size
  color?: string
  className?: string
}

const Icon: FC< IconProps > = ( {
  icon,
  size = 'medium',
  color,
  className,
  ...props
} ) => {

  // MUI icon size convention
  const sizeMap = {
    small: 'w-[18px] h-[18px]',
    medium: 'w-[24px] h-[24px]',
    large: 'w-[36px] h-[36px]',
    xlarge: 'w-[48px] h-[48px]',
  }

  if ( typeof icon == 'function' ) {
    return icon( {
      size,
      color,
      className,
      ...props,
    } )
  }

  const IconComponent = iconMap[ icon ]

  if ( !IconComponent ) {
    console.warn( `Icon not found: ${ icon }` )
    return null
  }

  return (
    <IconComponent
      className={ cn(
        sizeMap[ size ],
        color,
        className,
      ) }
      { ...props }
    />
  )
}

export default Icon

export type { Icon }