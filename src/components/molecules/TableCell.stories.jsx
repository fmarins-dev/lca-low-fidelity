import { TableCell } from './TableCell'

export default {
  title: 'Molecules/TableCell',
  component: TableCell,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['lead', 'rating', 'avatar', 'avatar-group', 'checked', 'switch', 'radio', 'checkbox', 'progress', 'button', 'button-group', 'badge', 'badges-group'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    position: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    avatar: { control: 'boolean' },
    rating: { control: { type: 'range', min: 0, max: 5, step: 1 } },
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
}

export const Lead = {
  args: { type: 'lead', size: 'large', position: 'left', label: 'Text', avatar: true },
  decorators: [(Story) => <div className="w-[280px]"><Story /></div>],
}

export const Rating = {
  args: { type: 'rating', size: 'large', position: 'center', rating: 4 },
  decorators: [(Story) => <div className="w-[200px]"><Story /></div>],
}

export const AvatarSingle = {
  args: { type: 'avatar', size: 'large', position: 'center' },
  decorators: [(Story) => <div className="w-[200px]"><Story /></div>],
}

export const AvatarGroup = {
  args: { type: 'avatar-group', size: 'large', position: 'center' },
  decorators: [(Story) => <div className="w-[200px]"><Story /></div>],
}

export const Checked = {
  args: { type: 'checked', size: 'large', position: 'center' },
  decorators: [(Story) => <div className="w-[200px]"><Story /></div>],
}

export const Switch = {
  args: { type: 'switch', size: 'large', position: 'center' },
  decorators: [(Story) => <div className="w-[200px]"><Story /></div>],
}

export const Radio = {
  args: { type: 'radio', size: 'large', position: 'center' },
  decorators: [(Story) => <div className="w-[200px]"><Story /></div>],
}

export const Checkbox = {
  args: { type: 'checkbox', size: 'large', position: 'center' },
  decorators: [(Story) => <div className="w-[200px]"><Story /></div>],
}

export const Progress = {
  args: { type: 'progress', size: 'large', position: 'center', progress: 32 },
  decorators: [(Story) => <div className="w-[280px]"><Story /></div>],
}

export const Button = {
  args: { type: 'button', size: 'large', position: 'center' },
  decorators: [(Story) => <div className="w-[200px]"><Story /></div>],
}

export const ButtonGroup = {
  args: { type: 'button-group', size: 'large', position: 'center' },
  decorators: [(Story) => <div className="w-[200px]"><Story /></div>],
}

export const Badge = {
  args: { type: 'badge', size: 'large', position: 'center' },
  decorators: [(Story) => <div className="w-[200px]"><Story /></div>],
}

export const BadgesGroup = {
  args: { type: 'badges-group', size: 'large', position: 'center' },
  decorators: [(Story) => <div className="w-[280px]"><Story /></div>],
}

export const AllTypes = {
  render: () => (
    <div className="w-[280px] border border-[#dddde3] rounded-md overflow-hidden">
      <TableCell type="lead"         label="Text" avatar />
      <TableCell type="rating"       position="center" />
      <TableCell type="avatar"       position="center" />
      <TableCell type="avatar-group" position="center" />
      <TableCell type="checked"      position="center" />
      <TableCell type="switch"       position="center" />
      <TableCell type="radio"        position="center" />
      <TableCell type="checkbox"     position="center" />
      <TableCell type="progress"     progress={32} />
      <TableCell type="button"       position="center" />
      <TableCell type="button-group" position="center" />
      <TableCell type="badge"        position="center" />
      <TableCell type="badges-group" position="center" className="border-b-0" />
    </div>
  ),
}

export const AllSizes = {
  render: () => (
    <div className="flex gap-4 items-start">
      {['large', 'medium', 'small'].map((size) => (
        <div key={size} className="w-[240px] border border-[#dddde3] rounded-md overflow-hidden">
          <p className="px-3 py-1 text-xs font-semibold text-[#6b7280] bg-[#f6f6f9] border-b border-[#dddde3] uppercase tracking-wide">
            {size}
          </p>
          <TableCell type="lead"     size={size} label="Text" avatar />
          <TableCell type="rating"   size={size} position="center" />
          <TableCell type="avatar"   size={size} position="center" />
          <TableCell type="progress" size={size} progress={32} className="border-b-0" />
        </div>
      ))}
    </div>
  ),
}
