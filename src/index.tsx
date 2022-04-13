import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/globalStyle";
import { StoreProvider } from "./context/RootContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
// import {} from "styled-components/cssprop";

import RootStore from "./store/RootStore";

const rootNode = document.getElementById("root");
if (!rootNode) throw new Error("rootNode is not defined");

ReactDOM.createRoot(rootNode).render(
  <ThemeProvider theme={theme}>
    <StoreProvider value={RootStore}>
      <GlobalStyle />
      <App />
    </StoreProvider>
  </ThemeProvider>
);
