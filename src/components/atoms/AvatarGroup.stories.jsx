import { AvatarGroup } from './AvatarGroup'

export default {
  title: 'Atoms/AvatarGroup',
  component: AvatarGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    count: { control: { type: 'number', min: 1, max: 8, step: 1 } },
    avatarSize: { control: { type: 'number', min: 24, max: 96, step: 4 } },
  },
}

export const Default = {
  args: { count: 3, avatarSize: 48 },
}

export const Sizes = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <AvatarGroup count={3} avatarSize={48} />
      <AvatarGroup count={3} avatarSize={40} />
      <AvatarGroup count={3} avatarSize={32} />
    </div>
  ),
}
