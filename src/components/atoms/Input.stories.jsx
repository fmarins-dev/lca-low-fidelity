import { Input } from './Input'

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'focused', 'error', 'disabled'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    showLeftIcon: { control: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    showLeftIcon: true,
  },
}

export const Focused = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    showLeftIcon: true,
    state: 'focused',
  },
}

export const Error = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    showLeftIcon: true,
    error: true,
  },
}

export const ErrorWithMessage = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    showLeftIcon: true,
    error: 'This field has an error',
  },
}

export const Disabled = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    showLeftIcon: true,
    disabled: true,
  },
}

export const WithoutIcon = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    required: true,
    showLeftIcon: false,
  },
}

export const WithoutLabel = {
  args: {
    placeholder: 'Search...',
    showLeftIcon: true,
  },
}

export const AllStates = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Input
        label="Label"
        placeholder="Placeholder"
        required
        showLeftIcon
      />
      <Input
        label="Label"
        placeholder="Placeholder"
        required
        showLeftIcon
        state="focused"
      />
      <Input
        label="Label"
        placeholder="Placeholder"
        required
        showLeftIcon
        error
      />
      <Input
        label="Label"
        placeholder="Placeholder"
        required
        showLeftIcon
        disabled
      />
    </div>
  ),
}
