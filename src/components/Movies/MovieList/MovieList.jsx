import MovieItem from "../MovieItem/MovieItem";
import MovieListFilter from "./MovieListFilter";
import { motion } from "framer-motion";

const MovieList = ({ movies, title, filters, section }) => {
  return (
    <section>
      <div className="flex items-center gap-6 py-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        {filters && <MovieListFilter filters={filters} section={section} />}
      </div>
      <motion.ul
        variants={{
          hidden: { y: 10, opacity: 0.5 },
          visible: { y: 0, opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex max-w-full min-h-[350px] md:min-h-[430px] overflow-x-auto gap-4 overflow-y-hidden pb-6"
      >
        {movies?.map((movie) => (
          <motion.li
            variants={{
              hidden: { y: 10, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            key={movie.id}
          >
            <MovieItem width={300} movie={movie} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default MovieList;
