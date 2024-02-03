import { fetchData } from "../utils/fetch-data";

export const fetchNowPlayingMovies = async () => {
  const resources = {
    resource: `movie/now_playing`,
  };

  const data = await fetchData(resources);
  return data;
};

export default fetchNowPlayingMovies;
