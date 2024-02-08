import { defer, useLoaderData, useNavigate } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";
import fetchMovieDetails from "../../../api/movie-details";
import MovieReview from "../MovieReview/MovieReview";

const Reviews = () => {
  const navigate = useNavigate();
  const { reviews } = useLoaderData();

  return (
    <Modal title="Reviews" onClose={() => navigate("..")}>
      <div className="flex flex-col gap-3">
        {reviews.total_results ? (
          reviews.results.map((review) => (
            <MovieReview key={review.id} withReadMore={false} review={review} />
          ))
        ) : (
          <p className="text-color-dark-3 text-sm bg-color-dark-1 text-center p-4 rounded-md">
            No reviews yet
          </p>
        )}
      </div>
    </Modal>
  );
};

export const loader = async ({ params }) => {
  const reviews = await fetchMovieDetails({
    movieId: `${params.movie_id}/reviews`,
  });

  return defer({
    reviews,
  });
};

export default Reviews;
