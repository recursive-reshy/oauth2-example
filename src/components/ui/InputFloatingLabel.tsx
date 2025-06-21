import { useId, useState, useEffect } from 'react'
import type { FC, ComponentProps, FocusEvent, ChangeEvent } from 'react'

import { cn } from '@/lib/utils'

interface InputFloatingLabelProps extends ComponentProps< 'input' > {
  label: string
  error?: string
  handleFocus?: () => void
  handleBlur?: ( e: FocusEvent< HTMLInputElement > ) => void
  handleChange?: ( e: ChangeEvent< HTMLInputElement > ) => void
}

const InputFloatingLabel: FC< InputFloatingLabelProps > = ( {
  value,
  defaultValue,
  label,
  error,
  className,
  id: parsedId,
  type = 'text',
  handleFocus,
  handleBlur,
  handleChange,
  ...props
} ) => {

  const [ isFocused, setIsFocused ] = useState( false )
  const [ hasValue, setHasValue ] = useState( false )
  const id =  parsedId || useId()

  useEffect( () => {
    if( value != undefined ) {
      setHasValue( value != '')
    } else if( defaultValue != undefined ) {
      setHasValue( defaultValue != '')
    }
  }, [ value, defaultValue ] )

  return (
    <div className="relative">
      <input
        id={ id }
        className={ cn(
          'file:text-foreground placeholder:text-transparent', 
          'selection:bg-primary selection:text-primary-foreground',
          'dark:bg-input/30 border-input',
          'flex h-12 w-full min-w-0 rounded-md border bg-transparent px-3 pt-4 pb-', 
          'text-base shadow-xs transition-[color,box-shadow,border-color] outline-none',
          'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          error ?
            'border-destructive ring-destructive/20 dark:ring-destructive/40'
          :
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className
        ) }
        type={ type }
        onFocus={ () => {
          setIsFocused( true)
          handleFocus?.()
        } }
        onBlur={ ( e: FocusEvent< HTMLInputElement > ) => {
          setIsFocused( false )
          setHasValue( !!e.target.value )
          handleBlur?.( e )
        } }
        onChange={ ( e: ChangeEvent< HTMLInputElement > ) => {
          setHasValue( !!e.target.value )
          handleChange?.( e )
        } }
        { ...props }
      />
      <label
        htmlFor={ id }
        className={ cn(
          'absolute left-3 text-muted-foreground transition-all duration-200 ease-in-out pointer-events-none select-none',
          ( isFocused || hasValue ) ?
            'top-1 text-xs font-medium'
          :
            'top-1/2 -translate-y-1/2 text-base',
          isFocused && !error && 'text-ring',
          error && 'text-destructive'
        ) }
      >
        { label }
      </label>
      { error &&
        <p className="mt-1 text-xs text-destructive">
          { error }
        </p>
      }
    </div>
  )
}

export default InputFloatingLabel