import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import VarietySection from ".";

export default {
  title: "Main/VarietySection",
  component: VarietySection,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof VarietySection>;

const Template: ComponentStory<typeof VarietySection> = (args) => <VarietySection { ...args } />;

export const Default = Template.bind({});
