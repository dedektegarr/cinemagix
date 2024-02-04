import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/format-date";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieItem = ({ movie }) => {
  let ratingColor;
  if (movie.vote_average < 5) {
    ratingColor = "border-red-700";
  } else if (movie.vote_average < 7) {
    ratingColor = "border-yellow-700";
  } else {
    ratingColor = "border-green-700";
  }

  return (
    <Link to="">
      <article className={`relative w-[150px] lg:w-[200px]`}>
        <div
          className={`bg-black/80 rounded-full p-2 text-xs border-2 ${ratingColor} absolute top-2 left-2 z-10`}
        >
          {movie.vote_average.toFixed(1)}
        </div>
        <div>
          <div className="relative group overflow-hidden rounded-md">
            <div
              className="opacity-0 group-hover:opacity-100 z-20 p-4 flex items-end transition ease-in-out duration-300 absolute 
            bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to to-black/30"
            >
              <p className="text-sm leading-relaxed line-clamp-4">
                {movie.overview}
              </p>
            </div>
            <img
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
              alt="Movie poster"
              className="w-full object-cover shadow-lg"
              effect="blur"
            />
          </div>

          <div className="p-1 mt-2">
            <h3 className="font-bold">{movie.title || movie.name}</h3>
            <p className="mt-1 text-sm text-color-dark-3">
              {formatDate(movie.release_date || movie.first_air_date)}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieItem;
