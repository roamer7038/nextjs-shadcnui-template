import type { Meta, StoryObj } from '@storybook/react';
import { toast, Toaster } from 'sonner';
import { Button } from '@/components/ui/button';

const meta: Meta = {
  title: 'UI/Sonner',
  component: Toaster,
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    )
  ]
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo')
          }
        })
      }
    >
      Show Toast
    </Button>
  )
};
