import { useNavigate } from "react-router-dom";
import Modal from "../../components/UI/Modal/Modal";
import { useSelector } from "react-redux";
import SearchList from "../../components/Search/SearchList";

const FarvoritePage = () => {
  const favorites = useSelector((state) => state.movie.favorites);
  const navigate = useNavigate();

  return (
    <Modal onClose={() => navigate(-1)} title="My Favorite">
      {favorites.length ? (
        <SearchList results={favorites} />
      ) : (
        <p className="bg-color-dark-1 text-color-dark-3 text-center rounded-md p-4">
          No reviews yet
        </p>
      )}
    </Modal>
  );
};

export default FarvoritePage;
