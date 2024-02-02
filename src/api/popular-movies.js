import { fetchData } from "../utils/fetch-data";

export const fetchPopularMovies = async () => {
  const resources = {
    resource: `movie/popular`,
  };

  const data = await fetchData(resources);
  return data;
};

export default fetchPopularMovies;
