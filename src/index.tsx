import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./globalStyle";
import { StoreProvider } from "./context/RootContext";
import RootStore from "./store/RootStore";

const rootNode = document.getElementById("root");
if (!rootNode) throw new Error("rootNode is not defined");

ReactDOM.createRoot(rootNode).render(
  <StoreProvider value={RootStore}>
    <GlobalStyle />
    <App />
  </StoreProvider>
);
