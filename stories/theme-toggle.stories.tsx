import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from '@/components/theme/theme-toggle';

const meta: Meta = {
  title: 'UI/ThemeToggle',
  component: ThemeToggle
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};
