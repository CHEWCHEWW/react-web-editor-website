import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import TextEditableBoard from ".";

export default {
  title: "Main/TextEditableBoard",
  component: TextEditableBoard,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof TextEditableBoard>;

const Template: ComponentStory<typeof TextEditableBoard> = (args) => <TextEditableBoard { ...args } />;

export const Default = Template.bind({});
