import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input';

const meta: Meta = {
  title: 'UI/Input',
  component: Input
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => <Input className="max-w-md" placeholder="Type something..." />
};
