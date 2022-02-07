import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "react-app-polyfill/stable";

ReactDOM.render(
  <React.StrictMode>
    <Bro
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
