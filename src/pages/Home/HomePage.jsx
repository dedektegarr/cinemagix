import { defer, useLoaderData } from "react-router-dom";
import { fetchTrendingMovies } from "../../api/trending-movies";
import MovieList from "../../components/Movies/MovieList/MovieList";
import fetchPopularMovies from "../../api/popular-movies";
import BannerCarousel from "../../components/Movies/BannerCarousel/BannerCarousel";
import fetchNowPlayingMovies from "../../api/now-playing-movies";
import Hero from "../../components/Movies/Hero/Hero";
import fetchUpcomingMovies from "../../api/upcoming-movies";

const HomePage = () => {
  const { trendingMovies, popularMovies, nowPlayingMovies, upcomingMovies } =
    useLoaderData();

  return (
    <div className="flex flex-col gap-4 lg:gap-8 -mt-20">
      <Hero data={upcomingMovies} />
      <div className="container">
        <BannerCarousel
          title="Now Playing"
          dates={nowPlayingMovies.dates}
          items={nowPlayingMovies.results}
        />
      </div>
      <div className="container">
        <MovieList
          movies={trendingMovies.results}
          title="Trending"
          filters={[
            { label: "Today", value: "day" },
            { label: "This Week", value: "week" },
          ]}
          section="trending"
        />
      </div>
      <div className="container">
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
    </div>
  );
};

export const loader = async ({ filters }) => {
  const trendingMovies = await fetchTrendingMovies(filters.trending);
  const popularMovies = await fetchPopularMovies(filters.popular);
  const nowPlayingMovies = await fetchNowPlayingMovies(filters.popular);
  const upcomingMovies = await fetchUpcomingMovies();

  return defer({
    trendingMovies,
    popularMovies,
    nowPlayingMovies,
    upcomingMovies,
  });
};

export default HomePage;
