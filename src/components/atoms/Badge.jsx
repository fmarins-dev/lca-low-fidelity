const tokens = {
  Strong: {
    Gray:   { bg: '#c3cfd9', text: '#293845' },
    Red:    { bg: '#dd4249', text: '#ffffff' },
    Purple: { bg: '#675cf0', text: '#ffffff' },
    Green:  { bg: '#30a46c', text: '#ffffff' },
    Yellow: { bg: '#fcc93b', text: '#293845' },
    Blue:   { bg: '#366cfe', text: '#ffffff' },
  },
  Fill: {
    Gray:   { bg: '#f6f6f9', text: '#4b5c6b' },
    Red:    { bg: '#fce2e4', text: '#ca292e' },
    Purple: { bg: '#f9f5ff', text: '#675cf0' },
    Green:  { bg: '#e6f6eb', text: '#218358' },
    Yellow: { bg: '#fffbeb', text: '#a5840a' },
    Blue:   { bg: '#ebefff', text: '#2962fd' },
  },
  Border: {
    Gray:   { bg: '#f6f6f9', text: '#4b5c6b', border: '#dddde3' },
    Red:    { bg: '#fef3f4', text: '#ca292e', border: '#f5aeb3' },
    Purple: { bg: '#f9f5ff', text: '#675cf0', border: '#c7c3fb' },
    Green:  { bg: '#f3fcf6', text: '#218358', border: '#adddc0' },
    Yellow: { bg: '#fffefa', text: '#a5840a', border: '#ffefbc' },
    Blue:   { bg: '#fafbff', text: '#2962fd', border: '#bbcaff' },
  },
}

export function Badge({
  label = 'Badge',
  color = 'Gray',
  variant = 'Fill',
  size = 'Medium',
  className = '',
}) {
  const t = tokens[variant]?.[color] ?? tokens.Fill.Gray
  const isSmall = size === 'Small'

  return (
    <span
      className={`
        inline-flex items-center justify-center rounded-full font-medium py-1
        ${isSmall ? 'px-1 text-[12px] leading-[18px]' : 'px-2 text-[14px] leading-[20px]'}
        ${t.border ? 'border' : ''}
        ${className}
      `}
      style={{
        backgroundColor: t.bg,
        color: t.text,
        ...(t.border && { borderColor: t.border }),
      }}
    >
      {label}
    </span>
  )
}
