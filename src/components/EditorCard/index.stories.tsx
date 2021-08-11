import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import EditorCard from ".";

export default {
  title: "Main/EditorCard",
  component: EditorCard,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof EditorCard>;

const Template: ComponentStory<typeof EditorCard> = (args) => <EditorCard { ...args } />;

export const Default = Template.bind({});

Default.args = {
  width: 300,
  height: 300,
  backgroundColor: "pink",
  unit: "px",
};
