import { defer, useLoaderData } from "react-router-dom";
import { fetchTrendingMovies } from "../../api/trending-movies";
import MovieList from "../../components/Movies/MovieList/MovieList";

const HomePage = () => {
  const { trendingMovies } = useLoaderData();

  return (
    <>
      <MovieList
        movies={trendingMovies.results}
        title="Trending"
        filters={["day", "week"]}
      />
    </>
  );
};

export const loader = async ({ filter }) => {
  const trendingMovies = await fetchTrendingMovies(filter);
  return defer({
    trendingMovies,
  });
};

export default HomePage;
