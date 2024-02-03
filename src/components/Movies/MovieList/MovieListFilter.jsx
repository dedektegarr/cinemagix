import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { movieActions } from "../../../store/movie-slice";

const MovieListFilter = ({ filters, section }) => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.movie.filters[section]);

  const handleChangeFilter = (e) => {
    e.preventDefault();
    const selectedFilter = e.currentTarget.id.toLowerCase();

    dispatch(movieActions.filterChange({ section, selectedFilter }));
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      {filters.map((filter, i) => {
        let active = false;
        if (filter.value.toLowerCase() === activeFilter.toLowerCase()) {
          active = true;
        }

        return (
          <Link
            onClick={handleChangeFilter}
            key={i}
            id={filter.value}
            className={`py-2 px-4 hover:bg-color-primary ${
              active ? "bg-color-primary" : ""
            } rounded-full`}
          >
            {filter.label}
          </Link>
        );
      })}
    </div>
  );
};

export default MovieListFilter;
