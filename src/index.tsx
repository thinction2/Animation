import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import { HelmetProvider } from "react-helmet-async";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={mainTheme}>
      <HelmetProvider>
        <GlobalStyle />
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>
);
