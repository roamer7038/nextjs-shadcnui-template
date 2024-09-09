import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/ui/label';

const meta: Meta = {
  title: 'UI/Label',
  component: Label,
  args: {
    children: 'Label'
  }
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};
