import { Dropdown } from './Dropdown'

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
]

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
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
    options: sampleOptions,
  },
}

export const Focused = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    options: sampleOptions,
    state: 'focused',
  },
}

export const Error = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    options: sampleOptions,
    error: true,
  },
}

export const ErrorWithMessage = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    options: sampleOptions,
    error: 'Please select an option',
  },
}

export const Disabled = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    options: sampleOptions,
    disabled: true,
  },
}

export const WithSelectedValue = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    options: sampleOptions,
    value: 'option2',
  },
}

export const WithoutLabel = {
  args: {
    placeholder: 'Select an option...',
    options: sampleOptions,
  },
}

export const AllStates = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Dropdown
        label="Label"
        placeholder="Placeholder"
        required
        options={sampleOptions}
      />
      <Dropdown
        label="Label"
        placeholder="Placeholder"
        required
        options={sampleOptions}
        state="focused"
      />
      <Dropdown
        label="Label"
        placeholder="Placeholder"
        required
        options={sampleOptions}
        error
      />
      <Dropdown
        label="Label"
        placeholder="Placeholder"
        required
        options={sampleOptions}
        disabled
      />
    </div>
  ),
}
