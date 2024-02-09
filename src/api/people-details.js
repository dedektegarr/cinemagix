import { fetchData } from "../utils/fetch-data";

export const fetchPeopleDetails = async ({ personId }) => {
  const resources = {
    resource: `person/${personId}`,
  };

  const data = await fetchData(resources);
  return data;
};

export default fetchPeopleDetails;
