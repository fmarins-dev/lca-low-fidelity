import { TableHeader } from '../molecules/TableHeader'
import { TableCell } from '../molecules/TableCell'

/**
 * columns: Array<{
 *   key: string
 *   label: string
 *   position?: 'Left' | 'Center' | 'Right'
 *   color?: 'Gray' | 'White'
 *   checkbox?: boolean
 * }>
 *
 * rows: Array<{
 *   id: string | number
 *   cells: Record<columnKey, TableCellProps>
 * }>
 */
export function Table({
  columns = [],
  rows = [],
  size = 'large',
  headerColor = 'Gray',
  className = '',
}) {
  return (
    <div className={`w-full overflow-x-auto rounded-md border border-[#dddde3] ${className}`}>
      {/* Header */}
      <div className="flex">
        {columns.map((col) => (
          <TableHeader
            key={col.key}
            label={col.label}
            position={col.position ?? 'Left'}
            color={col.color ?? headerColor}
            checkbox={col.checkbox ?? false}
            className="flex-1 min-w-0"
          />
        ))}
      </div>

      {/* Rows */}
      {rows.map((row) => (
        <div key={row.id} className="flex">
          {columns.map((col) => {
            const cell = row.cells?.[col.key] ?? {}
            return (
              <TableCell
                key={col.key}
                size={size}
                position={(col.position ?? 'Left').toLowerCase()}
                className="flex-1 min-w-0"
                {...cell}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
