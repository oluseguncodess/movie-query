import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { debounce } from "lodash";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  // this ensures an API call is delayed by 500ms for every query search
  useEffect(() => {
    const debouncedSearch = debounce((searchItem) => {
      if (searchItem.trim().length > 2) {
        onSearch(searchItem);
      }
    }, 500);

    debouncedSearch(query);

    //cleanup debounce on unmout
    return () => debouncedSearch.cancel();
  }, [query, onSearch]);

  return (
    <div className="w-full flex justify-center gap-5 mb-7">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="w-2/5 p-3 border rounded-lg outline-none"
        value={query}
        onChange={handleInputChange}
      />
      <button className="p-5 bg-white text-black hover:bg-blue-600 rounded-full hover:text-white">
        <FiSearch />
      </button>
    </div>
  );
}
