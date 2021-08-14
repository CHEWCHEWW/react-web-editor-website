import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Footer from ".";

export default {
  title: "Main/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer { ...args } />;

export const Default = Template.bind({});

Default.args = {
};
