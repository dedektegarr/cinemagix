import { useEffect, useState } from "react";
import "../../utils/fetch-data";
import { fetchData } from "../../utils/fetch-data";
import MovieItem from "../../components/Movies/MovieItem/MovieItem";
import Tabs from "../../components/UI/Tabs/Tabs";
import Section from "../../components/utils/Section";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState({ id: "popular", label: "Popular" });

  const tabs = [
    { id: "popular", label: "Popular" },
    { id: "upcoming", label: "Upcoming" },
    { id: "top_rated", label: "Top Rated" },
    { id: "now_playing", label: "Now Playing" },
  ];

  const fetchMovies = async () => {
    const data = await fetchData({ resource: `movie/${type.id}` });
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [type]);

  return (
    <div className="container grid grid-cols-5 gap-4">
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
          <ul className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {movies.map((movie) => (
              <MovieItem movie={movie} key={movie.id} />
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default MoviesPage;
