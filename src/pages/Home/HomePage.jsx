import { Await, defer, useLoaderData } from "react-router-dom";
import { fetchTrendingMovies } from "../../api/trending-movies";
import MovieList from "../../components/Movies/MovieList/MovieList";
import fetchPopularMovies from "../../api/popular-movies";
import BannerCarousel from "../../components/Movies/BannerCarousel/BannerCarousel";
import fetchNowPlayingMovies from "../../api/now-playing-movies";
import Hero from "../../components/Movies/Hero/Hero";
import fetchUpcomingMovies from "../../api/upcoming-movies";
import Section from "../../components/utils/Section";
import MovieListFilter from "../../components/Movies/MovieList/MovieListFilter";
import SlideHorizontal from "../../components/utils/SlideHorizontal";
import { formatDate } from "../../utils/format-date";

const HomePage = () => {
  const { trendingMovies, popularMovies, nowPlayingMovies, upcomingMovies } =
    useLoaderData();

  // filters
  const trendingMovieFilters = [
    { label: "Today", value: "day" },
    { label: "This Week", value: "week" },
  ];

  return (
    <div className="flex flex-col gap-4 lg:gap-8 -mt-20">
      <Hero data={upcomingMovies} />

      {/* Now Playing Movies */}
      <Section className="container">
        <Await
          resolve={nowPlayingMovies}
          children={(nowPlayingMovies) => (
            <>
              <Section.Header title="Now Playing">
                <p className="text-sm md:text-base text-color-primary flex gap-2 items-center ml-auto">
                  (<span>{formatDate(nowPlayingMovies.dates.minimum)}</span>
                  <span>-</span>
                  <span>{formatDate(nowPlayingMovies.dates.maximum)}</span>)
                </p>
              </Section.Header>

              <BannerCarousel
                title="Now Playing"
                dates={nowPlayingMovies.dates}
                items={nowPlayingMovies.results}
              />
            </>
          )}
        />
      </Section>

      {/* Trending Movies */}
      <Section className="container">
        <Section.Header title="Trending">
          <MovieListFilter
            filters={trendingMovieFilters}
            filterName="trending"
          />
        </Section.Header>

        <SlideHorizontal>
          <Await
            resolve={trendingMovies}
            children={(trendingMovies) => (
              <MovieList movies={trendingMovies.results} />
            )}
          />
        </SlideHorizontal>
      </Section>

      {/* Popular Movies */}
      <Section className="container">
        <Section.Header title="Popular" />

        <SlideHorizontal>
          <Await
            resolve={popularMovies}
            children={(popularMovies) => (
              <MovieList movies={popularMovies.results} />
            )}
          />
        </SlideHorizontal>
      </Section>
    </div>
  );
};

export const loader = async ({ filters }) => {
  const trendingMovies = fetchTrendingMovies(filters.trending);
  const popularMovies = fetchPopularMovies(filters.popular);
  const nowPlayingMovies = fetchNowPlayingMovies(filters.popular);
  const upcomingMovies = await fetchUpcomingMovies();

  return defer({
    trendingMovies,
    popularMovies,
    nowPlayingMovies,
    upcomingMovies,
  });
};

export default HomePage;
