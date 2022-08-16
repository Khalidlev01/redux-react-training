import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "change") {
    return "hello word";
  }

  if (action.type === "delete") {
    return "";
  }

  return "Hello";
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
