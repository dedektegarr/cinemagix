import MovieItem from "../MovieItem/MovieItem";
import { motion } from "framer-motion";

const MovieList = ({ movies }) => {
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
      className="flex gap-4"
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
  );
};

export default MovieList;
