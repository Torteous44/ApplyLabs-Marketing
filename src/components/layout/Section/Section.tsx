'use client'

import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, type ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const sectionVariants = cva(
  'w-full',
  {
    variants: {
      variant: {
        default: 'bg-white text-black',
        dark: 'bg-blackBg text-white',
        accent: 'bg-lightBlueBg text-black',
        hero: 'bg-[#F3F3F3] text-black',
        transparent: 'bg-transparent',
      },
      size: {
        sm: 'py-12 md:py-16',
        md: 'py-16 md:py-24', 
        lg: 'py-24 md:py-32',
        xl: 'py-32 md:py-40',
      },
      container: {
        true: 'px-4 md:px-6 lg:px-8 max-w-7xl mx-auto',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      container: true,
    },
  }
)

export interface SectionProps
  extends ComponentProps<'section'>,
    VariantProps<typeof sectionVariants> {}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, size, container, ...props }, ref) => {
    return (
      <section
        className={cn(sectionVariants({ variant, size, container, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Section.displayName = 'Section'

export { Section, sectionVariants } 