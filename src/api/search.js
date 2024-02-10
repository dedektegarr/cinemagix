import { fetchData } from "../utils/fetch-data";

export const fetchSearchData = async (query) => {
  const resources = {
    resource: `search/multi?query=${query}`,
  };

  const data = await fetchData(resources);
  return data;
};

export default fetchSearchData;
