import { ThemeProvider } from "styled-components";

import GlobalStyle from "styles/GlobalStyle";
import { theme } from "styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <div id="app">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story {...context} />
        </ThemeProvider>
      </div>
    );
  },
];
