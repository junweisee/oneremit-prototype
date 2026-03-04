import { createBrowserRouter, Navigate } from "react-router";
import { AppProvider } from "./AppContext";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { UsageGuidePage } from "./pages/UsageGuidePage";
import { FeesLimitsPage } from "./pages/FeesLimitsPage";
import { HelpPage } from "./pages/HelpPage";

function Root() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "how-to-use/usage-guide", Component: UsageGuidePage },
      { path: "how-to-use/fees-and-limits", Component: FeesLimitsPage },
      {
        path: "how-to-use",
        element: <Navigate to="/how-to-use/usage-guide" replace />,
      },
      { path: "help", Component: HelpPage },
    ],
  },
]);
