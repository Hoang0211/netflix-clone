import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FirebaseContextProvider } from "./store/firebase-context";

import "./index.scss";
import App from "./App";

ReactDOM.render(
  <FirebaseContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContextProvider>,
  document.getElementById("root")
);
