import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Wrapper } from "./context/StateContextProvider.jsx";
import { initialState, reducer } from "./context/reducerFun.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Wrapper initialState={initialState} reducer={reducer}> */}
        <App />
    {/* </Wrapper> */}
    </BrowserRouter>
  </React.StrictMode>,
);
