import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@/components/ui/slider';

const meta: Meta = {
  title: 'UI/Slider',
  component: Slider
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => <Slider defaultValue={[33]} max={100} step={1} />
};
