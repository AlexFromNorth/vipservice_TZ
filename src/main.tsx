import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; 
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
