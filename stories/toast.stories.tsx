import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '@/components/ui/toast';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const meta: Meta = {
  title: 'UI/Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    )
  ]
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: 'Your message has been sent.'
          });
        }}
      >
        Show Toast
      </Button>
    );
  }
};
