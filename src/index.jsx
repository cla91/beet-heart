import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import { LastQueryProvider } from "./context/LastQueryContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LastQueryProvider>
      <QueryClientProvider client={client}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </QueryClientProvider>
    </LastQueryProvider>
  </StrictMode>
);
