import { defer, useLoaderData } from "react-router-dom";
import fetchSearchData from "../../api/search";
import SearchList from "../../components/Search/SearchList";

const Movie = () => {
  const { searchData } = useLoaderData();

  return searchData.length ? (
    <SearchList results={searchData} />
  ) : (
    <p className="bg-color-dark-1 text-color-dark-3 text-center rounded-md p-4">
      Not Found
    </p>
  );
};

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("query");

  const searchData = await fetchSearchData(searchTerm);
  const filteredData = searchData.results.filter(
    (result) => result.media_type === "movie"
  );

  return defer({
    searchData: filteredData,
  });
};

export default Movie;
