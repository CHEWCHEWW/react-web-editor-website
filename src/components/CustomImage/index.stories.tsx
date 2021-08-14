import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import CustomImage from ".";

export default {
  title: "Main/CustomImage",
  component: CustomImage,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof CustomImage>;

const Template: ComponentStory<typeof CustomImage> = ({ alt, src }) => <CustomImage src={src} alt={alt} />;

export const Default = Template.bind({});

Default.args = {
};
