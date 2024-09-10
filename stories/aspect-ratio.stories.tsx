import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const meta: Meta = {
  title: 'UI/AspectRatio',
  component: AspectRatio
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
};
