import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import {
  DEFAULT_UNIT,
  STYLE_EDITOR_BLOCK_STYLES,
  STYLE_EDITOR_BOARD_SIZE,
  STYLE_SECTION_BACKGROUND_COLOR,
} from "../../constants/ui";
import StyleEditorCard from ".";
export default {
  title: "Main/StyleEditorCard",
  component: StyleEditorCard,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as ComponentMeta<typeof StyleEditorCard>;

const Template: ComponentStory<typeof StyleEditorCard> = (args) => <StyleEditorCard { ...args } />;

export const Default = Template.bind({});

Default.args = {
  editorStyles: STYLE_EDITOR_BLOCK_STYLES,
  unit: DEFAULT_UNIT,
  editorBoardSize: STYLE_EDITOR_BOARD_SIZE,
  backgroundColor: STYLE_SECTION_BACKGROUND_COLOR,
};
