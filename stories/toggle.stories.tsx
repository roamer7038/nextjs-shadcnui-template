import type { Meta, StoryObj } from '@storybook/react';
import { FontBoldIcon } from '@radix-ui/react-icons';
import { Toggle } from '@/components/ui/toggle';

const meta: Meta = {
  title: 'UI/Toggle',
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <FontBoldIcon className="h-4 w-4" />
    </Toggle>
  ),
};
