import { forwardRef } from 'react'

// Large: 48px h, px-20 py-14, text-16 semibold
// Medium: 40px h, px-20, text-14 semibold
// Small: p-8, text-14 semibold
// XS: 28px h, px-8 py-4, text-12 medium
const sizeClasses = {
  large:  { box: 'h-12 px-5 py-3.5', text: 'text-base font-semibold leading-6' },
  medium: { box: 'h-10 px-5',         text: 'text-sm font-semibold leading-5' },
  small:  { box: 'p-2',               text: 'text-sm font-semibold leading-5' },
  xs:     { box: 'h-7 px-2 py-1',     text: 'text-xs font-medium leading-[18px]' },
}

const variantStyles = {
  fill: {
    default:  'bg-[#675cf0] text-white hover:bg-[#5a4fe0]',
    disabled: 'bg-[rgba(103,92,240,0.32)] text-[#d4d1f6]',
  },
  outline: {
    default:  'border border-[#bbb7f3] text-[#675cf0] hover:bg-[#675cf0]/5',
    disabled: 'border border-[#d4d1f6] text-[rgba(103,92,240,0.32)]',
  },
  link: {
    default:  'text-[#675cf0] border-b border-[#bbb7f3]',
    disabled: 'text-[rgba(103,92,240,0.32)] border-b border-[#d4d1f6]',
  },
  destructive: {
    default:  'bg-[#dd4249] text-white hover:bg-[#c53a40]',
    disabled: 'bg-[rgba(221,66,73,0.32)] text-[#fff0f0]',
  },
}

export const Button = forwardRef(function Button(
  {
    children = 'Button',
    variant = 'fill',
    size = 'large',
    disabled = false,
    className = '',
    ...props
  },
  ref
) {
  const stateKey = disabled ? 'disabled' : 'default'
  const isLink = variant === 'link'
  const { box, text } = sizeClasses[size] || sizeClasses.large

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        transition-colors
        ${!isLink ? `rounded-[4px] ${box}` : ''}
        ${text}
        ${variantStyles[variant]?.[stateKey] ?? ''}
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
})
