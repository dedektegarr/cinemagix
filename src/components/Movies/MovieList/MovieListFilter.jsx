import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { movieActions } from "../../../store/movie-slice";

const MovieListFilter = ({ filters }) => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.movie.filter.trending);

  const handleChangeFilter = (e) => {
    e.preventDefault();
    const selectedFilter = e.currentTarget.innerText.toLowerCase();

    dispatch(movieActions.filterChange(selectedFilter));
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      {filters.map((filter, i) => {
        let active = false;
        if (filter === activeFilter) {
          active = true;
        }

        return (
          <Link
            onClick={handleChangeFilter}
            key={i}
            className={`py-2 px-4 hover:bg-color-primary ${
              active ? "bg-color-primary" : ""
            } rounded-full`}
          >
            {filter}
          </Link>
        );
      })}
    </div>
  );
};

export default MovieListFilter;
