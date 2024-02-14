import { Link } from "react-router-dom";
import { formatDate } from "../../utils/format-date";
import Card from "../utils/Card";
import Button from "../UI/Button/Button";
import useAddToFavorite from "../../hooks/useAddToFavorite";

const SearchItem = ({ item }) => {
  const { handleAddToFavorite, isFavorite } = useAddToFavorite(item);

  return (
    <Card className="flex justify-between bg-color-dark-1 text-color-light shadow-lg">
      <Link
        className="flex gap-4"
        to={`/${item.media_type ?? "movies"}/${item.id}`}
      >
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
      </Link>
      <div className="p-1">
        <Button
          onClick={handleAddToFavorite}
          icon={
            isFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="red"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="white"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              </svg>
            )
          }
        />
      </div>
    </Card>
  );
};

export default SearchItem;
