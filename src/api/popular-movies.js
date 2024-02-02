import { fetchData } from "../utils/fetch-data";

export const fetchPopularMovies = async (filter) => {
  const resources = {
    resource: `${filter}/popular`,
  };

  const data = await fetchData(resources);
  return data;
};

export default fetchPopularMovies;
