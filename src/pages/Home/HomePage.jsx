import { defer, useLoaderData } from "react-router-dom";
import { fetchTrendingMovies } from "../../api/trending-movies";
import MovieList from "../../components/Movies/MovieList/MovieList";

const HomePage = () => {
  const { trendingMovies } = useLoaderData();

  return (
    <div className="flex flex-col gap-6 lg:gap-14">
      <MovieList
        movies={trendingMovies.results}
        title="Trending"
        filters={["day", "week"]}
      />
      <MovieList
        movies={trendingMovies.results}
        title="Popular"
        filters={["day", "week"]}
      />
    </div>
  );
};

export const loader = async ({ filter }) => {
  const trendingMovies = await fetchTrendingMovies(filter);
  return defer({
    trendingMovies,
  });
};

export default HomePage;
