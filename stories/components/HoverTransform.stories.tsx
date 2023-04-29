import type { Meta, StoryObj } from "@storybook/react";

import HoverTransform from "../../lib/components/HoverTransform";

const meta: Meta<typeof HoverTransform> = {
  title: "Components/HoverTransform",
  component: HoverTransform,
  argTypes: {
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof HoverTransform>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const LongText: Story = {
  args: {
    children: "This is a longer example text",
  },
};
