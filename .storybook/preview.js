import { ThemeProvider } from "styled-components";

import { theme } from "../src/theme/theme";
import GlobalStyle from "../src/theme/globalStyle";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];

import * as NextImage from "next/image";

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} style={{ width: "100%", height: "100%" }}/>,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
