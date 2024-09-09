import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';

const meta: Meta = {
  title: 'UI/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {}
