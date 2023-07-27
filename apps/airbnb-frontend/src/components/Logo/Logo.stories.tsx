// Button.stories.ts|tsx
// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
  args: {
    src: "/images/logo.svg",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
