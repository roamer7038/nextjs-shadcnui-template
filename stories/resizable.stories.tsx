import type { Meta, StoryObj } from '@storybook/react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

const meta: Meta = {
  title: 'UI/Resizable',
  component: ResizablePanelGroup
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="max-h-screen max-w-md rounded-lg border md:min-w-[450px]">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
};
