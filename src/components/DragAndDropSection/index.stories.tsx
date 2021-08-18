import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import DragAndDropCard from ".";

export default {
  title: "Main/DragAndDropCard",
  component: DragAndDropCard,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof DragAndDropCard>;

const Template: ComponentStory<typeof DragAndDropCard> = (args) => <DragAndDropCard { ...args } />;

export const Default = Template.bind({});
