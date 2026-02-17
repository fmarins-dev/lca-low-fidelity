import { forwardRef } from 'react'
import { Avatar, AvatarGroup, Badge } from '../atoms'

// ─── Icons ────────────────────────────────────────────────────────────────────

const StarIcon = ({ filled = true }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill={filled ? '#f59e0b' : 'none'}
      stroke={filled ? '#f59e0b' : '#d1d5db'}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#883cec" strokeWidth="1.5" />
    <path d="M9 12l2 2 4-4" stroke="#883cec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DotsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="5" r="1.5" fill="#6b7280" />
    <circle cx="12" cy="12" r="1.5" fill="#6b7280" />
    <circle cx="12" cy="19" r="1.5" fill="#6b7280" />
  </svg>
)

const RefreshIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M1 4v6h6M23 20v-6h-6" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <polyline points="3,6 5,6 21,6" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SpinnerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="animate-spin">
    <circle cx="12" cy="12" r="10" stroke="#dddde3" strokeWidth="2" />
    <path d="M12 2a10 10 0 0110 10" stroke="#883cec" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// ─── Sub-components ───────────────────────────────────────────────────────────

const CheckboxBase = () => (
  <div className="w-4 h-4 rounded-[4px] border-[1.25px] border-[#dddde3] bg-[#f6f6f9] flex-shrink-0 shadow-[0px_1px_2px_0px_rgba(13,13,13,0.04)]" />
)

const RadioBase = () => (
  <div className="w-4 h-4 rounded-full border-[1.25px] border-[#dddde3] bg-[#f6f6f9] flex-shrink-0 shadow-[0px_1px_2px_0px_rgba(13,13,13,0.04)]" />
)

const SwitchBase = () => (
  <div className="w-10 h-5 rounded-full bg-[#9e9fa9] p-0.5 flex items-center flex-shrink-0">
    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
  </div>
)

const RatingStars = ({ rating = 4 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ))}
  </div>
)

const ProgressBar = ({ value = 32 }) => (
  <div className="flex items-center gap-4 w-full min-w-0">
    <div className="flex-1 h-2 rounded-full bg-[#f2f2f5] overflow-hidden min-w-0">
      <div className="h-full rounded-full bg-[#883cec]" style={{ width: `${value}%` }} />
    </div>
    <span className="text-sm font-medium text-[#202224] flex-shrink-0">{value}%</span>
    <SpinnerIcon />
  </div>
)

// ─── Content per type ─────────────────────────────────────────────────────────

function CellContent({ type, label, avatar, avatarSize, rating, progress, badges }) {
  switch (type) {
    case 'lead':
      return (
        <>
          <CheckboxBase />
          <div className="flex flex-1 items-center gap-3 min-w-0">
            {avatar && <Avatar size={avatarSize} />}
            <span className="text-sm font-medium text-[#202224] leading-normal truncate">{label}</span>
          </div>
        </>
      )
    case 'rating':
      return <RatingStars rating={rating} />
    case 'avatar':
      return <Avatar size={avatarSize} />
    case 'avatar-group':
      return <AvatarGroup avatarSize={avatarSize} />
    case 'checked':
      return <CheckIcon />
    case 'switch':
      return <SwitchBase />
    case 'radio':
      return <RadioBase />
    case 'checkbox':
      return <CheckboxBase />
    case 'progress':
      return <ProgressBar value={progress} />
    case 'button':
      return <DotsIcon />
    case 'button-group':
      return (
        <div className="flex items-center gap-3">
          <RefreshIcon />
          <TrashIcon />
        </div>
      )
    case 'badge': {
      const b = badges?.[0] ?? { label: 'Tag', color: 'Green', variant: 'Fill' }
      return <Badge label={b.label} color={b.color} variant={b.variant ?? 'Fill'} size="Medium" />
    }
    case 'badges-group':
      return (
        <div className="flex items-center gap-2 flex-wrap">
          {(badges ?? [
            { label: 'Tag', color: 'Green',  variant: 'Fill' },
            { label: 'Tag', color: 'Yellow', variant: 'Fill' },
          ]).map((b, i) => (
            <Badge key={i} label={b.label} color={b.color} variant={b.variant ?? 'Fill'} size="Medium" />
          ))}
          <span className="text-xs font-medium text-[#6b7280]">+4</span>
        </div>
      )
    default:
      return <span className="text-sm font-medium text-[#202224]">{label}</span>
  }
}

// ─── Main component ───────────────────────────────────────────────────────────

const sizeClasses = {
  large:  'h-16',  // 64px
  medium: 'h-14',  // 56px
  small:  'h-12',  // 48px
}

const positionClasses = {
  left:   'justify-start',
  center: 'justify-center',
  right:  'justify-end',
}

const avatarSizeMap = {
  large:  32,
  medium: 32,
  small:  28,
}

export const TableCell = forwardRef(function TableCell(
  {
    type = 'lead',
    size = 'large',
    position = 'left',
    label = 'Text',
    avatar = true,
    rating = 4,
    progress = 32,
    badges,
    className = '',
    ...props
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={`
        flex items-center gap-3 px-3
        bg-[#fcfcfc] border-b border-[#dddde3]
        ${sizeClasses[size] ?? sizeClasses.large}
        ${positionClasses[position] ?? positionClasses.left}
        ${className}
      `}
      {...props}
    >
      <CellContent
        type={type}
        label={label}
        avatar={avatar}
        avatarSize={avatarSizeMap[size] ?? 32}
        rating={rating}
        progress={progress}
        badges={badges}
      />
    </div>
  )
})
