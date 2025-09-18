import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import RecipePage from "./pages/RecipePage/RecipePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

export default [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/recipes",
        element: <RecipesPage />,
      },
      {
        path: "/recipe/:id",
        element: <RecipePage />,
      },
    ],
  },
];
