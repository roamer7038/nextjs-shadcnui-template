import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/ui/badge';

const meta: Meta = {
  title: 'UI/Badge',
  component: Badge,
  args: {
    children: 'Badge',
    variant: 'default'
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'secondary', 'outline', 'destructive']
    }
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
