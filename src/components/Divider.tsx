import type { HTMLAttributes, ElementType, FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface DividerProps extends HTMLAttributes< HTMLDivElement > {
  variant?: 'fullWidth' | 'inset' | 'middle'
  orientation?: 'horizontal' | 'vertical'
  absolute?: boolean
  flexItem?: boolean
  textAlign?: 'left' | 'center' | 'right'
  component?: ElementType
  children?: ReactNode
}

const Divider: FC< DividerProps > = ( {
  variant = 'fullWidth',
  orientation = 'horizontal',
  absolute = false,
  flexItem = false,
  textAlign = 'center',
  component: Component = 'div',
  children,
  className,
  ...props
} ) => {

  const isHorizontal = orientation == 'horizontal'
  const hasChildren = Boolean( children )

  const baseClasses = cn(
    'border-border',
    { // Horizontal divider
      'border-t': isHorizontal && !hasChildren,
      'min-h-[1px]': isHorizontal && hasChildren,
      // Vertical divider
      'h-full border-l': !isHorizontal && hasChildren,
      'min-w-[1px]': !isHorizontal && hasChildren,
      // Flex item
      'flex-shrink-0': flexItem,
      // Absolute position
      'absolute': absolute,
      'top-0 left-0 right-0': absolute && isHorizontal,
      'top-0 left-0 bottom-0': absolute && !isHorizontal,
    }
  )

  const variantClasses = cn( {
    // Default full width
    '': variant == 'fullWidth',
    // Inset - adds margin to start
    'ml-4': variant == 'inset' && isHorizontal,
    'mr-4': variant == 'inset' && isHorizontal,
    'mt-4': variant == 'inset' && !isHorizontal,
    // Middle - adds margin to both sides
    'mx-4': variant == 'middle' && isHorizontal,
    'my-4': variant == 'middle' && !isHorizontal,
  } )

  if( hasChildren ) {
    return (
      <Component
        role="separator"
        className={ cn( 
          'flex items-center',
          !isHorizontal && 'flex-col',
          variantClasses,
          className
        ) }
        { ...props }
      >
        {/* Before line */}
        <div
          className={ cn( 
            'border-border flex-1',
            isHorizontal ? 'border-t' : 'border-l',
          ) }
        />
        {/* Children */}
        <div
          className={ cn( 
            'text-muted-foreground text-sm font-medium  whitespace-nowrap',
            isHorizontal ? 'px-3' : 'py-3',
            { 'order-first': textAlign == 'left',
              'order-last': textAlign == 'right',
            }
          ) }
        >
          { children }
        </div>
        {/* After line */}
        <div
          className={ cn( 
            'border-border',
            isHorizontal ? 'border-t' : 'border-l',
            ( textAlign == 'right' || textAlign == 'center' ) && 'flex-1'
          ) }
        />
      </Component>
    )
  }
  
  return (
    <Component 
      role="separator"
      className={ cn( baseClasses, variantClasses, className ) }
      { ...props }
    />
  )
}

export default Divider