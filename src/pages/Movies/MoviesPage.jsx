import { useEffect, useState } from "react";
import "../../utils/fetch-data";
import { fetchData } from "../../utils/fetch-data";
import MovieItem from "../../components/Movies/MovieItem/MovieItem";
import Tabs from "../../components/UI/Tabs/Tabs";
import Section from "../../components/utils/Section";
import Pagination from "../../components/utils/Pagination";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [type, setType] = useState({ id: "popular", label: "Popular" });
  const [page, setPage] = useState(1);

  const tabs = [
    { id: "popular", label: "Popular" },
    { id: "upcoming", label: "Upcoming" },
    { id: "top_rated", label: "Top Rated" },
    { id: "now_playing", label: "Now Playing" },
  ];

  const fetchMovies = async () => {
    const data = await fetchData({ resource: `movie/${type.id}?page=${page}` });
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
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
          <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {movies?.results.map((movie) => (
              <MovieItem movie={movie} key={movie.id} className="w-full" />
            ))}
          </ul>
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

export default MoviesPage;
