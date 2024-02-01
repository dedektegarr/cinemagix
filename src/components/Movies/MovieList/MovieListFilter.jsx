import { Link } from "react-router-dom";

const MovieListFilter = () => {
  return (
    <div className="flex items-center gap-1 text-sm">
      <Link className="py-2 px-4 hover:bg-color-dark-1 bg-color-primary rounded-full">
        Today
      </Link>
      <Link className="py-2 px-4 hover:bg-color-dark-1 rounded-full">
        This week
      </Link>
    </div>
  );
};

export default MovieListFilter;
