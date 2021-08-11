import { ComponentMeta, ComponentStory } from "@storybook/react";
import Image from "next/image";
import React from "react";

import react from "../../../public/react.png";
import MiniCard from ".";

export default {
  title: "Main/MiniCard",
  component: MiniCard,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof MiniCard>;

const Template: ComponentStory<typeof MiniCard> = (args) => <MiniCard { ...args } />;

export const Default = Template.bind({});

Default.args = {
  title: "Are You Happy",
  description: "Define Someting",
  color: "pink",
  children: <Image src={react} alt="react" unoptimized />,
};
