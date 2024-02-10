import SearchItem from "./SearchItem";

const SearchList = ({ results }) => {
  return (
    <ul className="flex flex-col gap-6">
      {results.map((result) => (
        <li key={result.id}>
          <SearchItem item={result} />
        </li>
      ))}
    </ul>
  );
};

export default SearchList;
