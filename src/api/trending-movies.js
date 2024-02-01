import { fetchData } from "../utils/fetch-data";

export const fetchTrendingMovies = async (time) => {
  const resources = {
    resource: `trending/movie/${time}`,
  };

  const data = await fetchData(resources);
  return data;
};
