import { useCallback, useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchmovies } from "./api/movieApi";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async (query) => {
    if (query.trim().length === 0) return;
    setLoading(true);
    const result = await fetchmovies(query);
    setMovies(result);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5 text-blue-400 mt-25">
        🎥 Movie Query
      </h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-lg text-blue-300 mt-6">Loading...</p>}
      {!loading && movies.length === 0 && (
        <p className="text-lg text-gray-400 mt-6">
          Start typing to search for movies...
        </p>
      )}
      {movies.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="bg-gray-800 rounded-lg p-4">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/200"
                }
                alt={movie.Title}
                className="rounded-lg mb-3"
              />
              <h3 className="text-lg font-bold">{movie.Title}</h3>
              <p className="text-sm text-gray-400">{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
