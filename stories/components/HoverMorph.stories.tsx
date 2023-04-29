import type { Meta, StoryObj } from "@storybook/react";

import HoverMorph from "../../lib/components/HoverMorph";

const meta: Meta<typeof HoverMorph> = {
  title: "Components/HoverMorph",
  component: HoverMorph,
  argTypes: {
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof HoverMorph>;

export const Default: Story = {
  args: {
    children: "Default",
    result: "기본",
  },
};

export const LongText: Story = {
  args: {
    children: "This is a longer example text",
    result: "긴 텍스트",
  },
};
