import { forwardRef } from 'react'

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const stateStyles = {
  default: 'border-[#bdc6d1] bg-white focus-within:border-[#675cf0]',
  focused: 'border-[#675cf0] bg-white',
  error: 'border-[#dd4249] bg-white',
  disabled: 'border-[#bdc6d1] bg-[#f7f9fa] cursor-not-allowed',
}

export const Input = forwardRef(function Input(
  {
    label,
    type = 'text',
    placeholder = 'Placeholder',
    state = 'default',
    error,
    disabled = false,
    required = false,
    showLeftIcon = false,
    leftIcon,
    className = '',
    ...props
  },
  ref
) {
  const currentState = disabled ? 'disabled' : error ? 'error' : state

  return (
    <div className={`flex flex-col gap-2 w-full max-w-[348px] ${className}`}>
      {label && (
        <label className="flex items-center gap-1 text-base font-semibold text-[#293845] leading-6">
          {label}
          {required && <span className="font-normal text-[#293845]">*</span>}
        </label>
      )}
      <div
        className={`
          flex items-center gap-2
          px-3 py-3
          rounded-md border-[1.5px]
          shadow-[0px_1px_2px_0px_rgba(13,13,13,0.04)]
          transition-colors
          ${stateStyles[currentState]}
        `}
      >
        {showLeftIcon && (
          <span className="flex-shrink-0">
            {leftIcon || <SearchIcon />}
          </span>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            flex-1 min-w-0
            text-base font-semibold leading-6
            text-[#293845] placeholder:text-[#c3cfd9]
            bg-transparent
            border-none outline-none
            disabled:cursor-not-allowed
          `}
          {...props}
        />
      </div>
      {error && typeof error === 'string' && (
        <span className="text-sm text-[#dd4249]">{error}</span>
      )}
    </div>
  )
})
