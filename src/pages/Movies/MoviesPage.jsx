import { useEffect, useState } from "react";
import "../../utils/fetch-data";
import { fetchData } from "../../utils/fetch-data";
import MovieItem from "../../components/Movies/MovieItem/MovieItem";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("popular");

  const fetchMovies = async () => {
    const data = await fetchData({ resource: `movie/${type}` });
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [type]);

  return (
    <div className="container grid grid-cols-5">
      <div className="col-span-5 lg:col-span-1">filter</div>
      <div className="col-span-5 lg:col-span-4">
        <ul className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviesPage;
