import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [movieName, setMovieName] = useState('')
  
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-blue-400 mt-32">
        🎥 Movie Query
      </h1>
      <SearchBar/>
    </div>
  );
}

export default App;
