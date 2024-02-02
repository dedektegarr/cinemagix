import { defer, useLoaderData } from "react-router-dom";
import { fetchTrendingMovies } from "../../api/trending-movies";
import MovieList from "../../components/Movies/MovieList/MovieList";

const HomePage = () => {
  const { trendingMovies } = useLoaderData();

  return (
    <>
      <MovieList movies={trendingMovies.results} title="Trending" />
    </>
  );
};

export const loader = async () => {
  const trendingMovies = await fetchTrendingMovies("day");
  return defer({
    trendingMovies,
  });
};

export default HomePage;
