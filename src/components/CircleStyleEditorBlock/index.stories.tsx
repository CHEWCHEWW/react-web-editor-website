import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import CircleStyleEditorBlock from ".";

export default {
  title: "Main/CircleStyleEditorBlock",
  component: CircleStyleEditorBlock,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof CircleStyleEditorBlock>;

const Template: ComponentStory<typeof CircleStyleEditorBlock> = (args) => <CircleStyleEditorBlock { ...args } />;

export const Default = Template.bind({});

Default.args = {
  width: 9,
  height: 9,
  left: 2,
  top: 1,
  color: "#F2BFB5",
  parentStyle: { width: 30, height: 20 },
  unit: "rem",
};
