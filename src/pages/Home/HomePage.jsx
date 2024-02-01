import { defer, useLoaderData } from "react-router-dom";
import { fetchTrendingMovies } from "../../api/trending-movies";
import MovieList from "../../components/Movies/MovieList/MovieList";
import { useState } from "react";

const HomePage = () => {
  const [filter, setFilter] = useState({
    trending: "day",
  });
  const { trendingMovies } = useLoaderData();

  return (
    <>
      <MovieList
        movies={trendingMovies.results}
        title="Trending"
        filter={filter.trending}
      />
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
