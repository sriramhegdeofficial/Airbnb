// Button.stories.ts|tsx
// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
