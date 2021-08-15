import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import MainButton from ".";

export default {
  title: "Main/MainButton",
  component: MainButton,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof MainButton>;

const Template: ComponentStory<typeof MainButton> = (args) => <MainButton { ...args } />;

export const Default = Template.bind({});

Default.args = {
  name: "happy :)",
};
