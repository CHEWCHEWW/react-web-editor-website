import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import MiniCardBoard from ".";

export default {
  title: "Main/MiniCardBoard",
  component: MiniCardBoard,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof MiniCardBoard>;

const Template: ComponentStory<typeof MiniCardBoard> = (args) => <MiniCardBoard { ...args } />;

export const Default = Template.bind({});
