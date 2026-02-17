import { Label } from './Label'

export default {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['M', 'S'],
    },
    required: { control: 'boolean' },
    optionalTag: { control: 'boolean' },
  },
}

export const RequiredM = {
  args: {
    label: 'Label',
    size: 'M',
    required: true,
  },
}

export const RequiredS = {
  args: {
    label: 'Label',
    size: 'S',
    required: true,
  },
}

export const OptionalM = {
  args: {
    label: 'Label',
    size: 'M',
    required: false,
    optionalTag: true,
  },
}

export const OptionalS = {
  args: {
    label: 'Label',
    size: 'S',
    required: false,
    optionalTag: true,
  },
}

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Label label="Label" size="M" required />
      <Label label="Label" size="S" required />
      <Label label="Label" size="M" required={false} optionalTag />
      <Label label="Label" size="S" required={false} optionalTag />
    </div>
  ),
}
