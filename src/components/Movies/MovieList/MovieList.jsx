import MovieItem from "../MovieItem/MovieItem";
import MovieListFilter from "./MovieListFilter";
import { motion } from "framer-motion";

const MovieList = ({ movies, title, filters }) => {
  return (
    <section>
      <div className="flex items-center gap-6 py-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <MovieListFilter filters={filters} />
      </div>
      <motion.ul
        variants={{
          hidden: { y: 10, opacity: 0.5 },
          visible: { y: 0, opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
        initial="hidden"
        animate="visible"
        className="flex max-w-full overflow-x-auto gap-4 overflow-y-hidden pb-10"
      >
        {movies?.map((movie) => (
          <motion.li
            variants={{
              hidden: { y: 10, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            key={movie.id}
          >
            <MovieItem movie={movie} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default MovieList;
