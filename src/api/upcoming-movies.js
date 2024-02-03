import { fetchData } from "../utils/fetch-data";

export const fetchUpcomingMovies = async () => {
  const resources = {
    resource: `movie/upcoming`,
  };

  const data = await fetchData(resources);
  return data;
};

export default fetchUpcomingMovies;
