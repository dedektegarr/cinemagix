import { fetchData } from "../utils/fetch-data";

export const fetchPeople = async (page) => {
  const resources = {
    resource: `person/popular?page=${page}`,
  };

  const data = await fetchData(resources);
  return data;
};
