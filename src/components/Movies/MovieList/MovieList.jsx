import { Link } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movies, title, filter }) => {
  return (
    <section>
      <div className="flex items-center gap-6 py-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex items-center gap-4">
          <Link>Today</Link>
          <Link>This week</Link>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies?.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
