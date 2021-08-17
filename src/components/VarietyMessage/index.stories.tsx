import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import VarietyMessage from ".";

export default {
  title: "Main/VarietyMessage",
  component: VarietyMessage,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof VarietyMessage>;

const Template: ComponentStory<typeof VarietyMessage> = (args) => <VarietyMessage { ...args } />;

export const Default = Template.bind({});

Default.args = {
};
