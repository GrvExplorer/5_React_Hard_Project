import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import "./globals.css";
import { QueryProvider } from "./lib/react-query/QueryProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </QueryProvider>
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>,
);
