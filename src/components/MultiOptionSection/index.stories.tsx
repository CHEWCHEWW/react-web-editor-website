import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import MultiOptionSection from ".";

export default {
  title: "Main/MultiOptionSection",
  component: MultiOptionSection,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof MultiOptionSection>;

const Template: ComponentStory<typeof MultiOptionSection> = (args) => <MultiOptionSection { ...args } />;

export const Default = Template.bind({});

Default.args = {
};
