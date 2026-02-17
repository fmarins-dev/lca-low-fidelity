import { forwardRef } from 'react'

const CheckboxBase = () => (
  <div className="size-4 rounded-[4px] border-[1.25px] border-[#dddde3] bg-[#f6f6f9] flex-shrink-0 shadow-[0px_1px_2px_0px_rgba(13,13,13,0.04)]" />
)

const bgColor = {
  Gray:  'bg-[#f6f6f9]',
  White: 'bg-[#fcfcfc]',
}

const positionClass = {
  Left:   'justify-start',
  Center: 'justify-center',
  Right:  'justify-end',
}

const labelClass = {
  Left:   'shrink-0',
  Center: 'flex-1 text-center',
  Right:  'flex-1 text-right',
}

export const TableHeader = forwardRef(function TableHeader(
  {
    label = 'Header',
    color = 'Gray',
    position = 'Left',
    checkbox = true,
    className = '',
    ...props
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={`
        flex items-center gap-3
        h-10 px-3 py-2
        border-b border-[#dddde3]
        ${bgColor[color] ?? bgColor.Gray}
        ${positionClass[position] ?? positionClass.Left}
        ${className}
      `}
      {...props}
    >
      {checkbox && <CheckboxBase />}
      <span className={`text-sm font-medium text-[#202224] leading-[1.5] ${labelClass[position] ?? labelClass.Left}`}>
        {label}
      </span>
    </div>
  )
})
