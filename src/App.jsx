import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage, {
  loader as homePageMoviesLoader,
} from "./pages/Home/HomePage";
import MoviesPage, {
  loader as moviesPageLoader,
} from "./pages/Movies/MoviesPage";
import { useDispatch, useSelector } from "react-redux";
import DetailsPage, {
  loader as movieDetailsLoader,
} from "./pages/Movies/DetailsPage";
import Video from "./components/Movies/Video/Video";
import Reviews, {
  loader as movieReviewsLoader,
} from "./components/Movies/Reviews/Reviews";
import PeoplePage, { loader as peopleLoader } from "./pages/People/PeoplePage";
import PeopleDetailsPage, {
  loader as peopleDetailsLoader,
} from "./pages/People/PeopleDetailsPage";
import RootSearchPage from "./pages/Search/RootSearchPage";
import All, { loader as searchAllLoader } from "./pages/Search/All";
import Movie, { loader as searchMovieLoader } from "./pages/Search/Movie";
import People, { loader as searchPeopleLoader } from "./pages/Search/People";
import { useEffect } from "react";
import { movieActions } from "./store/movie-slice";
import FarvoritePage from "./pages/Favorite/FarvoritePage";

const App = () => {
  const filters = useSelector((state) => state.movie.filters);
  const dispatch = useDispatch();

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
          loader: moviesPageLoader,
        },
        {
          path: "movie/:movie_id",
          element: <DetailsPage />,
          children: [
            { path: "video/:key", element: <Video /> },
            {
              path: "reviews",
              element: <Reviews />,
              loader: movieReviewsLoader,
            },
          ],
          loader: movieDetailsLoader,
        },
        { path: "person", element: <PeoplePage />, loader: peopleLoader },
        {
          path: "person/:people_id",
          element: <PeopleDetailsPage />,
          loader: peopleDetailsLoader,
        },
        {
          path: "search",
          element: <RootSearchPage />,
          children: [
            { index: true, element: <All />, loader: searchAllLoader },
            { path: "all", element: <All />, loader: searchAllLoader },
            { path: "movie", element: <Movie />, loader: searchMovieLoader },
            { path: "people", element: <People />, loader: searchPeopleLoader },
          ],
        },
        {
          path: "favorites",
          element: <FarvoritePage />,
        },
      ],
    },
  ]);

  useEffect(() => {
    dispatch(movieActions.setFavorite());
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
