import { Link } from "react-router-dom";
import { formatDate } from "../../utils/format-date";
import Card from "../utils/Card";

const SearchItem = ({ item }) => {
  return (
    <Link
      to={`/${item.media_type === "movie" ? "movies" : "people"}/${item.id}`}
    >
      <Card className="flex gap-4 bg-color-dark-1 shadow-lg">
        <div className="min-w-[100px]">
          <Card.Image
            src={`https://media.themoviedb.org/t/p/w94_and_h141_bestv2${
              item.poster_path || item.profile_path
            }`}
            alt="Result"
          />
        </div>
        <div className="py-4 pr-4 flex-1">
          <h2 className="font-medium">{item.title || item.name}</h2>
          <p className="text-color-dark-3 text-sm">
            {formatDate(item.release_date)}
          </p>
          <p className="line-clamp-2 mt-4">{item.overview}</p>
        </div>
      </Card>
    </Link>
  );
};

export default SearchItem;
