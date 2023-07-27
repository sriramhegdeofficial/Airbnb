// Button.stories.ts|tsx
// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Search from "./Search";

const meta: Meta<typeof Search> = {
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Primary: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
