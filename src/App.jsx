import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home/HomePage";
import MoviesPage from "./pages/Movies/MoviesPage";
import TvShowsPage from "./pages/TvShows/TvShowsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <MoviesPage /> },
      { path: "tv", element: <TvShowsPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
