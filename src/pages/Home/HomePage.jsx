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
        filters={[
          { label: "Today", value: "day" },
          { label: "This Week", value: "week" },
        ]}
        section="trending"
      />
      <MovieList
        movies={popularMovies.results}
        title="Popular Now"
        filters={[
          { label: "Streaming", value: "movie" },
          { label: "On Tv", value: "tv" },
        ]}
        section="popular"
      />
    </div>
  );
};

export const loader = async ({ filters }) => {
  const trendingMovies = await fetchTrendingMovies(filters.trending);
  const popularMovies = await fetchPopularMovies(filters.popular);
  return defer({
    trendingMovies,
    popularMovies,
  });
};

export default HomePage;
