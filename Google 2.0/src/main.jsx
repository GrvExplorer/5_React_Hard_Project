import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StateContextProvider } from "./context/StateContextProvider.jsx";
import { initialState, reducer } from "./context/reducerFun.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContextProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </StateContextProvider>
  </React.StrictMode>,
);
