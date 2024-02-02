import { defer, useLoaderData } from "react-router-dom";
import { fetchTrendingMovies } from "../../api/trending-movies";
import MovieList from "../../components/Movies/MovieList/MovieList";
import fetchPopularMovies from "../../api/popular-movies";

const HomePage = () => {
  const { trendingMovies, popularMovies } = useLoaderData();

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <MovieList
        movies={trendingMovies.results}
        title="Trending"
        filters={["day", "week"]}
      />
      <MovieList movies={popularMovies.results} title="Popular Now" />
    </div>
  );
};

export const loader = async ({ filter }) => {
  const trendingMovies = await fetchTrendingMovies(filter);
  const popularMovies = await fetchPopularMovies();
  return defer({
    trendingMovies,
    popularMovies,
  });
};

export default HomePage;
