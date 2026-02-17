export function Label({ label = 'Label', size = 'M', required = true, optionalTag = false, className = '' }) {
  const isSmall = size === 'S'

  const containerClass = `flex items-center gap-1 ${isSmall ? 'text-sm leading-5' : 'text-base leading-6'} ${className}`

  return (
    <div className={containerClass}>
      <span className="font-semibold text-[#293845]">{label}</span>
      {required && (
        <span className="font-normal text-[#293845]">*</span>
      )}
      {!required && optionalTag && (
        <span className="font-normal text-[#788896]">(optional)</span>
      )}
    </div>
  )
}
