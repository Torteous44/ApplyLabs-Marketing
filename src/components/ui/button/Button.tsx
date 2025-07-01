'use client'

import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, type ComponentProps, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight cursor-pointer transition-[background-color,box-shadow,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {

        default:
          'bg-[var(--color-brandBlue)] text-white' +
          ' hover:bg-[var(--color-brandBlue)]/90',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
        outline:
          'border border-transparent text-white hover:border-white/30' + // white text on dark bg
          ' focus-visible:border-white',
        secondary:
          'bg-transparent text-black border border-transparent hover:border-gray-300',
        ghost: 'text-black hover:bg-gray-100 active:bg-gray-200',
        link: 'text-blue-600 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-8 md:h-9 px-6 md:px-8 text-base md:text-lg',
        sm: 'h-7 px-4 text-sm',
        lg: 'h-10 md:h-10 px-6 text-lg',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, iconLeft, iconRight, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        {children}
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants } 