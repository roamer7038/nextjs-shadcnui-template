import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const meta: Meta = {
  title: 'UI/Alert',
  component: Alert,
  args: {
    variant: 'default'
  },
  argTypes: {
    variant: {
      options: ['default', 'destructive'],
      control: { type: 'radio' }
    }
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Default alert</AlertTitle>
      <AlertDescription>This is a default alert. It is used to provide information to the user.</AlertDescription>
    </Alert>
  )
};
