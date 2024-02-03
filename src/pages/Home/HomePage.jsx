import { defer, useLoaderData } from "react-router-dom";
import { fetchTrendingMovies } from "../../api/trending-movies";
import MovieList from "../../components/Movies/MovieList/MovieList";
import fetchPopularMovies from "../../api/popular-movies";
import BannerCarousel from "../../components/Movies/BannerCarousel/BannerCarousel";
import fetchNowPlayingMovies from "../../api/now-playing-movies";

const HomePage = () => {
  const { trendingMovies, popularMovies, nowPlayingMovies } = useLoaderData();

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <BannerCarousel
        title="Now Playing"
        dates={nowPlayingMovies.dates}
        items={nowPlayingMovies.results}
      />
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
        title="Popular"
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
  const nowPlayingMovies = await fetchNowPlayingMovies(filters.popular);
  return defer({
    trendingMovies,
    popularMovies,
    nowPlayingMovies,
  });
};

export default HomePage;
