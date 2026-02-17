import { Button } from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['fill', 'outline', 'link', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small', 'xs'],
    },
    disabled: { control: 'boolean' },
  },
}

export const Fill = {
  args: { children: 'Button', variant: 'fill', size: 'large' },
}

export const Outline = {
  args: { children: 'Button', variant: 'outline', size: 'large' },
}

export const Link = {
  args: { children: 'Button', variant: 'link', size: 'large' },
}

export const Destructive = {
  args: { children: 'Button', variant: 'destructive', size: 'large' },
}

export const Disabled = {
  args: { children: 'Button', variant: 'fill', size: 'large', disabled: true },
}

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      <div className="flex gap-4 items-center">
        <Button variant="fill">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="link">Button</Button>
        <Button variant="destructive">Button</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="fill" disabled>Button</Button>
        <Button variant="outline" disabled>Button</Button>
        <Button variant="link" disabled>Button</Button>
        <Button variant="destructive" disabled>Button</Button>
      </div>
    </div>
  ),
}

export const AllSizes = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex gap-4 items-center">
        <Button variant="fill" size="large">Large</Button>
        <Button variant="fill" size="medium">Medium</Button>
        <Button variant="fill" size="small">Small</Button>
        <Button variant="fill" size="xs">XS</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="outline" size="large">Large</Button>
        <Button variant="outline" size="medium">Medium</Button>
        <Button variant="outline" size="small">Small</Button>
        <Button variant="outline" size="xs">XS</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="link" size="large">Large</Button>
        <Button variant="link" size="medium">Medium</Button>
        <Button variant="link" size="small">Small</Button>
        <Button variant="link" size="xs">XS</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="destructive" size="large">Large</Button>
        <Button variant="destructive" size="medium">Medium</Button>
        <Button variant="destructive" size="small">Small</Button>
        <Button variant="destructive" size="xs">XS</Button>
      </div>
    </div>
  ),
}
