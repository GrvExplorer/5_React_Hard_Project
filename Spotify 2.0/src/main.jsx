import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./assets/index.css";
import { StateProvider } from "./Context/StateProvider.jsx";

import { initialState } from "./reducer/initialState.js";
import reducer from "./reducer/reducer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
