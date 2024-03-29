import MovieItem from "../MovieItem/MovieItem";
import { motion } from "framer-motion";

const MovieList = ({ movies, className, itemClassName }) => {
  return (
    <motion.ul
      variants={{
        hidden: { y: 10, opacity: 0.5 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { staggerChildren: 0.05 },
        },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={`${className} grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`}
    >
      {movies?.map((movie) => (
        <motion.li
          variants={{
            hidden: { y: 10, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          key={movie.id}
        >
          <MovieItem width={300} movie={movie} className={itemClassName} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MovieList;
