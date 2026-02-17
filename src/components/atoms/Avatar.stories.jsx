import { Avatar } from './Avatar'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 24, max: 96, step: 4 } },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
}

export const Default = {
  args: { size: 48 },
}

export const Sizes = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size={28} />
      <Avatar size={32} />
      <Avatar size={40} />
      <Avatar size={48} />
    </div>
  ),
}
