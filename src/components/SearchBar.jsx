import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="w-full flex justify-center gap-5">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="w-2/5 p-3 border rounded-lg outline-none"
        value={query}
        onChange={handleInputChange}
      />
      <button className="p-5 bg-white text-black hover:bg-blue-600 rounded-full hover:text-white">
        <FiSearch/>
      </button>
    </div>
  );
}
