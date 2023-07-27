// Button.stories.ts|tsx
// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import UserMenu from "./UserMenu";

const meta: Meta<typeof UserMenu> = {
  component: UserMenu,
};

export default meta;
type Story = StoryObj<typeof UserMenu>;

export const Primary: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
