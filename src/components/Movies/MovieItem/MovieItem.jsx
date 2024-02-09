import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/format-date";
import Card from "../../utils/Card";

const MovieItem = ({ movie, className }) => {
  let ratingColor;
  if (movie.vote_average < 5) {
    ratingColor = "border-red-700";
  } else if (movie.vote_average < 7) {
    ratingColor = "border-yellow-700";
  } else {
    ratingColor = "border-green-700";
  }

  return (
    <Link to={`/movies/${movie.id}`}>
      <Card className={`group relative ${className}`}>
        <Card.Image
          src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
          alt="Movie Poster"
        />

        <Card.Text
          title={movie.title || movie.name}
          subTitle={formatDate(movie.release_date || movie.first_air_date)}
        />

        <div
          className={`bg-black/80 rounded-full p-2 text-xs border-2 ${ratingColor} absolute top-2 left-2 z-10`}
        >
          {movie.vote_average.toFixed(1)}
        </div>
      </Card>
    </Link>
  );
};

export default MovieItem;
