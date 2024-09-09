import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@/components/ui/skeleton';

const meta: Meta = {
  title: 'UI/Skeleton',
  component: Skeleton
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
};
