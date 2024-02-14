import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/movie-slice";

const useAddToFavorite = (movie) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movie.favorites);

  const isFavorite = favorites.some(
    (favoriteMovie) => favoriteMovie.id === movie.id
  );

  const handleAddToFavorite = (e) => {
    e.stopPropagation();
    dispatch(movieActions.addFavorite(movie));
  };

  return { handleAddToFavorite, isFavorite };
};

export default useAddToFavorite;
