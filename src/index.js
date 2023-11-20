import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./store";
const element = document.getElementById("root");

const root = createRoot(element);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
