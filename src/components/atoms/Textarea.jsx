import { forwardRef } from 'react'

const stateStyles = {
  default: 'border-[#bdc6d1] bg-white focus:border-[#675cf0]',
  focused: 'border-[#675cf0] bg-white',
  error: 'border-[#dd4249] bg-white',
  disabled: 'border-[#bdc6d1] bg-[#f7f9fa] cursor-not-allowed',
}

export const Textarea = forwardRef(function Textarea(
  {
    label,
    placeholder = 'Placeholder',
    state = 'default',
    error,
    disabled = false,
    required = false,
    rows = 5,
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
      <textarea
        ref={ref}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`
          w-full min-h-[120px]
          px-3 pt-3 pb-2
          rounded-md border-[1.5px]
          shadow-[0px_1px_2px_0px_rgba(13,13,13,0.04)]
          text-base font-semibold leading-6
          text-[#293845] placeholder:text-[#c3cfd9]
          outline-none transition-colors
          resize-y
          disabled:cursor-not-allowed
          ${stateStyles[currentState]}
        `}
        {...props}
      />
      {error && typeof error === 'string' && (
        <span className="text-sm text-[#dd4249]">{error}</span>
      )}
    </div>
  )
})
