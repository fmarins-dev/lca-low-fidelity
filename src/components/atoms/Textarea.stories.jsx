import { Textarea } from './Textarea'

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'focused', 'error', 'disabled'],
    },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
  },
}

export const Focused = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    state: 'focused',
  },
}

export const Error = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    error: true,
  },
}

export const ErrorWithMessage = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    error: 'This field has an error',
  },
}

export const Disabled = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    disabled: true,
  },
}

export const WithoutLabel = {
  args: {
    placeholder: 'Type something...',
  },
}

export const AllStates = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Textarea
        label="Label"
        placeholder="Placeholder"
        required
      />
      <Textarea
        label="Label"
        placeholder="Placeholder"
        required
        state="focused"
      />
      <Textarea
        label="Label"
        placeholder="Placeholder"
        required
        error
      />
      <Textarea
        label="Label"
        placeholder="Placeholder"
        required
        disabled
      />
    </div>
  ),
}
