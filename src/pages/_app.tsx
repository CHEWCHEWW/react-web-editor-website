import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../theme/globalStyle";
import { theme } from "../theme/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
