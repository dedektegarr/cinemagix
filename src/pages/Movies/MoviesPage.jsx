import { useEffect, useState } from "react";
import "../../utils/fetch-data";
import { fetchData } from "../../utils/fetch-data";
import MovieItem from "../../components/Movies/MovieItem/MovieItem";
import Tabs from "../../components/UI/Tabs/Tabs";
import Section from "../../components/utils/Section";
import Pagination from "../../components/utils/Pagination";
import fetchPopularMovies from "../../api/popular-movies";
import { defer, useLoaderData } from "react-router-dom";
import MovieList from "../../components/Movies/MovieList/MovieList";

let firstPage = true;

const MoviesPage = () => {
  const [nextMovies, setNextMovies] = useState(null);
  const [type, setType] = useState({ id: "popular", label: "Popular" });
  const [page, setPage] = useState(1);

  const { movies } = useLoaderData();

  const tabs = [
    { id: "popular", label: "Popular" },
    { id: "upcoming", label: "Upcoming" },
    { id: "top_rated", label: "Top Rated" },
    { id: "now_playing", label: "Now Playing" },
  ];

  const fetchNextMovies = async () => {
    const nextMovies = await fetchData({
      resource: `movie/${type.id}?page=${page}`,
    });
    setNextMovies(nextMovies);
  };

  useEffect(() => {
    // if (!firstPage) {
    fetchNextMovies();
    // }
  }, [type, page]);

  return (
    <div className="container grid grid-cols-5 gap-4 lg:gap-8">
      <div className="col-span-5 lg:col-span-1 pt-6">
        <Tabs
          items={tabs}
          activeItem={{ id: type.id }}
          onSelect={(item) => setType({ id: item.id, label: item.label })}
        />
      </div>
      <div className="col-span-5 lg:col-span-4">
        <Section>
          <Section.Header title={type.label} />
          <MovieList
            movies={!nextMovies ? movies.results : nextMovies.results}
            className="grid gap-4"
            itemClassName="w-full h-auto"
          />
        </Section>

        <div className="flex justify-center items-center py-8">
          <Pagination
            activePage={page}
            totalPage={movies?.total_pages}
            onChangePage={(page) => setPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export const loader = async () => {
  const movies = await fetchPopularMovies("movie");
  return defer({
    movies,
  });
};

export default MoviesPage;
