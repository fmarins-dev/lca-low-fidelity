const UserIcon = ({ size }) => (
  <svg
    width={size * 0.667}
    height={size * 0.667}
    viewBox="0 0 24 24"
    fill="#8ea0b0"
  >
    <path d="M12 12c2.67 0 4.8-2.13 4.8-4.8C16.8 4.53 14.67 2.4 12 2.4 9.33 2.4 7.2 4.53 7.2 7.2 7.2 9.87 9.33 12 12 12zm0 2.4C8.8 14.4 2.4 16 2.4 19.2V21.6h19.2V19.2C21.6 16 15.2 14.4 12 14.4z" />
  </svg>
)

export function Avatar({ size = 48, src, alt = '', className = '', style }) {
  return (
    <div
      className={`rounded-full bg-[#e1e5ec] flex-shrink-0 flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <UserIcon size={size} />
      )}
    </div>
  )
}
