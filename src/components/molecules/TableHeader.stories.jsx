import { TableHeader } from './TableHeader'

export default {
  title: 'Molecules/TableHeader',
  component: TableHeader,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['Gray', 'White'],
    },
    position: {
      control: 'select',
      options: ['Left', 'Center', 'Right'],
    },
    checkbox: { control: 'boolean' },
  },
}

export const Default = {
  args: { label: 'Header', color: 'Gray', position: 'Left', checkbox: true },
  decorators: [(Story) => <div className="w-[200px]"><Story /></div>],
}

export const AllVariants = {
  render: () => (
    <div className="flex gap-6 items-start">
      <div className="w-[200px]">
        <p className="text-xs font-semibold text-[#6b7280] mb-2 uppercase tracking-wide">Gray</p>
        <TableHeader color="Gray" position="Left" label="Header" />
        <TableHeader color="Gray" position="Center" label="Header" />
        <TableHeader color="Gray" position="Right" label="Header" />
      </div>
      <div className="w-[200px]">
        <p className="text-xs font-semibold text-[#6b7280] mb-2 uppercase tracking-wide">White</p>
        <TableHeader color="White" position="Left" label="Header" />
        <TableHeader color="White" position="Center" label="Header" />
        <TableHeader color="White" position="Right" label="Header" />
      </div>
    </div>
  ),
}

export const WithoutCheckbox = {
  args: { label: 'Header', color: 'Gray', position: 'Left', checkbox: false },
  decorators: [(Story) => <div className="w-[200px]"><Story /></div>],
}
