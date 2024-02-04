import { fetchData } from "../utils/fetch-data";

export const fetchMovieDetails = async ({ movieId }) => {
  const resources = {
    resource: `movie/${movieId}`,
  };

  const data = await fetchData(resources);
  return data;
};

export default fetchMovieDetails;
