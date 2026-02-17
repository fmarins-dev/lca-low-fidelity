import { Badge } from './Badge'

const colors = ['Gray', 'Purple', 'Red', 'Green', 'Yellow', 'Blue']
const variants = ['Strong', 'Fill', 'Border']

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    color:   { control: 'select', options: colors },
    variant: { control: 'select', options: variants },
    size:    { control: 'select', options: ['Medium', 'Small'] },
  },
}

export const Default = {
  args: { label: 'Badge', color: 'Gray', variant: 'Fill', size: 'Medium' },
}

export const AllColors = {
  render: () => (
    <div className="flex flex-col gap-6">
      {variants.map((variant) => (
        <div key={variant}>
          <p className="text-xs font-semibold text-[#6b7280] mb-3 uppercase tracking-wide">{variant}</p>
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <div key={color} className="flex flex-col items-center gap-1">
                <Badge label="Badge" color={color} variant={variant} size="Medium" />
                <Badge label="Badge" color={color} variant={variant} size="Small" />
                <span className="text-[10px] text-[#9ca3af]">{color}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}
