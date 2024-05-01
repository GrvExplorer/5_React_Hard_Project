import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LayoutHeader from "./components/layout";
import { resources } from "./config/resources";
import { ForgotPassword } from "./pages/_auth/forgotPassword";
import { Login } from "./pages/_auth/login";
import { Register } from "./pages/_auth/register";
import { Companies } from "./pages/companies";
import { Home } from "./pages/home";
import { authProvider } from "./providers/auth";
import { dataProvider, liveProvider } from "./providers/data";
import List from "./pages/tasks/list";

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              liveProvider={liveProvider}
              authProvider={authProvider}
              resources={resources}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "jTEGja-w3BSnw-tcl0F7",
                liveMode: "auto",
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-layout-header"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <LayoutHeader>
                        <Outlet />
                      </LayoutHeader>
                    </Authenticated>
                  }
                >
                  <Route index element={<Home />} />
                  <Route path="/companies" element={<Companies />}></Route>
                  <Route
                    path="/tasks"
                    element={
                      <List>
                        <Outlet />
                      </List>
                    }
                  >

                  </Route>
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
