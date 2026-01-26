import { forwardRef, useState, useRef, useEffect } from 'react'

const CaretUpDownIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#293845]"
  >
    <path d="m7 15 5 5 5-5" />
    <path d="m7 9 5-5 5 5" />
  </svg>
)

const stateStyles = {
  default: 'border-[#bdc6d1] bg-white',
  focused: 'border-[#675cf0] bg-white',
  error: 'border-[#dd4249] bg-white',
  disabled: 'border-[#bdc6d1] bg-[#f7f9fa] cursor-not-allowed',
}

export const Dropdown = forwardRef(function Dropdown(
  {
    label,
    placeholder = 'Placeholder',
    state = 'default',
    error,
    disabled = false,
    required = false,
    options = [],
    value,
    onChange,
    className = '',
    ...props
  },
  ref
) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value)
  const [isFocused, setIsFocused] = useState(false)
  const dropdownRef = useRef(null)

  const currentState = disabled ? 'disabled' : error ? 'error' : isFocused || isOpen ? 'focused' : state

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
        setIsFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  const handleSelect = (option) => {
    setSelectedValue(option.value)
    setIsOpen(false)
    setIsFocused(false)
    onChange?.(option.value)
  }

  const handleKeyDown = (e) => {
    if (disabled) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const selectedOption = options.find((opt) => opt.value === selectedValue)

  return (
    <div
      ref={dropdownRef}
      className={`flex flex-col gap-2 w-full max-w-[348px] ${className}`}
    >
      {label && (
        <label className="flex items-center gap-1 text-base font-semibold text-[#293845] leading-6">
          {label}
          {required && <span className="font-normal text-[#293845]">*</span>}
        </label>
      )}
      <div className="relative">
        <div
          ref={ref}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={`
            flex items-center gap-2
            px-3 py-3
            rounded-md border-[1.5px]
            shadow-[0px_1px_2px_0px_rgba(13,13,13,0.04)]
            transition-colors
            cursor-pointer
            ${stateStyles[currentState]}
            ${disabled ? 'cursor-not-allowed' : ''}
          `}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onFocus={() => !disabled && setIsFocused(true)}
          onBlur={() => !isOpen && setIsFocused(false)}
          onKeyDown={handleKeyDown}
          {...props}
        >
          <span
            className={`
              flex-1 min-w-0
              text-base font-semibold leading-6
              ${selectedOption ? 'text-[#293845]' : 'text-[#c3cfd9]'}
            `}
          >
            {selectedOption?.label || placeholder}
          </span>
          <span className="flex-shrink-0">
            <CaretUpDownIcon />
          </span>
        </div>
        {isOpen && !disabled && (
          <ul
            role="listbox"
            className="
              absolute z-10 w-full mt-1
              bg-white border border-[#bdc6d1] rounded-md
              shadow-[0px_4px_8px_0px_rgba(13,13,13,0.08)]
              max-h-60 overflow-auto
            "
          >
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={selectedValue === option.value}
                className={`
                  px-3 py-3
                  text-base font-semibold leading-6
                  cursor-pointer
                  transition-colors
                  ${
                    selectedValue === option.value
                      ? 'bg-[#f7f9fa] text-[#675cf0]'
                      : 'text-[#293845] hover:bg-[#f7f9fa]'
                  }
                `}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && typeof error === 'string' && (
        <span className="text-sm text-[#dd4249]">{error}</span>
      )}
    </div>
  )
})
