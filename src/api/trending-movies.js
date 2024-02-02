import { fetchData } from "../utils/fetch-data";

export const fetchTrendingMovies = async (filter) => {
  const resources = {
    resource: `trending/movie/${filter}`,
  };

  const data = await fetchData(resources);
  return data;
};
