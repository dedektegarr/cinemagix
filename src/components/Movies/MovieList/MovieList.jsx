import MovieItem from "../MovieItem/MovieItem";
import MovieListFilter from "./MovieListFilter";

const MovieList = ({ movies, title, filters }) => {
  return (
    <section>
      <div className="flex items-center gap-6 py-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <MovieListFilter filters={filters} />
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
