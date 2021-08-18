import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import VarietyTextSection from ".";

export default {
  title: "Main/VarietyTextSection",
  component: VarietyTextSection,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof VarietyTextSection>;

const Template: ComponentStory<typeof VarietyTextSection> = (args) => <VarietyTextSection { ...args } />;

export const Default = Template.bind({});
