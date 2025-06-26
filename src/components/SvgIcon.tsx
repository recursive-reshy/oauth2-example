import { forwardRef } from 'react'
import type { ReactNode, ElementType, SVGProps } from 'react'

import { cn } from "@/lib/utils"

type SvgIconColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'disabled'

type SvgIconFontSize = 'inherit' | 'small' | 'medium' | 'large' | number

interface SvgIconProps extends Omit< SVGProps< SVGSVGElement >, 'children' > {
  color?: SvgIconColor
  fontSize?: SvgIconFontSize
  htmlColor?: string
  shapeRendering?: string
  titleAccess?: string
  viewBox?: string
  component?: ElementType
  children?: ReactNode
}

const SvgIcon = forwardRef< SVGSVGElement, SvgIconProps >( ( {
  color = 'inherit',
  fontSize = 'medium',
  htmlColor,
  shapeRendering,
  titleAccess,
  viewBox,
  component: Component = 'svg',
  children,
  className,
  ...props
}, ref )=> {

  const colorClassesMap = {
    inherit: 'text-inherit',
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-green-600 dark:text-green-500',
    warning: 'text-yellow-600 dark:text-yellow-500',
    error: 'text-red-600 dark:text-red-500',
    info: 'text-blue-600 dark:text-blue-500',
    disabled: 'text-gray-400 dark:text-gray-500',
  }

  // Font size classes mapping
  const getFontSizeClass = ( size: SvgIconFontSize ) => {
    if ( typeof size == 'number' ) {
      return undefined // Will be handled by inline style
    }
    
    const sizeClasses = {
      inherit: 'text-inherit',
      small: 'text-base', // 16px
      medium: 'text-xl', // 20px  
      large: 'text-2xl', // 24px
    }
    
    return sizeClasses[size]
  }
  
  // Font size styles for numeric values
  const getFontSizeStyle = ( size: SvgIconFontSize ) => {
    if ( typeof size == 'number' ) {
      return {
        fontSize: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
      }
    }
    return {}
  }

  const fontSizeClass = getFontSizeClass( fontSize)
  const fontSizeStyle = getFontSizeStyle( fontSize )

  return (
    <Component
      ref={ ref }
      className={ cn(
        // Base styles
        'select-none inline-block fill-current shrink-0',
        // Size styles
        fontSizeClass,
        // Default dimensions when not using fontSize
        typeof fontSize !== 'number' && 'w-[1em] h-[1em]',
        // Color styles
        !htmlColor && colorClassesMap[color],
        className
      )}
      style={{
        ...fontSizeStyle,
        color: htmlColor,
        ...props.style,
      }}
      focusable={ false }
      aria-hidden={ !titleAccess }
      role={ titleAccess && 'img' }
      viewBox={ viewBox }
      shapeRendering={ shapeRendering }
      { ...props }
    >
      { titleAccess && <title>{ titleAccess }</title> }
      { children }
    </Component>
  )
} )

export default SvgIcon