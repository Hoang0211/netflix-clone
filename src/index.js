import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { FirebaseContextProvider } from "./store/firebase-context";

import "./index.scss";
import App from "./App";

ReactDOM.render(
  <FirebaseContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </FirebaseContextProvider>,
  document.getElementById("root")
);
