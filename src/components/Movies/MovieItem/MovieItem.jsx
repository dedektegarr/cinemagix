import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/format-date";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieItem = ({ movie }) => {
  return (
    <Link to="">
      <article className="w-[150px] lg:w-[200px]">
        <LazyLoadImage
          src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
          alt="Movie poster"
          className="w-full lg:auto object-cover rounded-md shadow-lg"
          effect="blur"
        />
        <div className="p-1 mt-2">
          <h3 className="font-bold">{movie.title || movie.name}</h3>
          <p className="mt-1 text-sm text-color-dark-3">
            {formatDate(movie.release_date || movie.first_air_date)}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default MovieItem;
