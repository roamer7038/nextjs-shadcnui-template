import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/switch';

const meta: Meta = {
  title: 'UI/Switch',
  component: Switch
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
