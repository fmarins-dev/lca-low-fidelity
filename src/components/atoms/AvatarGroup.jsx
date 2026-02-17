import { Avatar } from './Avatar'

export function AvatarGroup({ count = 3, avatarSize = 48, className = '' }) {
  return (
    <div className={`flex items-center pr-2 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <Avatar
          key={i}
          size={avatarSize}
          className="border-2 border-white -mr-2"
          style={{ zIndex: count - i }}
        />
      ))}
    </div>
  )
}
