import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import cat from "../../../public/cat.jpg";
import CustomImage from ".";

export default {
  title: "Main/CustomImage",
  component: CustomImage,
  decorators: [
    (Story) => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    )
  ],
} as ComponentMeta<typeof CustomImage>;

const Template: ComponentStory<typeof CustomImage> = ({ alt, src }) => <CustomImage src={src} alt={alt} />;

export const Default = Template.bind({});

Default.args = {
  alt: "cat",
  src: cat,
};
