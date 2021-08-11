import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import MiniCard from ".";

export default {
  title: "Main/Header",
  component: MiniCard,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof MiniCard>;

const Template: ComponentStory<typeof MiniCard> = (args) => <MiniCard { ...args } />;

export const Default = Template.bind({});
