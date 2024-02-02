import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/format-date";

const MovieItem = ({ movie }) => {
  return (
    <Link to="">
      <article>
        <img
          src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
          alt="Movie poster"
          className="w-full h-[300px] xl:h-[350px] object-cover rounded-md shadow-lg"
        />
        <div className="p-1 mt-2">
          <h3 className="font-bold">{movie.title}</h3>
          <p className="mt-1 text-sm text-gray-400">
            {formatDate(movie.release_date)}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default MovieItem;
