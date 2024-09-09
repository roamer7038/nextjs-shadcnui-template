import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';

const meta: Meta = {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Click me',
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'radio' },
    },
    asChild: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
