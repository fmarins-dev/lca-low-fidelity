import { Table } from './Table'

const columns = [
  { key: 'name',     label: 'Name',     position: 'Left',   checkbox: true  },
  { key: 'rating',   label: 'Rating',   position: 'Center', checkbox: false },
  { key: 'team',     label: 'Team',     position: 'Center', checkbox: false },
  { key: 'status',   label: 'Status',   position: 'Center', checkbox: false },
  { key: 'progress', label: 'Progress', position: 'Left',   checkbox: false },
  { key: 'actions',  label: 'Actions',  position: 'Center', checkbox: false },
]

const rows = [
  {
    id: 1,
    cells: {
      name:     { type: 'lead',     label: 'Alice Johnson', avatar: true },
      rating:   { type: 'rating',   rating: 5 },
      team:     { type: 'avatar-group' },
      status:   { type: 'badge',    badges: [{ label: 'Active',  color: 'Green',  variant: 'Fill' }] },
      progress: { type: 'progress', progress: 72 },
      actions:  { type: 'button-group' },
    },
  },
  {
    id: 2,
    cells: {
      name:     { type: 'lead',     label: 'Bob Martinez',  avatar: true },
      rating:   { type: 'rating',   rating: 3 },
      team:     { type: 'avatar-group' },
      status:   { type: 'badge',    badges: [{ label: 'Pending', color: 'Yellow', variant: 'Fill' }] },
      progress: { type: 'progress', progress: 45 },
      actions:  { type: 'button-group' },
    },
  },
  {
    id: 3,
    cells: {
      name:     { type: 'lead',     label: 'Carol Smith',   avatar: true },
      rating:   { type: 'rating',   rating: 4 },
      team:     { type: 'avatar-group' },
      status:   { type: 'badge',    badges: [{ label: 'Active',  color: 'Green',  variant: 'Fill' }] },
      progress: { type: 'progress', progress: 88 },
      actions:  { type: 'button-group' },
    },
  },
  {
    id: 4,
    cells: {
      name:     { type: 'lead',     label: 'David Lee',     avatar: true },
      rating:   { type: 'rating',   rating: 2 },
      team:     { type: 'avatar-group' },
      status:   { type: 'badge',    badges: [{ label: 'Pending', color: 'Yellow', variant: 'Fill' }] },
      progress: { type: 'progress', progress: 30 },
      actions:  { type: 'button-group' },
    },
  },
]

export default {
  title: 'Organisms/Table',
  component: Table,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    headerColor: {
      control: 'select',
      options: ['Gray', 'White'],
    },
  },
}

export const Default = {
  args: {
    columns,
    rows,
    size: 'large',
    headerColor: 'Gray',
  },
}

export const Medium = {
  args: {
    columns,
    rows,
    size: 'medium',
    headerColor: 'Gray',
  },
}

export const Small = {
  args: {
    columns,
    rows,
    size: 'small',
    headerColor: 'Gray',
  },
}

export const WhiteHeader = {
  args: {
    columns,
    rows,
    size: 'large',
    headerColor: 'White',
  },
}
