import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage, {
  loader as trendingMoviesLoader,
} from "./pages/Home/HomePage";
import MoviesPage from "./pages/Movies/MoviesPage";
import TvShowsPage from "./pages/TvShows/TvShowsPage";
import { useSelector } from "react-redux";

const App = () => {
  const filter = useSelector((state) => state.movie.filter.trending);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: () => trendingMoviesLoader({ filter }),
        },
        { path: "movies", element: <MoviesPage /> },
        { path: "tv", element: <TvShowsPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
