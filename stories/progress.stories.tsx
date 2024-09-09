import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Progress } from '@/components/ui/progress';

const meta: Meta = {
  title: 'UI/Progress',
  component: Progress
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} className="w-[60%]" />;
  }
};
