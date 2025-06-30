import type React from 'react'

import { cn } from '@/lib/utils'

import { type VariantProps, cva } from 'class-variance-authority'

const sectionVariants = cva(
  'relative', // base classes
  {
    variants: {
      background: {
        white: 'bg-white',
        black: 'bg-black text-white',
        gray: 'bg-gray-100',
        'neon-yellow': 'bg-neon-yellow',
        'neon-pink': 'bg-neon-pink',
        'neon-blue': 'bg-neon-blue',
        'neon-green': 'bg-neon-green',
        'neon-purple': 'bg-neon-purple',
        'neon-orange': 'bg-neon-orange',
        'neon-red': 'bg-neon-red',
        'neon-teal': 'bg-neon-black',
        gradient: 'bg-gradient-to-br from-neon-yellow via-white to-neon-pink',
        'gradient-dark': 'bg-gradient-to-r from-black via-gray-900 to-black',
        'gradient-rainbow': 'bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue',
      },
      padding: {
        none: '',
        sm: 'py-8',
        md: 'py-12',
        lg: 'py-16',
        xl: 'py-20',
        '2xl': 'py-24',
      },
      container: {
        none: '',
        sm: 'container mx-auto px-4 max-w-2xl',
        md: 'container mx-auto px-4 max-w-4xl',
        lg: 'container mx-auto px-4 max-w-6xl',
        full: 'container mx-auto px-4',
      },
      layout: {
        default: '',
        center: 'text-center',
        'two-column': 'grid md:grid-cols-2 gap-8 lg:gap-12 items-center',
        'three-column': 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8',
        'auto-grid': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
      },
      border: {
        none: '',
        top: 'border-t-4 border-black',
        bottom: 'border-b-4 border-black',
        both: 'border-t-4 border-b-4 border-black',
        full: 'border-4 border-black',
      },
      pattern: {
        none: '',
        dots: 'bg-pattern-dots',
        'dots-lg': 'bg-pattern-dots-lg',
        grid: 'bg-pattern-grid',
        'grid-lg': 'bg-pattern-grid-lg',
        hatch: 'bg-pattern-hatch',
        'cross-hatch': 'bg-pattern-cross-hatch',
        stripes: 'bg-pattern-stripes',
        'stripes-diagonal': 'bg-pattern-stripes-diagonal',
        zigzag: 'bg-pattern-zigzag',
        circles: 'bg-pattern-circles',
        'circles-lg': 'bg-pattern-circles-lg',
        waves: 'bg-pattern-waves',
        hexagon: 'bg-pattern-hexagon',
        plus: 'bg-pattern-plus',
        triangles: 'bg-pattern-triangles',
      },
      overflow: {
        visible: '',
        hidden: 'overflow-hidden',
      },
    },
    defaultVariants: {
      background: 'white',
      padding: 'lg',
      container: 'full',
      layout: 'default',
      border: 'none',
      overflow: 'visible',
      pattern: 'none',
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: 'section' | 'div' | 'header' | 'footer'
}

export function Section({
  className,
  background,
  padding,
  container,
  layout,
  border,
  overflow,
  pattern,
  as: Component = 'section',
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        sectionVariants({
          background,
          padding,
          container: 'none',
          layout: 'default',
          border,
          overflow,
          pattern,
        }),
        className
      )}
      {...props}
    >
      <div
        className={cn(
          container === 'none'
            ? ''
            : container === 'sm'
              ? 'container mx-auto max-w-2xl px-4'
              : container === 'md'
                ? 'container mx-auto max-w-4xl px-4'
                : container === 'lg'
                  ? 'container mx-auto max-w-6xl px-4'
                  : 'container mx-auto px-4'
        )}
      >
        <div
          className={cn(
            layout === 'center'
              ? 'text-center'
              : layout === 'two-column'
                ? 'grid items-center gap-8 md:grid-cols-2 lg:gap-12'
                : layout === 'three-column'
                  ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'
                  : layout === 'auto-grid'
                    ? 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    : ''
          )}
        >
          {children}
        </div>
      </div>
    </Component>
  )
}
