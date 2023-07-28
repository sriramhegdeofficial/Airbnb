// Button.stories.ts|tsx
// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import RegisterModal from "./RegisterModal";

const meta: Meta<typeof RegisterModal> = {
  component: RegisterModal,
};

export default meta;
type Story = StoryObj<typeof RegisterModal>;

export const Primary: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
