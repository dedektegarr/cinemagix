import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage, {
  loader as homePageMoviesLoader,
} from "./pages/Home/HomePage";
import MoviesPage from "./pages/Movies/MoviesPage";
import TvShowsPage from "./pages/TvShows/TvShowsPage";
import { useSelector } from "react-redux";
import DetailsPage, {
  loader as movieDetailsLoader,
} from "./pages/Movies/DetailsPage";
import Video from "./components/Movies/Video/Video";

const App = () => {
  const filters = useSelector((state) => state.movie.filters);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: () => homePageMoviesLoader({ filters }),
        },
        {
          path: "movies",
          element: <MoviesPage />,
        },
        {
          path: "movies/:movie_id",
          element: <DetailsPage />,
          children: [{ path: "video/:key", element: <Video /> }],
          loader: movieDetailsLoader,
        },
        { path: "tv", element: <TvShowsPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
